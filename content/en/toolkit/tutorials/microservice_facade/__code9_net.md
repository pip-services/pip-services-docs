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

