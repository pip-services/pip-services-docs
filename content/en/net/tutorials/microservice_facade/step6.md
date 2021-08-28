---
type: docs
no_list: true
title: "Step 7. Testing of operations"
linkTitle: "Step 7. Testing" 
gitUrl: "https://github.com/pip-services-samples/facade-sample-dotnet"
---

Before we integrate our new facade with the actual system, we should put it through its paces and thoroughly test it. So let’s develop a set of tests and helper elements for testing all of the operations registered in the facade. We’ll start off by creating a set of helper classes. One will test our dependencies, another will test how well the facade works with users, and the last one will contain a set of test users. All of these files will be placed in the folder **/test/fixtures**.

The file for testing dependencies will be called **TestReferences.cs** and will allow us to test how well the facade is able to work with the microservices it depends on. This file’s code is listed below:

**/test/fixture/TestReferences.cs**

```cs
using PipServices.Templates.Facade.Build;
using PipServices.Templates.Facade.Clients.Version1;
using PipServices.Templates.Facade.Operations.Version1;
using PipServices.Templates.Facade.Services.Version1;
using PipServices.Templates.Facade.Services.Version2;
using PipServices3.Commons.Config;
using PipServices3.Commons.Refer;
using PipServices3.Container.Refer;
using PipServices3.Rpc.Build;
using PipServices3.Rpc.Services;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PipServices.Templates.Facade.Fixtures
{
	public class TestReferences: ManagedReferences
	{
		private ClientFacadeFactory _factory = new ClientFacadeFactory();

		public TestReferences()
		{
			AppendDependencies();
			ConfigureService();
            CreateUsersAndSessionsAsync().Wait();
        }

		private void AppendDependencies()
		{
			// Add factories
			Put(null, new ClientFacadeFactory());
			Put(null, new DefaultRpcFactory());

			// Add service
			Put(null, new FacadeServiceV1());
			Put(null, new FacadeServiceV2());

			// Add services
			Put(new Descriptor("pip-services-accounts", "client", "memory", "default", "*"), new AccountsMemoryClientV1());
			Put(new Descriptor("pip-services-sessions", "client", "memory", "default", "*"), new SessionsMemoryClientV1());
			Put(new Descriptor("pip-services-passwords", "client", "null", "default", "*"), new PasswordsNullClientV1());
			Put(new Descriptor("pip-services-roles", "client", "memory", "default", "*"), new RolesMemoryClientV1());
			Put(new Descriptor("pip-services-emailsettings", "client", "memory", "default", "*"), new EmailSettingsMemoryClientV1());
			Put(new Descriptor("pip-services-sites", "client", "direct", "memory", "*"), new SitesMemoryClientV1());
		}

		private void ConfigureService()
		{
			// Configure Facade service
			var service = GetOneRequired<HttpEndpoint>(
				new Descriptor("pip-services", "endpoint", "http", "default", "*")
			);
			service.Configure(ConfigParams.FromTuples(
				"root_path", "", //"/api/v1",
				"connection.protocol", "http",
				"connection.host", "0.0.0.0",
				"connection.port", 3000
			));
		}

		private async Task CreateUsersAndSessionsAsync()
		{
            // Create accounts
            var accountsClient = GetOneRequired<IAccountsClientV1>(
                new Descriptor("pip-services-accounts", "client", "*", "*", "*")
            );

            var adminUserAccount = new AccountV1{
            Id = TestUsers.AdminUserId, 
            Login = TestUsers.AdminUserLogin, 
            Name = TestUsers.AdminUserName,
            Active = true,
            CreateTime = DateTime.Now
              };
            await accountsClient.CreateAccountAsync(null, adminUserAccount);

            var user1Account = new AccountV1{
            Id = TestUsers.User1Id, 
            Login = TestUsers.User1Login, 
            Name = TestUsers.User1Name,
            Active = true,
            CreateTime = DateTime.Now
              };
            await accountsClient.CreateAccountAsync(null, user1Account);

            var user2Account = new AccountV1{
            Id = TestUsers.User2Id, 
            Login = TestUsers.User2Login, 
            Name = TestUsers.User2Name,
            Active = true,
            CreateTime = DateTime.Now
              };
            await accountsClient.CreateAccountAsync(null, user2Account);

            // Create test site(s)
            var sitesClient = GetOneRequired<ISitesClientV1>(
                new Descriptor("pip-services-sites", "client", "*", "*", "*")
            );
            var site1 = new SiteV1
            {
            Id = TestSites.Site1Id, 
            Name = TestSites.Site1Name
              };
            await sitesClient.CreateSiteAsync(null, site1);

            // Create user roles
            var rolesClient = GetOneRequired<IRolesClientV1>(
                new Descriptor("pip-services-roles", "client", "*", "*", "*")
            );
            await rolesClient.SetRolesAsync(
                null, TestUsers.AdminUserId, new[] {"admin", TestSites.Site1Id + ":admin" });
            await rolesClient.SetRolesAsync(
                null, TestUsers.User1Id, new[] { TestSites.Site1Id + ":manager" });
            await rolesClient.SetRolesAsync(
                null, TestUsers.User2Id, new[] { TestSites.Site1Id + ":user" });

            // Create opened sessions
            var sessionsClient = GetOneRequired<ISessionsClientV1>(
                new Descriptor("pip-services-sessions", "client", "*", "*", "*")
            );

            var adminUserData = CreateUserData(adminUserAccount);
            adminUserData.Roles = new List<string>(new[] { "admin", TestSites.Site1Id + ":admin" });
            var session = await sessionsClient.OpenSessionAsync(
                null, TestUsers.AdminUserId, TestUsers.AdminUserName,
                null, null, adminUserData, null);
            session.Id = TestUsers.AdminUserSessionId;

            var user1Data = CreateUserData(user1Account);
            user1Data.Roles = new List<string>(new[] { TestSites.Site1Id + ":manager" });
            session = await sessionsClient.OpenSessionAsync(
                null, TestUsers.User1Id, TestUsers.User1Name,
                null, null, user1Data, null);
            session.Id = TestUsers.User1SessionId;

            var user2Data = CreateUserData(user2Account);
            user2Data.Roles = new List<string>(new[] { TestSites.Site1Id + ":user" });
            session = await sessionsClient.OpenSessionAsync(
                null, TestUsers.User2Id, TestUsers.User2Name,
                null, null, user2Data, null);
            session.Id = TestUsers.User2SessionId;
        }

		private SessionUserV1 CreateUserData(AccountV1 account)
		{
            return new SessionUserV1
            {
                Id = account.Id,
                Name = account.Name,
                Login = account.Login,
                CreateTime = account.CreateTime,
                TimeZone = account.TimeZone,
                Language = account.Language,
                Theme = account.Theme,
                //Settings: settings,
                CustomHdr = account.CustomHdr,
                CustomDat = account.CustomDat
            };
        }
	}
}

```

