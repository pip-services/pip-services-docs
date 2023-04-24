
**/src/service/services/version1/FacadeServiceV1.cs**

```cs
using PipServices3.Commons.Config;
using PipServices3.Commons.Refer;
using PipServices3.Rpc.Services;
using Pip.Services.SampleFacade.Operations.Version1;
using System;
using System.Collections.Generic;

namespace Pip.Services.SampleFacade.Services.Version1
{
    public class FacadeServiceV1 : RestService
    {
		private AboutOperations _aboutOperations = new AboutOperations();
		private SessionsOperationsV1 _sessionsOperations = new SessionsOperationsV1();
		private InvitationsOperationsV1 _invitationsOperations = new InvitationsOperationsV1();
		private SitesOperationsV1 _sitesOperations = new SitesOperationsV1();
		private BeaconsOperationsV1 _beaconsOperations = new BeaconsOperationsV1();

		public FacadeServiceV1()
		{
			_baseRoute = "api/v1";
		}

		public override void Configure(ConfigParams config)
		{
			base.Configure(config);

			_aboutOperations.Configure(config);
			_sessionsOperations.Configure(config);
			_invitationsOperations.Configure(config);
			_sitesOperations.Configure(config);
			_beaconsOperations.Configure(config);
		}

		public override void SetReferences(IReferences references)
		{
			base.SetReferences(references);

			_aboutOperations.SetReferences(references);
			_sessionsOperations.SetReferences(references);
			_invitationsOperations.SetReferences(references);
			_sitesOperations.SetReferences(references);
			_beaconsOperations.SetReferences(references);
		}

		public override void Register()
        {
			var auth = new AuthorizerV1();

			// Restore session middleware
			RegisterInterceptor("",
				async (request, response, user, routeData, next) => { await _sessionsOperations.LoadSessionAsync(request, response, user, routeData, next); });

			// About Route
			RegisterRouteWithAuth("get", "/about", auth.Anybody(),
				async (request, response, user, routeData) => { await _aboutOperations.AboutAsync(request, response, user); });

			// Beacon Routes
			RegisterBeacons(auth);

			// Session Routes
			RegisterSession(auth);

			// Site Routes
			RegisterSite(auth);

			// Invitation Routes
			RegisterInvitation(auth);
		}

		private void RegisterInvitation(AuthorizerV1 auth)
		{
			RegisterRouteWithAuth("get", "/sites/{site_id}/invitations", auth.SiteUser(),
				async (request, response, user, routeData) => { await _invitationsOperations.GetInvitationsAsync(request, response, user, routeData); });
			
			RegisterRouteWithAuth("get", "/sites/{site_id}/invitations/{invitation_id}", auth.SiteUser(),
				async (request, response, user, routeData) => { await _invitationsOperations.GetInvitationAsync(request, response, user, routeData); });
			
			RegisterRouteWithAuth("post", "/sites/{site_id}/invitations", auth.Signed(),
				async (request, response, user, routeData) => { await _invitationsOperations.SendInvitationAsync(request, response, user, routeData); });
			
			RegisterRouteWithAuth("post", "/sites/{site_id}/invitations/notify", auth.SiteManager(),
				async (request, response, user, routeData) => { await _invitationsOperations.NotifyInvitationAsync(request, response, user, routeData); });
			
			RegisterRouteWithAuth("delete", "/sites/{site_id}/invitations/{invitation_id}", auth.SiteManager(),
				async (request, response, user, routeData) => { await _invitationsOperations.DeleteInvitationAsync(request, response, user, routeData); });
			
			RegisterRouteWithAuth("post", "/sites/{site_id}/invitations/{invitation_id}/approve", auth.SiteManager(),
				async (request, response, user, routeData) => { await _invitationsOperations.ApproveInvitationAsync(request, response, user, routeData); });
			
			RegisterRouteWithAuth("post", "/sites/{site_id}/invitations/{invitation_id}/deny", auth.SiteManager(),
				async (request, response, user, routeData) => { await _invitationsOperations.DenyInvitationAsync(request, response, user, routeData); });
			
			RegisterRouteWithAuth("post", "/sites/{site_id}/invitations/{invitation_id}/resend", auth.SiteManager(),
				async (request, response, user, routeData) => { await _invitationsOperations.ResendInvitationAsync(request, response, user, routeData); });
		}

		private void RegisterSite(AuthorizerV1 auth)
		{
			// Site Routes
			RegisterRouteWithAuth("get", "/sites", auth.Signed(),
				async (request, response, user, routeData) => { await _sitesOperations.GetAuthorizedSitesAsync(request, response, user, routeData); });
			
			RegisterRouteWithAuth("get", "/sites/all", auth.Admin(),
				async (request, response, user, routeData) => { await _sitesOperations.GetSitesAsync(request, response, user, routeData); });
			
			RegisterRouteWithAuth("get", "/sites/find_by_code", auth.Anybody(),
				async (request, response, user, routeData) => { await _sitesOperations.FindSiteByCodeAsync(request, response, user, routeData); });
			
			RegisterRouteWithAuth("get", "/sites/{site_id}", auth.SiteUser(),
				async (request, response, user, routeData) => { await _sitesOperations.GetSiteAsync(request, response, user, routeData); });
			
			RegisterRouteWithAuth("post", "/sites/{site_id}/generate_code", auth.SiteAdmin(),
				async (request, response, user, routeData) => { await _sitesOperations.GenerateCodeAsync(request, response, user, routeData); });
			
			RegisterRouteWithAuth("post", "/sites", auth.Signed(),
				async (request, response, user, routeData) => { await _sitesOperations.CreateSiteAsync(request, response, user, routeData); });
			
			RegisterRouteWithAuth("post", "/sites/validate_code", auth.Signed(),
				async (request, response, user, routeData) => { await _sitesOperations.ValidateSiteCodeAsync(request, response, user, routeData); });
			
			RegisterRouteWithAuth("put", "/sites/{site_id}", auth.SiteAdmin(),
				async (request, response, user, routeData) => { await _sitesOperations.UpdateSiteAsync(request, response, user, routeData); });
			
			RegisterRouteWithAuth("delete", "/sites/{site_id}", auth.Admin(),
				async (request, response, user, routeData) => { await _sitesOperations.DeleteSiteAsync(request, response, user, routeData); });
			
			RegisterRouteWithAuth("post", "/sites/{site_id}/remove", auth.SiteUser(),
				async (request, response, user, routeData) => { await _sitesOperations.RemoveSiteAsync(request, response, user, routeData); });
		}

		private void RegisterSession(AuthorizerV1 auth)
		{
			RegisterRouteWithAuth("post", "/signup", auth.Anybody(),
				async (request, response, user, routeData) => { await _sessionsOperations.SignupAsync(request, response); });
			
			RegisterRouteWithAuth("get", "/signup/validate", auth.Anybody(),
				async (request, response, user, routeData) => { await _sessionsOperations.SignupValidateAsync(request, response); });
			
			RegisterRouteWithAuth("post", "/signin", auth.Anybody(),
				async (request, response, user, routeData) => { await _sessionsOperations.SigninAsync(request, response); });
			
			RegisterRouteWithAuth("post", "/signout", auth.Anybody(),
				async (request, response, user, routeData) => { await _sessionsOperations.SignoutAsync(request, response); });
			
			RegisterRouteWithAuth("get", "/sessions", auth.Admin(),
				async (request, response, user, routeData) => { await _sessionsOperations.GetSessionsAsync(request, response); });
			
			RegisterRouteWithAuth("post", "/sessions/restore", auth.Signed(),
				async (request, response, user, routeData) => { await _sessionsOperations.RestoreSessionAsync(request, response); });
			
			RegisterRouteWithAuth("get", "/sessions/current", auth.Signed(),
				async (request, response, user, routeData) => { await _sessionsOperations.GetCurrentSessionAsync(request, response); });
			
			RegisterRouteWithAuth("get", "/sessions/{user_id}", auth.OwnerOrAdmin("user_id"),
				async (request, response, user, routeData) => { await _sessionsOperations.GetUserSessionsAsync(request, response); });
			
			RegisterRouteWithAuth("delete", "/sessions/{user_id}/{session_id}", auth.OwnerOrAdmin("user_id"),
				async (request, response, user, routeData) => { await _sessionsOperations.CloseSessionAsync(request, response); });
		}

		private void RegisterBeacons(AuthorizerV1 auth)
		{
			RegisterRouteWithAuth("get", "/sites/{site_id}/beacons", auth.SiteUser(),
				async (request, response, user, routeData) => {	await _beaconsOperations.GetBeaconsAsync(request, response, user, routeData); });
			
			RegisterRouteWithAuth("get", "/sites/{site_id}/beacons/{beacon_id}", auth.SiteUser(),
				async (request, response, user, routeData) => {	await _beaconsOperations.GetBeaconAsync(request, response, user, routeData); });
			
			RegisterRouteWithAuth("post", "/sites/{site_id}/beacons/calculate_position", auth.SiteManager(),
				async (request, response, user, routeData) => {	await _beaconsOperations.CalculatePositionAsync(request, response, user, routeData); });

			RegisterRouteWithAuth("post", "/sites/{site_id}/beacons", auth.SiteManager(),
				async (request, response, user, routeData) => {	await _beaconsOperations.CreateBeaconAsync(request, response, user, routeData);	});

			RegisterRouteWithAuth("post", "/sites/{site_id}/beacons/validate_udi", auth.Signed(),
				async (request, response, user, routeData) => {	await _beaconsOperations.ValidateBeaconUdiAsync(request, response, user, routeData); });

			RegisterRouteWithAuth("put", "/sites/{site_id}/beacons/{beacon_id}", auth.SiteManager(),
				async (request, response, user, routeData) => {	await _beaconsOperations.UpdateBeaconAsync(request, response, user, routeData);	});

			RegisterRouteWithAuth("delete", "/sites/{site_id}/beacons/{beacon_id}", auth.SiteManager(),
				async (request, response, user, routeData) => {	await _beaconsOperations.DeleteBeaconAsync(request, response, user, routeData);	});
		}
    }
}
```

