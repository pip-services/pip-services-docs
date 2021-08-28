---
type: docs
no_list: true
title: "Step 5. Authorization"
linkTitle: "Step 5. Authorization" 
gitUrl: "https://github.com/pip-services-samples/facade-sample-dotnet"
---

Once we’ve established who our user is, we need to implement some way of controlling what operations our user can perform, based on the rights he/she has been assigned. In this tutorial, we will be taking a look at how to install access limitations that are based on user roles. The roles themselves are stored in the Roles microservice and are loaded into a UserSession by the **LoadSessionAsync** interceptor we discussed in the previous step.

Our Authorizer class was made to provide flexible access management. We will be using this class to limit access to certain operations in our facade’s RESTful services. This class’s implementation can be found in the **Authorize.cs** file, located in the folder **services/version1**. Its code is as follows:

**/src/service/services/version1/Authorize.cs**

```cs
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using PipServices3.Commons.Refer;
using PipServices3.Rpc.Auth;
using PipServices3.Rpc.Services;
using System;
using System.Security.Claims;
using System.Threading.Tasks;
using PipServices.Templates.Facade.Build;
using PipServices.Templates.Facade.Operations.Version1;
using System.Collections.Generic;
using PipServices3.Commons.Errors;
using System.Linq;
using Microsoft.Extensions.Primitives;

namespace PipServices.Templates.Facade.Services.Version1
{
    public class AuthorizerV1 : IReferenceable
    {
        private BasicAuthorizer _basicAuth = new BasicAuthorizer();
        private RoleAuthorizer _roleAuth = new RoleAuthorizer();
        private OwnerAuthorizer _ownerAuth = new OwnerAuthorizer();

        public void SetReferences(IReferences references)
        {
        }

        public Func<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func<Task>, Task> Anybody()
        {
            return _basicAuth.Anybody();
        }

        public Func<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func<Task>, Task> Signed()
        {
			return _basicAuth.Signed();
		}

        public Func<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func<Task>, Task> Owner(string idParam = "user_id")
        {
            return _ownerAuth.Owner(idParam);
        }

        public Func<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func<Task>, Task> OwnerOrAdmin(string idParam = "user_id")
        {
            return async (request, response, user, routeData, next) =>
            {
                if (user == null || !user.Identity.IsAuthenticated)
                {
                    await HttpResponseSender.SendErrorAsync(
                        response,
                        new UnauthorizedException(
                            null, "NOT_SIGNED",
                            "User must be signed in to perform this operation"
                        ).WithStatus(401)
                    );
                }
                else
                {
                    var identity = user.Identity as ClaimsIdentity;
                    var userIdClaim = identity?.Claims.FirstOrDefault(c =>
                        c.Type == "http://schemas.microsoft.com/identity/claims/objectidentifier");

					if (!request.Query.TryGetValue(idParam, out StringValues userId))
					{
						userId = routeData.Values.TryGetValue(idParam, out object idValue) 
                            ? new StringValues(idValue.ToString())
                            : new StringValues();
					}

					if (userIdClaim?.Value != userId.ToString())
                    {
                        await HttpResponseSender.SendErrorAsync(
                            response,
                            new UnauthorizedException(
                                null, "FORBIDDEN",
                                "Only data owner can perform this operation"
                            ).WithStatus(403)
                        );
                    }
                    else
                    {
                        await next();
                    }
                }
            };

            //return _ownerAuth.OwnerOrAdmin(idParam);
        }

        public Func<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func<Task>, Task> SiteRoles(string[] roles, string idParam = "site_id")
        {
            return async (HttpRequest request, HttpResponse response, ClaimsPrincipal user, RouteData routeData, Func<Task> next) =>
            {
                var sessionUser = HttpRequestHelper.GetContextItem<SessionUserV1>(request, "user");

                if (sessionUser == null)
                {
                    await HttpResponseSender.SendErrorAsync(response, new UnauthorizedException(
                        null, "NOT_SIGNED",
                        "User must be signed in to perform this operation",
                        null
                    ).WithStatus(401));

                    return;
                }

                var siteId = routeData.Values["site_id"];
                var authorized = sessionUser.Roles.Contains("admin");

                if (siteId != null && !authorized)
                {
					foreach (var role in roles)
					{
                        authorized = authorized || sessionUser.Roles.Contains(siteId + ":" + role);
                    }
                }

                if (!authorized)
                {
                    await HttpResponseSender.SendErrorAsync(response, new UnauthorizedException(
                            null, "NOT_IN_SITE_ROLE",
                            "User must be site:" + string.Join(" or site:", roles) + " to perform this operation"
                        ).WithDetails("roles", roles).WithStatus(403));

                    return;
                }

                await next();
            };
        }

        public Func<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func<Task>, Task> Admin()
        {
            return _roleAuth.UserInRole("admin");
        }

        public Func<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func<Task>, Task> SiteAdmin(string idParam = "site_id")
        {
            return SiteRoles(new[] { "admin" }, idParam);
        }

        public Func<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func<Task>, Task> SiteManager(string idParam = "site_id")
        {
            return SiteRoles(new[] { "admin", "manager" }, idParam);
        }

        public Func<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func<Task>, Task> SiteUser(string idParam = "site_id")
        {
            return SiteRoles(new[] { "admin", "manager", "user" }, idParam);
        }

        public Func<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func<Task>, Task> SiteAdminOrOwner(string userIdParam = "user_id", string siteIdParam = "site_id")
        {
            return async (HttpRequest request, HttpResponse response, ClaimsPrincipal user, RouteData routeData, Func<Task> next) =>
            {
                var sessionUser = HttpRequestHelper.GetContextItem<SessionUserV1>(request, "user");

                if (sessionUser == null)
                {
                    await HttpResponseSender.SendErrorAsync(response, new UnauthorizedException(
                        null, "NOT_SIGNED",
                        "User must be signed in to perform this operation",
                        null
                    ).WithStatus(401));

                    return;
                }

                var userId = request.Query[userIdParam].ToString();

				if (userId == null || userId != sessionUser.Id)
				{
					var siteId = request.Query[siteIdParam].ToString();
					var authorized = sessionUser.Roles.Contains("admin")
                        || sessionUser.Roles.Contains(siteId + "admin");

					if (!authorized)
					{
						await HttpResponseSender.SendErrorAsync(response, new UnauthorizedException(
								null, "NOT_IN_SITE_ROLE",
								"User must be site:admin to perform this operation"
							).WithDetails("roles", new[] { "admin" }).WithStatus(403));

						return;
					}
				}

				await next();
            };
        }
    }
}
```

Let’s take a closer look at each of these methods:


- anybody - allows everyone access, even unauthorized users.
- signed - access is granted only to authorized users.
- admin - access is granted only to users with the Administrator role.
- owner - access is granted only for the session owner.


The logic pretty much boils down to making a decision about whether we should allow further access, or send an answer with the corresponding error. In case of the latter, the error is based on the information provided by the clients and the information about the user that is embedded into the interceptor’s request for the active session.


Setting specific access levels to certain resources is configured when registering routes in the service. The service’s implementation is described in [Step 6 - REST services and versioning](../step5).

<span class="hide-title-link">

### [Step 6 - REST services and versioning](../step5)

</span>