Now, let’s create a file with a test client, which will help us test our user and session related operations. Place the code below into a file named **TestRestClient.cs**:

**/test/fixture/TestRestClient.cs**

```cs
using PipServices3.Commons.Convert;
using PipServices3.Commons.Data.Mapper;
using PipServices3.Commons.Errors;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace PipServices.Templates.Facade.Fixtures
{
	public class TestRestClient
	{
		private HttpClient _httpClient;

		public TestRestClient()
		{
			_httpClient = new HttpClient();
		}

		public async Task<T> GetAsync<T>(string route, dynamic body = null)
		{
			return await InvokeAsync<T>(HttpMethod.Get, route, body);
		}

		public async Task<T> PostAsync<T>(string route, dynamic body = null)
		{
			return await InvokeAsync<T>(HttpMethod.Post, route, body);
		}


		public async Task<T> GetAsUserAsync<T>(string sessionId, string route, dynamic body = null)
		{
			return await InvokeAsUserAsync<T>(sessionId, HttpMethod.Get, route, body);
		}

		public async Task<T> PostAsUserAsync<T>(string sessionId, string route, dynamic body = null)
		{
			return await InvokeAsUserAsync<T>(sessionId, HttpMethod.Post, route, body);
		}

		public async Task<T> PutAsUserAsync<T>(string sessionId, string route, dynamic body = null)
		{
			return await InvokeAsUserAsync<T>(sessionId, HttpMethod.Put, route, body);
		}

		public async Task<T> DelAsUserAsync<T>(string sessionId, string route, dynamic body = null)
		{
			return await InvokeAsUserAsync<T>(sessionId, HttpMethod.Delete, route, body);
		}

		public async Task<T> InvokeAsync<T>(HttpMethod method, string route, dynamic body = null)
		{
			var requestUri = $"http://localhost:3000" + route;
			var request = new HttpRequestMessage(method, requestUri);

			if (body != null)
			{
				request.Content = new StringContent(JsonConverter.ToJson(body), Encoding.UTF8, "application/json");
			}

			var response = await _httpClient.SendAsync(request);
			
			var responseValue = await response.Content.ReadAsStringAsync();

			if (!response.IsSuccessStatusCode)
			{
				var errorDescription = JsonConverter.FromJson<ErrorDescription>(responseValue);
				throw ApplicationExceptionFactory.Create(errorDescription);
			}

			return JsonConverter.FromJson<T>(responseValue);
		}

		public async Task<T> InvokeAsUserAsync<T>(string sessionId, HttpMethod method, string route, dynamic body = null)
		{
			var requestUri = $"http://localhost:3000" + route;
			var request = new HttpRequestMessage(method, requestUri);
			request.Headers.Add("x-session-id", sessionId);

			if (body != null)
			{
				request.Content = new StringContent(JsonConverter.ToJson(body), Encoding.UTF8, "application/json");
			}

			var response = await _httpClient.SendAsync(request);
			var responseValue = await response.Content.ReadAsStringAsync();

			if (!response.IsSuccessStatusCode)
			{
				var errorDescription = JsonConverter.FromJson<ErrorDescription>(responseValue);
				throw ApplicationExceptionFactory.Create(errorDescription);
			}

			return JsonConverter.FromJson<T>(responseValue);
		}
	}
}

```

