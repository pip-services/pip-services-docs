---
type: docs
no_list: true
title: "Step 5. Services and versioning"
linkTitle: "Step 5. Services" 
gitUrl: "https://github.com/pip-services-samples/facade-sample-node"
---
A facade’s RESTful operations are implemented by REST services, which receive external requests and delegate their execution to operations.

To process requests made to the API’s first version, let’s create a file named **FacadeServiceV1.ts** in the **services/version1** folder with the following code:

**/src/services/version1/FacadeServiceV1.ts**

```typescript
import { IReferences } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { RestService } from 'pip-services3-rpc-node';
import { AboutOperations } from 'pip-services3-rpc-node';

import { AuthorizerV1 } from '../version1/AuthorizerV1';
import { SessionsOperationsV1 } from '../../operations/version1/SessionsOperationsV1';
import { SitesOperationsV1 } from '../../operations/version1/SitesOperationsV1';
import { InvitationsOperationsV1 } from '../../operations/version1/InvitationsOperationsV1';
import { BeaconsOperationsV2 } from '../../operations/version2/BeaconsOperationsV2';

export class FacadeServiceV2 extends RestService {
    private _aboutOperations = new AboutOperations();
    private _sessionsOperations = new SessionsOperationsV1();
    private _sitesOperations = new SitesOperationsV1();
    private _invitationsOperations = new InvitationsOperationsV1();
    private _beaconsOperations = new BeaconsOperationsV2();

    public constructor() {
        super();
        this._baseRoute = "api/v2"
    }

    public configure(config: ConfigParams): void {
        super.configure(config);

        this._aboutOperations.configure(config);
        this._sessionsOperations.configure(config);
        this._sitesOperations.configure(config);
        this._invitationsOperations.configure(config);
        this._beaconsOperations.configure(config);
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        
        this._aboutOperations.setReferences(references);
        this._sessionsOperations.setReferences(references);
        this._sitesOperations.setReferences(references);
        this._invitationsOperations.setReferences(references);
        this._beaconsOperations.setReferences(references);
    }   

    public register(): void {
        let auth = new AuthorizerV1();

        // Restore session middleware
        this.registerInterceptor('',
            (req, res, next) => { this._sessionsOperations.loadSession(req, res, next); });

        // About Route
        this.registerRouteWithAuth('get', '/about', null, auth.anybody(),
            (req, res) => { this._aboutOperations.about(req, res); });

        // Session Routes
        this.registerRouteWithAuth('post', '/signup', null, auth.anybody(),
            (req, res) => { this._sessionsOperations.signup(req, res); });
        this.registerRouteWithAuth('get', '/signup/validate', null, auth.anybody(),
            (req, res) => { this._sessionsOperations.signupValidate(req, res); });
        this.registerRouteWithAuth('post', '/signin', null, auth.anybody(),
            (req, res) => { this._sessionsOperations.signin(req, res); });
        this.registerRouteWithAuth('post', '/signout', null, auth.anybody(),
            (req, res) => { this._sessionsOperations.signout(req, res); });
        this.registerRouteWithAuth('get', '/sessions', null, auth.admin(),
            (req, res) => { this._sessionsOperations.getSessions(req, res); });
        this.registerRouteWithAuth('post', '/sessions/restore', null, auth.signed(),
            (req, res) => { this._sessionsOperations.restoreSession(req, res); });
        this.registerRouteWithAuth('get', '/sessions/current', null, auth.signed(),
            (req, res) => { this._sessionsOperations.getCurrentSession(req, res); });
        this.registerRouteWithAuth('get', '/sessions/:user_id', null, auth.ownerOrAdmin('user_id'),
            (req, res) => { this._sessionsOperations.getUserSessions(req, res); });
        this.registerRouteWithAuth('del', '/sessions/:user_id/:session_id', null, auth.ownerOrAdmin('user_id'),
            (req, res) => { this._sessionsOperations.closeSession(req, res); });

        // Site Routes
        this.registerRouteWithAuth('get', '/sites', null, auth.signed(),
            (req, res) => { this._sitesOperations.getAuthorizedSites(req, res); });
        this.registerRouteWithAuth('get', '/sites/all', null, auth.admin(),
            (req, res) => { this._sitesOperations.getSites(req, res); });
        this.registerRouteWithAuth('get', '/sites/find_by_code', null, auth.anybody(),
            (req, res) => { this._sitesOperations.findSiteByCode(req, res); });
        this.registerRouteWithAuth('get', '/sites/:site_id', null, auth.siteUser(),
            (req, res) => { this._sitesOperations.getSite(req, res); });
        this.registerRouteWithAuth('post', '/sites/:site_id/generate_code', null, auth.siteAdmin(),
            (req, res) => { this._sitesOperations.generateCode(req, res); });
        this.registerRouteWithAuth('post', '/sites', null, auth.signed(),
            (req, res) => { this._sitesOperations.createSite(req, res); });
        this.registerRouteWithAuth('post', '/sites/validate_code', null, auth.signed(),
            (req, res) => { this._sitesOperations.validateSiteCode(req, res); });
        this.registerRouteWithAuth('put', '/sites/:site_id', null, auth.siteAdmin(),
            (req, res) => { this._sitesOperations.updateSite(req, res); });
        this.registerRouteWithAuth('del', '/sites/:site_id', null, auth.admin(),
            (req, res) => { this._sitesOperations.deleteSite(req, res); });
        this.registerRouteWithAuth('post', '/sites/:site_id/remove', null, auth.siteUser(),
            (req, res) => { this._sitesOperations.removeSite(req, res); });

        // Invitation Routes
        this.registerRouteWithAuth('get', '/sites/:site_id/invitations', null, auth.siteUser(),
            (req, res) => { this._invitationsOperations.getInvitations(req, res); });
        this.registerRouteWithAuth('get', '/sites/:site_id/invitations/:invitation_id', null, auth.siteUser(),
            (req, res) => { this._invitationsOperations.getInvitation(req, res); });
        this.registerRouteWithAuth('post', '/sites/:site_id/invitations', null, auth.signed(),
            (req, res) => { this._invitationsOperations.sendInvitation(req, res); });
        this.registerRouteWithAuth('post', '/sites/:site_id/invitations/notify', null, auth.siteManager(),
            (req, res) => { this._invitationsOperations.notifyInvitation(req, res); });
        this.registerRouteWithAuth('del', '/sites/:site_id/invitations/:invitation_id', null, auth.siteManager(),
            (req, res) => { this._invitationsOperations.deleteInvitation(req, res); });
        this.registerRouteWithAuth('post', '/sites/:site_id/invitations/:invitation_id/approve', null, auth.siteManager(),
            (req, res) => { this._invitationsOperations.approveInvitation(req, res); });
        this.registerRouteWithAuth('post', '/sites/:site_id/invitations/:invitation_id/deny', null, auth.siteManager(),
            (req, res) => { this._invitationsOperations.denyInvitation(req, res); });
        this.registerRouteWithAuth('post', '/sites/:site_id/invitations/:invitation_id/resend', null, auth.siteManager(),
            (req, res) => { this._invitationsOperations.resendInvitation(req, res); });

        // Beacon Routes
        this.registerRouteWithAuth('get', '/sites/:site_id/xbeacons', null, auth.siteUser(),
            (req, res) => { this._beaconsOperations.getBeaconsX(req, res); });
        this.registerRouteWithAuth('get', '/sites/:site_id/xbeacons/:beacon_id', null, auth.siteUser(),
            (req, res) => { this._beaconsOperations.getBeaconX(req, res); });
        this.registerRouteWithAuth('post', '/sites/:site_id/xbeacons/calculate_position', null, auth.siteManager(),
            (req, res) => { this._beaconsOperations.calculatePositionX(req, res); });
        this.registerRouteWithAuth('post', '/sites/:site_id/xbeacons', null, auth.siteManager(),
            (req, res) => { this._beaconsOperations.createBeaconX(req, res); });
        this.registerRouteWithAuth('post', '/sites/:site_id/xbeacons/validate_udi', null, auth.signed(),
            (req, res) => { this._beaconsOperations.validateBeaconUdiX(req, res); });
        this.registerRouteWithAuth('put', '/sites/:site_id/xbeacons/:beacon_id', null, auth.siteManager(),
            (req, res) => { this._beaconsOperations.updateBeaconX(req, res); });
        this.registerRouteWithAuth('del', '/sites/:site_id/xbeacons/:beacon_id', null, auth.siteManager(),
            (req, res) => { this._beaconsOperations.deleteBeaconX(req, res); });

    }

}
```

The FacadeServiceV1 component extends the standard RestService, which implements the majority of the component’s basic functionality. All that we have left to do is define some routes and delegate their processing to the operations we defined in the previous steps.


A base route is defined in the constructor, which contains the API version that is implemented in the service.


In the **register** method, before we register our routes, we make sure to register the **loadSession** interceptor, which will be loading user sessions using the parameters set in the REST requests.


Next, the routes are registered, access limits are set up using our Authorizer, and request handlers are defined using the business methods we implemented in our REST operation sets. For the sake of convenience, the registration functions are divided into 2 groups, each of which belongs to a specific operation-component.


When implementing a new version of the API, the following must be done:


1. Implement new REST operations or modify a copy of the existing ones;
2. Create a new FacadeServiceVx and set a new “/api/vx” base route;
3. Register routes for the new API and delegate their processing to the newly added and to already existing REST operations.

Continue on to [Step 6 - Testing Operations](../step6) to see how we can automate the testing of the service and operations we’ve created, including the authentication and authorization of requests.

<span class="hide-title-link">

### [Step 6 - Testing Operations](../step6)

</span>
