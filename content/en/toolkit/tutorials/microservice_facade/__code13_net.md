
**/test/operations/version1/SessionsRoutesV1Test.cs**

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