Lastly, define some test users in a file named **TestUsers.cs**, as shown below:

**/test/fixture/TestUsers.cs**

```cs
namespace PipServices.Templates.Facade.Fixtures
{
	public static class TestUsers
	{
        public static readonly string AdminUserId = "1";
        public static readonly string AdminUserName = "Admin User";
        public static readonly string AdminUserLogin = "admin";
        public static readonly string AdminUserPassword = "pwd123";
        public static readonly string AdminUserSessionId = "111";

        public static readonly string User1Id = "2";
        public static readonly string User1Name = "User #1";
        public static readonly string User1Login = "user1";
        public static readonly string User1Password = "pwd123";
        public static readonly string User1SessionId = "222";

        public static readonly string User2Id = "3";
        public static readonly string User2Name = "User #2";
        public static readonly string User2Login = "user2";
        public static readonly string User2Password = "pwd123";
        public static readonly string User2SessionId = "333";
	}
}

```

Now we can move on to the tests themselves. Create the following files in the folder **test/operations**:

**BeaconsRoutesV1Test.cs** - for testing business logic operations of the Beacons microservice:

**/test/operations/BeaconsRoutesV1Test.cs**

```cs
using PipServices.Templates.Facade.Clients.Version1;
using PipServices.Templates.Facade.Fixtures;
using PipServices3.Commons.Data;
using PipServices3.Commons.Refer;
using System;
using System.Threading.Tasks;
using Xunit;

namespace PipServices.Templates.Facade.Operations.Version1
{

	[Collection("Sequential")]
	public class BeaconsRoutesV1Test: IDisposable
	{
		BeaconV1 BEACON1 = new BeaconV1 {
			Id = "1",
			Udi = "000001",
			SiteId = "1",
			Label = "TestBeacon1",
			Center = new CenterObjectV1 { Type = "Point", Coordinates = new double[] { 0, 0 } },
			Radius = 50
		};
		BeaconV1 BEACON2 = new BeaconV1
		{
			Id = "2",
			Udi = "000002",
			SiteId = "1",
			Label = "TestBeacon2",
			Center = new CenterObjectV1 { Type = "Point", Coordinates = new double[] { 2, 2 } },
			Radius = 70
		};
		BeaconV1 BEACON3 = new BeaconV1
		{
			Id = "3",
			Udi = "000003",
			SiteId = "2",
			Label = "TestBeacon3",
			Center = new CenterObjectV1 { Type = "Point", Coordinates = new double[] { 10, 10 } },
			Radius = 50
		};

		private readonly TestReferences references;
		private readonly TestRestClient rest;

		public BeaconsRoutesV1Test()
		{
			rest = new TestRestClient();
			references = new TestReferences();
			references.Put(new Descriptor("pip-services-beacons", "client", "memory", "default", "1.0"), new BeaconsMemoryClientV1());
			references.OpenAsync(null).Wait();
		}

		public void Dispose()
		{
			references.CloseAsync(null).Wait();
		}

		[Fact]
		public async Task It_Should_Perform_Beacon_OperationsAsync()
		{
			BeaconV1 beacon1, beacon2, beacon3;

			// Create one beacon
			var beacon = await rest.PostAsUserAsync<BeaconV1>(
					TestUsers.AdminUserSessionId,
					"/api/v1/sites/" + BEACON1.SiteId + "/beacons",
					BEACON1);

			Assert.NotNull(beacon);
			Assert.Equal(beacon.SiteId, BEACON1.SiteId);
			Assert.Equal(beacon.Udi, BEACON1.Udi);
			Assert.Equal(beacon.Label, BEACON1.Label);
			Assert.NotNull(beacon.Center);

			beacon1 = beacon;

			// Create another beacon
			beacon = await rest.PostAsUserAsync<BeaconV1>(
					TestUsers.AdminUserSessionId,
					"/api/v1/sites/" + BEACON2.SiteId + "/beacons",
					BEACON2);

			Assert.NotNull(beacon);
			Assert.Equal(beacon.SiteId, BEACON2.SiteId);
			Assert.Equal(beacon.Udi, BEACON2.Udi);
			Assert.Equal(beacon.Label, BEACON2.Label);
			Assert.NotNull(beacon.Center);

			beacon2 = beacon;

			// Create yet another beacon
			beacon = await rest.PostAsUserAsync<BeaconV1>(
					TestUsers.AdminUserSessionId,
					"/api/v1/sites/" + BEACON3.SiteId + "/beacons",
					BEACON3);

			Assert.NotNull(beacon);
			Assert.Equal(beacon.SiteId, BEACON3.SiteId);
			Assert.Equal(beacon.Udi, BEACON3.Udi);
			Assert.Equal(beacon.Label, BEACON3.Label);
			Assert.NotNull(beacon.Center);

			beacon3 = beacon;

			// Get all beacons
			var page = await rest.GetAsUserAsync<DataPage<BeaconV1>>(
					TestUsers.AdminUserSessionId,
					"/api/v1/sites/" + BEACON1.SiteId + "/beacons");
			Assert.NotNull(page);
			Assert.Equal(2, page.Data.Count);

			// Calculate positions
			var position = await rest.PostAsUserAsync<CenterObjectV1>(
					TestUsers.AdminUserSessionId,
					"/api/v1/sites/" + BEACON1.SiteId + "/beacons/calculate_position",
					new 
					{
						site_id = BEACON1.SiteId,
                        udis = new string[] { BEACON1.Udi }
					});
			Assert.NotNull(position);
			Assert.Equal("Point", position.Type);

			// Validate beacon udi
			var result = await rest.PostAsUserAsync<string>(
					TestUsers.AdminUserSessionId,
					"/api/v1/sites/" + beacon1.SiteId + "/beacons/validate_udi?udi=" + beacon1.Udi);
			Assert.Equal(beacon1.Id, result);

			// Update the beacon
			beacon1.Label = "ABC";
			beacon = await rest.PutAsUserAsync<BeaconV1>(
					TestUsers.AdminUserSessionId,
					"/api/v1/sites/" + beacon1.SiteId + "/beacons/" + beacon1.Id,
					beacon1);
			Assert.NotNull(beacon);
			Assert.Equal("ABC", beacon.Label);

			beacon1 = beacon;

			// Delete beacon
			await rest.DelAsUserAsync<BeaconV1>(
					TestUsers.AdminUserSessionId,
					"/api/v1/sites/" + beacon1.SiteId + "/beacons/" + beacon1.Id);

			// Try to get delete beacon
			beacon = await rest.GetAsUserAsync<BeaconV1>(
					TestUsers.AdminUserSessionId,
					"/api/v1/sites/" + beacon1.SiteId + "/beacons/" + beacon1.Id);
			Assert.Null(beacon);
		}

	}
}

```

