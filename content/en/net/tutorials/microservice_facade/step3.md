---
type: docs
no_list: true
title: "Step 4. Authentication and sessions"
linkTitle: "Step 4. Authentication and sessions" 
gitUrl: "https://github.com/pip-services-samples/facade-sample-dotnet"
---

In most cases, access to an application’s (service’s) resources is granted only after users authenticate themselves in the system. Authentication is the process of checking the validity of the identifier provided by a user. A successful authentication (besides establishing a trusted relationship and generating a session key) is usually also followed up by user authorization. This second step grants the user access rights to an approved set of resources, deemed necessary for the user to perform his/her tasks.

Just like in the previous step, we’ll be placing the files of this step in the **operation/version1** folder.

Let’s start by defining a data model for storing user information within a session. Create a new file named **SessionUserV1.cs** with the following code:

**src/service/services/operations/version1/SessionUserV1.cs**

```cs
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace PipServices.Templates.Facade.Operations.Version1
{
	[DataContract]
	public class SessionUserV1
	{
		// Identification
		[DataMember(Name = "id")]
		public string Id { get; set; }
		[DataMember(Name = "login")]
		public string Login { get; set; }
		[DataMember(Name = "name")]
		public string Name { get; set; }
		[DataMember(Name = "create_time")]
		public DateTime CreateTime { get; set; }

		// User preferences
		[DataMember(Name = "time_zone")]
		public string TimeZone { get; set; }
		[DataMember(Name = "language")]
		public string Language { get; set; }
		[DataMember(Name = "theme")]
		public string Theme { get; set; }

		// Security info
		[DataMember(Name = "roles")]
		public List<string> Roles { get; set; }
		[DataMember(Name = "change_pwd_time")]
		public DateTime? ChangePwdTime { get; set; }
		[DataMember(Name = "sites")]
		public List<ISessionSite> Sites { get; set; }
		[DataMember(Name = "settings")]
		public Dictionary<string, string> Settings { get; set; }

		// Custom fields
		[DataMember(Name = "custom_hdr")]
		public object CustomHdr { get; set; }
		[DataMember(Name = "custom_dat")]
		public object CustomDat { get; set; }
	}
}


```

This data model will contain all necessary information about the user: the session’s ID, login, username, list of rolls, etc.

We’ll be defining our operations for managing sessions and authenticating users in a file named **SessionOperationsV1.cs**. A listing of this file’s code is presented below:

**src/services/operations/version1/SessionOperationsV1.cs**

