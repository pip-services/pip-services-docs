
**/src/services/version1/FacadeServiceV1.ts**
```ts
import { IReferences } from 'pip-services4-components-node';
import { ConfigParams } from 'pip-services4-components-node';
import { RestController } from 'pip-services4-http-node';
import { AboutOperations } from 'pip-services4-http-node';

import { AuthorizerV1 } from '../version1/AuthorizerV1';
import { SessionsOperationsV1 } from '../../operations/version1/SessionsOperationsV1';
import { SitesOperationsV1 } from '../../operations/version1/SitesOperationsV1';
import { InvitationsOperationsV1 } from '../../operations/version1/InvitationsOperationsV1';
import { BeaconsOperationsV1 } from '../../operations/version1/BeaconsOperationsV1';

export class FacadeServiceV1 extends RestController {
    private _aboutOperations = new AboutOperations();
    private _sessionsOperations = new SessionsOperationsV1();
    private _sitesOperations = new SitesOperationsV1();
    private _invitationsOperations = new InvitationsOperationsV1();
    private _beaconsOperations = new BeaconsOperationsV1();

    public constructor() {
        super();
        this._baseRoute = "api/v1"
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
        this.registerRouteWithAuth('get', '/sites/:site_id/beacons', null, auth.siteUser(),
            (req, res) => { this._beaconsOperations.getBeacons(req, res); });
        this.registerRouteWithAuth('get', '/sites/:site_id/beacons/:beacon_id', null, auth.siteUser(),
            (req, res) => { this._beaconsOperations.getBeacon(req, res); });
        this.registerRouteWithAuth('post', '/sites/:site_id/beacons/calculate_position', null, auth.siteManager(),
            (req, res) => { this._beaconsOperations.calculatePosition(req, res); });
        this.registerRouteWithAuth('post', '/sites/:site_id/beacons', null, auth.siteManager(),
            (req, res) => { this._beaconsOperations.createBeacon(req, res); });
        this.registerRouteWithAuth('post', '/sites/:site_id/beacons/validate_udi', null, auth.signed(),
            (req, res) => { this._beaconsOperations.validateBeaconUdi(req, res); });
        this.registerRouteWithAuth('put', '/sites/:site_id/beacons/:beacon_id', null, auth.siteManager(),
            (req, res) => { this._beaconsOperations.updateBeacon(req, res); });
        this.registerRouteWithAuth('del', '/sites/:site_id/beacons/:beacon_id', null, auth.siteManager(),
            (req, res) => { this._beaconsOperations.deleteBeacon(req, res); });
    }
}

```