**SessionsRoutesV1Test.cs** - for testing user and session related operations:

**/test/operations/SessionsRoutesV1Test.cs**

```cs

using PipServices.Templates.Facade.Clients.Version1;
using PipServices.Templates.Facade.Fixtures;
using PipServices3.Commons.Data;
using PipServices3.Commons.Errors;
using PipServices3.Commons.Refer;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace PipServices.Templates.Facade.Operations.Version1
{
	[Collection("Sequential")]
	public class SessionsRoutesV1Test : IDisposable
	{
		SignupData USER = new SignupData
		{
			Login = "test",
			Name = "Test User",
			Email = "test@conceptual.vision",
			Password = "test123"
		};

		private readonly TestReferences references;
		private readonly TestRestClient rest;

		public SessionsRoutesV1Test()
		{
			rest = new TestRestClient();
			references = new TestReferences();
			references.OpenAsync(null).Wait();
		}

		public void Dispose()
		{
			references.CloseAsync(null).Wait();
		}

		[Fact]
		public async Task It_Should_Signup_New_User()
		{
			var session = await rest.PostAsync<SessionV1>("/api/v1/signup", USER);

			Assert.NotNull(session);
			Assert.NotNull(session.Id);
			Assert.Equal(USER.Name, session.UserName);
		}

		[Fact]
		public async Task It_Should_Check_Login_For_Signup()
		{
			// Check registered email
			await Assert.ThrowsAsync<BadRequestException>(async () => await rest.GetAsync<string>("/api/v1/signup/validate?login=" + TestUsers.User1Login));

			// Check not registered email
			var result = await rest.GetAsync<string>("/api/v1/signup/validate?login=xxx@gmail.com");
			Assert.True(string.IsNullOrEmpty(result));
		}

		[Fact]
		public async Task It_Should_Not_Signup_With_The_Same_Email()
		{
			// Sign up
			var session = await rest.PostAsync<SessionV1>("/api/v1/signup", USER);

			// Try to sign up again
			await Assert.ThrowsAsync<BadRequestException>(async () => await rest.PostAsync<SessionV1>("/api/v1/signup", USER));
		}

		[Fact]
		public async Task It_Should_Signout()
		{
			var result = await rest.PostAsync<string>("/api/v1/signout");
			Assert.True(string.IsNullOrEmpty(result));
		}

		[Fact]
		public async Task It_Should_Signin_With_Email_And_Password()
		{
			// Sign up
			var session = await rest.PostAsync<SessionV1>("/api/v1/signup", USER);
			Assert.NotNull(session);

			// Sign in with username
			session = await rest.PostAsync<SessionV1>("/api/v1/signin", new 
			{
				login = USER.Login,
                password = USER.Password
			});
			Assert.NotNull(session);
		}

		[Fact]
		public async Task It_Should_Get_Sessions_As_Admin()
		{
			var page = await rest.GetAsUserAsync<DataPage<SessionV1>>(
				TestUsers.AdminUserSessionId,
				"/api/v1/sessions?paging=1&skip=0&take=2");

			Assert.NotNull(page);
		}

		[Fact]
		public async Task It_Should_Get_User_Sessions_As_Owner()
		{
			var page = await rest.GetAsUserAsync<DataPage<SessionV1>>(
				TestUsers.User1SessionId,
				"/api/v1/sessions/" + TestUsers.User1Id + "?paging=1&skip=0&take=2");

			Assert.NotNull(page);
		}
	}
}

```

Run the tests using the following command:

```bash
dotnet test
```

Once all the tests pass successfully, you can move on to [Step 8 - Running the facade](../step7) - to learn how to deploy all of these microservices using Docker.


<span class="hide-title-link">

### [Step 8 - Running the facade](../step7)

</span>
