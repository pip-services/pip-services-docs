
**/src/services/version1/FacadeServiceV1.ts**

```typescript
import { IReferences } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { RestService } from 'pip-services3-rpc-node';

import { AuthorizerV1 } from './AuthorizerV1';

import { SessionsOperationsV1 } from '../../operations/version1/SessionsOperationsV1';
import { BeaconsOperationsV1 } from '../../operations/version1/BeaconsOperationsV1';

export class FacadeServiceV1 extends RestService {
    private _sessionsOperations = new SessionsOperationsV1();
    private _beaconsOperations = new BeaconsOperationsV1();

    public constructor() {
        super();
        this._baseRoute = "api/v1"
    }

    public configure(config: ConfigParams): void {
        super.configure(config);

        this._sessionsOperations.configure(config);
        this._beaconsOperations.configure(config);
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._sessionsOperations.setReferences(references);
        this._beaconsOperations.setReferences(references);
    }

    public register(): void {
        let auth = new AuthorizerV1();

        // Restore session middleware
        this.registerInterceptor('',
            (req, res, next) => { this._sessionsOperations.loadSession(req, res, next); });

        this.registerContentManagementRoutes(auth);
        this.registerUsersRoutes(auth);
    }

    private registerContentManagementRoutes(auth: AuthorizerV1): void {
        // Beacons routes
        this.registerRouteWithAuth('get', '/beacons', null, auth.signed(), 
            (req, res) => { this._beaconsOperations.getBeacons(req, res); });
        this.registerRouteWithAuth('get', '/beacons/:id', null, auth.owner('user_id'),
            (req, res) => { this._beaconsOperations.getBeaconById(req, res); });
        this.registerRouteWithAuth('get', '/beacons/udi/:udi', null, auth.owner(),
            (req, res) => { this._beaconsOperations.getBeaconByUdi(req, res); });
        this.registerRouteWithAuth('post', '/beacons', null, auth.signed(), 
            (req, res) => { this._beaconsOperations.createBeacon(req, res); });
        this.registerRouteWithAuth('put', '/beacons', null, auth.signed(), 
            (req, res) => { this._beaconsOperations.updateBeacon(req, res); });
        this.registerRouteWithAuth('del', '/beacons/:id', null, auth.signed(), 
            (req, res) => { this._beaconsOperations.deleteBeaconById(req, res); });
        this.registerRouteWithAuth('post', '/beacons/position', null, auth.signed(),
            (req, res) => { this._beaconsOperations.calculatePosition(req, res); });
    }

    private registerUsersRoutes(auth: AuthorizerV1): void {
        // Session Routes
        this.registerRouteWithAuth('post', '/users/signup', null, auth.anybody(),
            (req, res) => { this._sessionsOperations.signup(req, res); });
        this.registerRouteWithAuth('post', '/users/signin', null, auth.anybody(),
            (req, res) => { this._sessionsOperations.signin(req, res); });
        this.registerRouteWithAuth('post', '/users/signout', null, auth.anybody(),
            (req, res) => { this._sessionsOperations.signout(req, res); });
    }

}
```