```cs
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using PipServices.Templates.Facade.Clients.Version1;
using PipServices3.Commons.Config;
using PipServices3.Commons.Convert;
using PipServices3.Commons.Data;
using PipServices3.Commons.Errors;
using PipServices3.Commons.Refer;
using PipServices3.Rpc.Services;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace PipServices.Templates.Facade.Operations.Version1
{
	public class SessionsOperationsV1 : RestOperations
	{
		private static ConfigParams _defaultConfig1 = ConfigParams.FromTuples(
			"options.cookie_enabled", true,
			"options.cookie", "x-session-id",
			"options.max_cookie_age", 365L * 24 * 60 * 60 * 1000
		);

		private string _cookie = "x-session-id";
		private bool _cookieEnabled = true;
		private long _maxCookieAge = 365L * 24 * 60 * 60 * 1000;

		private ISettingsClientV1 _settingsClient;
		private IAccountsClientV1 _accountsClient;
		private ISessionsClientV1 _sessionsClient;
		private IPasswordsClientV1 _passwordsClient;
		private IRolesClientV1 _rolesClient;
		private IEmailSettingsClientV1 _emailSettingsClient;
		private ISitesClientV1 _sitesClient;
		private IInvitationsClientV1 _invitationsClient;


		public SessionsOperationsV1()
		{
			_dependencyResolver.Put("settings", new Descriptor("pip-services-settings", "client", "*", "*", "1.0"));
			_dependencyResolver.Put("accounts", new Descriptor("pip-services-accounts", "client", "*", "*", "1.0"));
			_dependencyResolver.Put("passwords", new Descriptor("pip-services-passwords", "client", "*", "*", "1.0"));
			_dependencyResolver.Put("roles", new Descriptor("pip-services-roles", "client", "*", "*", "1.0"));
			_dependencyResolver.Put("emailsettings", new Descriptor("pip-services-emailsettings", "client", "*", "*", "1.0"));
			_dependencyResolver.Put("sessions", new Descriptor("pip-services-sessions", "client", "*", "*", "1.0"));
			_dependencyResolver.Put("sites", new Descriptor("pip-services-sites", "client", "*", "*", "1.0"));
			_dependencyResolver.Put("invitations", new Descriptor("pip-services-invitations", "client", "*", "*", "1.0"));
		}

		public new void Configure(ConfigParams config)
		{
			config = config.SetDefaults(_defaultConfig1);
			_dependencyResolver.Configure(config);

			_cookieEnabled = config.GetAsBooleanWithDefault("options.cookie_enabled", _cookieEnabled);
			_cookie = config.GetAsStringWithDefault("options.cookie", _cookie);
			_maxCookieAge = config.GetAsLongWithDefault("options.max_cookie_age", _maxCookieAge);

			base.Configure(config);
		}

		public new void SetReferences(IReferences references)
		{
			base.SetReferences(references);

			_settingsClient = _dependencyResolver.GetOneRequired<ISettingsClientV1>("settings");
			_sessionsClient = _dependencyResolver.GetOneRequired<ISessionsClientV1>("sessions");
			_accountsClient = _dependencyResolver.GetOneRequired<IAccountsClientV1>("accounts");
			_passwordsClient = _dependencyResolver.GetOneRequired<IPasswordsClientV1>("passwords");
			_rolesClient = _dependencyResolver.GetOneRequired<IRolesClientV1>("roles");
			_emailSettingsClient = _dependencyResolver.GetOneRequired<IEmailSettingsClientV1>("emailsettings");
			_sitesClient = _dependencyResolver.GetOneRequired<ISitesClientV1>("sites");
			_invitationsClient = _dependencyResolver.GetOneRequired<IInvitationsClientV1>("invitations");
		}

		public async Task LoadSessionAsync(HttpRequest request, HttpResponse response, ClaimsPrincipal user, RouteData routeData,
			Func<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Task> next)
		{
			var sessionId = request.Headers["x-session-id"];
			if (!string.IsNullOrWhiteSpace(sessionId))
			{
				var session = await _sessionsClient.GetSessionByIdAsync("facade", sessionId);
				if (session == null)
				{
					var error = new UnauthorizedException(
							"facade",
							"SESSION_NOT_FOUND",
							"Session invalid or already expired."
						).WithDetails("session_id", sessionId).WithStatus(440);

					await SendErrorAsync(response, error);
					return;
				}

				// Associate session user with the request
				request.HttpContext.Items["user_id"] = session.UserId;
				request.HttpContext.Items["user_name"] = session.UserName;
				request.HttpContext.Items["user"] = session.User;
				request.HttpContext.Items["session_id"] = session.Id;

				// Set IsAuthenticated and add roles to claims
				var sessionUser = (SessionUserV1)session.User;
				var roles = sessionUser.Roles ?? new List<string>();
				var claims = roles.Select(r => new Claim(ClaimTypes.Role, r)).ToList();

				// Set user id as claim for OwnerAuthorizer
				claims.Add(new Claim("http://schemas.microsoft.com/identity/claims/objectidentifier", session.UserId));

				user = new ClaimsPrincipal(new ClaimsIdentity(claims, "Basic"));
			}

			await next(request, response, user, routeData);
		}

		public async Task OpenSessionAsync(HttpRequest request, HttpResponse response, AccountV1 account, List<string> roles)
		{
			try
			{
				// Retrieve sites for user
				var siteIds = roles
					.Where(r => r.IndexOf(":") > 0)
					.Select(r => r.Substring(0, r.IndexOf(":")))
					.ToList();

				List<SiteV1> sites = new List<SiteV1>();

				if (siteIds.Count > 0)
				{
					var filter = FilterParams.FromTuples("ids", siteIds);
					var page = await _sitesClient.GetSitesAsync(null, filter, null);

					sites = page.Data;
				}

				UserPasswordInfoV1 passwordInfo = await _passwordsClient.GetPasswordInfoAsync(null, account.Id);

				ConfigParams settings = await _settingsClient.GetSectionByIdAsync(null, account.Id);

				// Open a new user session
				var user = new SessionUserV1
				{
					Id = account.Id,
					Name = account.Name,
					Login = account.Login,
					CreateTime = account.CreateTime,
					TimeZone = account.TimeZone,
					Language = account.Language,
					Theme = account.Theme,
					Roles = roles,
					Sites = sites.Select(s => new SessionSiteV1 { Id = s.Id, Name = s.Name }).ToList<ISessionSite>(),
					//Settings: settings,
					ChangePwdTime = passwordInfo?.ChangeTime,
					CustomHdr = account.CustomHdr,
					CustomDat = account.CustomDat
				};

				string address = null;  // HttpRequestDetector.detectAddress(req);
				string client = null;  // HttpRequestDetector.detectBrowser(req);
									   //string platform = HttpRequestDetector.detectPlatform(req);

				SessionV1 session = await _sessionsClient.OpenSessionAsync(null, account.Id, account.Name, address, client, user, null);
				await SendResultAsync(response, session);
			}
			catch (Exception ex)
			{
				await SendErrorAsync(response, ex);
			}
		}

		public async Task SignupAsync(HttpRequest request, HttpResponse response, ClaimsPrincipal user, RouteData routeData)
		{
			try
			{
				// Validate password first
				// Todo: complete implementation after validate password is added

				var parameters = GetParameters(request);
				var signupData = JsonConverter.FromJson<SignupData>(parameters.RequestBody);

				// Create account
				var newAccount = new AccountV1
				{
					Name = signupData.Name,
					Login = signupData.Login ?? signupData.Email, // Use email by default
					Language = signupData.Language,
					Theme = signupData.Theme,
					TimeZone = signupData.TimeZone
				};

				var account = await _accountsClient.CreateAccountAsync(null, newAccount);

				// Create password for the account
				var password = signupData.Password;

				await _passwordsClient.SetPasswordAsync(
					null, account.Id, password);

				// Activate all pending invitations
				List<string> roles = new List<string>();
				var email = signupData.Email;
				var invitations = await _invitationsClient.ActivateInvitationsAsync(null, email, account.Id);

				var invited = false;
				if (invitations != null)
				{
					// Calculate user roles from activated invitations
					foreach (var invitation in invitations)
					{
						// Was user invited with the same email?
						invited = invited || email == invitation.InviteeEmail;

						if (invitation.SiteId != null)
						{
							invitation.Role = invitation.Role ?? "user";
							var role = invitation.SiteId + ':' + invitation.Role;
							roles.Add(role);
						}
					}
				}

				// Create email settings for the account
				var newEmailSettings = new EmailSettingsV1
				{
					Id = account.Id,
                    Name = account.Name,
                    Email = email,
                    Language = account.Language
				};

				if (_emailSettingsClient != null)
				{
					if (invited)
					{
						await _emailSettingsClient.SetVerifiedSettingsAsync(null, newEmailSettings);
					}
					else
					{
						await _emailSettingsClient.SetSettingsAsync(null, newEmailSettings);
					}
				}

				await OpenSessionAsync(request, response, account, roles);
			}
			catch (Exception ex)
			{
				await SendErrorAsync(response, ex);
			}
		}

		public async Task SignupValidateAsync(HttpRequest request, HttpResponse response, ClaimsPrincipal user, RouteData routeData)
		{
			var parameters = GetParameters(request);

			var login = parameters.GetAsNullableString("login");

			Exception err = null;
			if (login != null)
			{
				try
				{
					var account = await _accountsClient.GetAccountByIdOrLoginAsync(null, login);
					if (account != null)
					{
						err = new BadRequestException(
							null, "LOGIN_ALREADY_USED",
							"Login " + login + " already being used"
						).WithDetails("login", login);
					}
				}
				catch (Exception ex)
				{
					err = ex;
				}
			}

			if (err != null) await SendErrorAsync(response, err);
			else await SendEmptyResultAsync(response);
		}

		public async Task SigninAsync(HttpRequest request, HttpResponse response, ClaimsPrincipal user, RouteData routeData)
		{
			var parameters = GetParameters(request);

			var login = parameters.GetAsNullableString("login");
			var password = parameters.GetAsNullableString("password");

			try
			{
				// Find user account
				var account = await _accountsClient.GetAccountByIdOrLoginAsync(null, login);
				if (account == null)
				{
					await SendErrorAsync(response, new BadRequestException(
							null,
							"WRONG_LOGIN",
							"Account " + login + " was not found"
						).WithDetails("login", login));

					return;
				}

				// Authenticate user
				var result = false;

				try
				{
					result = await _passwordsClient.AuthenticateAsync(null, account.Id, password);
				}
				catch (Exception ex)
				{
					if (!ex.Message.Contains("Invalid password"))
						throw;
				}

				if (!result)
				{
					await SendErrorAsync(response, new BadRequestException(
							null,
							"WRONG_PASSWORD",
							"Wrong password for account " + login
						).WithDetails("login", login));

					return;
				}

				// Retrieve user roles
				List<string> roles = new List<string>();

				if (_rolesClient != null)
				{
					var data = await _rolesClient.GetRolesByIdAsync(null, account.Id);
					if (data != null)
					{
						roles.AddRange(data);
					}
				}

				await OpenSessionAsync(request, response, account, roles);
			}
			catch (Exception ex)
			{
				await SendErrorAsync(response, ex);
			}
		}

		public async Task SignoutAsync(HttpRequest request, HttpResponse response, ClaimsPrincipal user, RouteData routeData)
		{
			// Cleanup cookie with session id
			// if (_cookieEnabled)
			//     response.ClearCookie(_cookie);
			var sessionId = GetContextItem<string>(request, "session_id");

			try
			{
				if (sessionId != null)
				{
					await _sessionsClient.CloseSessionAsync(null, sessionId);
				}

				await SendEmptyResultAsync(response);
			}
			catch (Exception ex)
			{
				await SendErrorAsync(response, ex);
			}
		}

		public async Task GetSessionsAsync(HttpRequest request, HttpResponse response, ClaimsPrincipal user, RouteData routeData)
		{
			try
			{
				var filter = GetFilterParams(request);
				var paging = GetPagingParams(request);

				var page = await _sessionsClient.GetSessionsAsync(null, filter, paging);
				await SendResultAsync(response, page);
			}
			catch (Exception ex)
			{
				await SendErrorAsync(response, ex);
			}
		}

		public async Task RestoreSessionAsync(HttpRequest request, HttpResponse response, ClaimsPrincipal user, RouteData routeData)
		{
			try
			{
				var parameters = GetParameters(request);
				var sessionId = parameters.GetAsNullableString("session_id");

				var session = await _sessionsClient.GetSessionByIdAsync(null, sessionId);

				// If session closed then return null
				if (session != null && !session.Active)
					session = null;

				if (session == null) await SendEmptyResultAsync(response);
				else await SendResultAsync(response, session);
			}
			catch (Exception ex)
			{
				await SendErrorAsync(response, ex);
			}
		}

		public async Task GetUserSessionsAsync(HttpRequest request, HttpResponse response, ClaimsPrincipal user, RouteData routeData)
		{
			try
			{
				var filter = GetFilterParams(request);
				var paging = GetPagingParams(request);
				var parameters = GetParameters(request);

				var userId = 
					parameters.GetAsNullableString("user_id") ?? 
					parameters.GetAsNullableString("account_id");

				filter.SetAsObject("user_id", userId);

				var page = await _sessionsClient.GetSessionsAsync(null, filter, paging);
				await SendResultAsync(response, page);
			}
			catch (Exception ex)
			{
				await SendErrorAsync(response, ex);
			}
		}

		public async Task GetCurrentSessionAsync(HttpRequest request, HttpResponse response, ClaimsPrincipal user, RouteData routeData)
		{
			try
			{
				// parse headers first, and if nothing in headers get cookie
				var sessionId = request.Headers["x-session-id"];

				var session = await _sessionsClient.GetSessionByIdAsync(null, sessionId);
				await SendResultAsync(response, session);
			}
			catch (Exception ex)
			{
				await SendErrorAsync(response, ex);
			}
		}

		public async Task CloseSessionAsync(HttpRequest request, HttpResponse response, ClaimsPrincipal user, RouteData routeData)
		{
			try
			{
				var parameters = GetParameters(request);
				var sessionId =
					parameters.GetAsNullableString("session_id");

				var session = await _sessionsClient.CloseSessionAsync(null, sessionId);
				await SendResultAsync(response, session);
			}
			catch (Exception ex)
			{
				await SendErrorAsync(response, ex);
			}
		}
	}
}

```

This class contains the main operations for managing sessions, which allow us to load existing sessions, create new sessions, close existing sessions, and also authenticate users. This class depends on four microservices - Accounts, Passwords, Roles, and Sessions - each of which is responsible for a certain part of the class’s logic.


The **signup** and **signin** methods perform registration of new users and authentication of existing ones, respectively. Upon successful registration or authorization, the handlers of these operations open a new session as the finishing step of these methods.


The **signout** method closes sessions when users leave the system, or automatically when the session expires.


The **LoadSessionAsync** interceptor checks a session’s validity, and whether or not it even exists. The interceptor checks the request’s header for a session ID and, if one is found, uses it to retrieve data about the session from the Sessions microservice. If the session is expired or incorrect, an error will be returned. If everything’s all right, information about the user and the session are extracted and attached to the request, and a “green light” is given for further processing.


To perform these operations, our microservice needs to be able to interact with the microservices it depends on. This communication is made simple using standard clients, the links to which are set in the setReferences method.


The authorization mechanism will be responsible for limiting access to resources, depending on the roles a user has been assigned. This part’s implementation will be discussed in [Step 5 - Authorization](../step4).

<span class="hide-title-link">

### [Step 5. Authorization](../step4)

</span>
