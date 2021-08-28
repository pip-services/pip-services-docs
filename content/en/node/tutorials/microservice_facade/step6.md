---
type: docs
no_list: true
title: "Step 7. Testing of operations"
linkTitle: "Step 7. Testing" 
gitUrl: "https://github.com/pip-services-samples/facade-sample-node"
---

Before we integrate our new facade with the actual system, we should put it through its paces and thoroughly test it. So let’s develop a set of tests and helper elements for testing all of the operations registered in the facade. We’ll start off by creating a set of helper classes. One will test our dependencies, another will test how well the facade works with users, and the last one will contain a set of test users. All of these files will be placed in the folder **/test/fixtures**.

The file for testing dependencies will be called **TestReferences.ts** and will allow us to test how well the facade is able to work with the microservices it depends on. This file’s code is listed below:

**/test/fixture/TestReferences.ts**

```typescript
let _ = require('lodash');

import { ConfigParams } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { Opener } from 'pip-services3-commons-node';
import { Closer } from 'pip-services3-commons-node';
import { Referencer } from 'pip-services3-commons-node';
import { ManagedReferences } from 'pip-services3-container-node';

import { IAccountsClientV1 } from '../../src/clients/version1/IAccountsClientV1';
import { AccountV1 } from '../../src/clients/version1/AccountV1';
import { IRolesClientV1 } from '../../src/clients/version1/IRolesClientV1';
import { UserRolesV1 } from '../../src/clients/version1/UserRolesV1';
import { ISessionsClientV1 } from '../../src/clients/version1/ISessionsClientV1';
import { SessionV1 } from '../../src/clients/version1/SessionV1';
import { ISitesClientV1 } from '../../src/clients/version1/ISitesClientV1';
import { SiteV1 } from '../../src/clients/version1/SiteV1';

import { SessionUserV1 } from '../../src/operations/version1/SessionUserV1';
import { TestUsers } from './TestUsers';
import { TestSites } from './TestSites';
import { ClientFacadeFactory } from '../../src/build/ClientFacadeFactory';
import { HttpEndpoint, DefaultRpcFactory } from 'pip-services3-rpc-node';
import { FacadeServiceV1 } from '../../src/services/version1/FacadeServiceV1';
import { FacadeServiceV2 } from '../../src/services/version2/FacadeServiceV2';
import { AccountsMemoryClientV1 } from '../../src/clients/version1/AccountsMemoryClientV1';
import { SessionsMemoryClientV1 } from '../../src/clients/version1/SessionsMemoryClientV1';
import { PasswordsNullClientV1 } from '../../src/clients/version1/PasswordsNullClientV1';
import { RolesMemoryClientV1 } from '../../src/clients/version1/RolesMemoryClientV1';
import { EmailSettingsMemoryClientV1 } from '../../src/clients/version1/EmailSettingsMemoryClientV1';
import { SitesMemoryClientV1 } from '../../src/clients/version1/SitesMemoryClientV1';

export class TestReferences extends ManagedReferences {
    private _factory = new ClientFacadeFactory();

    public constructor() {
        super();

        this.appendDependencies();
        this.configureService();
        this.createUsersAndSessions();
    }

    private appendDependencies() {
        // Add factories
        this.put(null, new ClientFacadeFactory());
        this.put(null, new DefaultRpcFactory());

        // Add service
        this.put(null, new FacadeServiceV1());
        this.put(null, new FacadeServiceV2());

        // Add services
        this.put(new Descriptor('pip-services-accounts', 'client', 'memory', 'default', '*'), new AccountsMemoryClientV1());
        this.put(new Descriptor('pip-services-sessions', 'client', 'memory', 'default', '*'), new SessionsMemoryClientV1());
        this.put(new Descriptor('pip-services-passwords', 'client', 'null', 'default', '*'), new PasswordsNullClientV1());
        this.put(new Descriptor('pip-services-roles', 'client', 'memory', 'default', '*'), new RolesMemoryClientV1());
        this.put(new Descriptor('pip-services-emailsettings', 'client', 'memory', 'default', '*'), new EmailSettingsMemoryClientV1());
        this.put(new Descriptor('nov-services-sites', 'client', 'direct', 'memory', '*'), new SitesMemoryClientV1());
    }

    private configureService(): void {
        // Configure Facade service
        let service = this.getOneRequired<HttpEndpoint>(
            new Descriptor('pip-services', 'endpoint', 'http', 'default', '*')
        );
        service.configure(ConfigParams.fromTuples(
            'root_path', '', //'/api/v1',
            'connection.protocol', 'http',
            'connection.host', '0.0.0.0',
            'connection.port', 3000
        ));
    }

    private createUsersAndSessions(): void {
        // Create accounts
        let accountsClient = this.getOneRequired<IAccountsClientV1>(
            new Descriptor('pip-services-accounts', 'client', '*', '*', '*')
        );

        let adminUserAccount = <AccountV1>{
            id: TestUsers.AdminUserId, 
            login: TestUsers.AdminUserLogin, 
            name: TestUsers.AdminUserName,
            active: true,
            create_time: new Date()
        };
        accountsClient.createAccount(null, adminUserAccount, () => {});

        let user1Account = <AccountV1>{
            id: TestUsers.User1Id, 
            login: TestUsers.User1Login, 
            name: TestUsers.User1Name,
            active: true,
            create_time: new Date()
        };
        accountsClient.createAccount(null, user1Account, () => {});

        let user2Account = <AccountV1>{
            id: TestUsers.User2Id, 
            login: TestUsers.User2Login, 
            name: TestUsers.User2Name,
            active: true,
            create_time: new Date()
        };
        accountsClient.createAccount(null, user2Account, () => {});

        // Create test site(s)
        let sitesClient = this.getOneRequired<ISitesClientV1>(
            new Descriptor('nov-services-sites', 'client', '*', '*', '*')
        );
        let site1 = <SiteV1>{
            id: TestSites.Site1Id, 
            name: TestSites.Site1Name
        };
        sitesClient.createSite(null, site1, () => {});

        // Create user roles
        let rolesClient = this.getOneRequired<IRolesClientV1>(
            new Descriptor('pip-services-roles', 'client', '*', '*', '*')
        );
        rolesClient.setRoles(
            null, TestUsers.AdminUserId, [ 'admin', TestSites.Site1Id + ':admin' ], () => {});
        rolesClient.setRoles(
            null, TestUsers.User1Id, [ TestSites.Site1Id + ':manager' ], () => {});
        rolesClient.setRoles(
            null, TestUsers.User2Id, [ TestSites.Site1Id + ':user' ], () => {});

        // Create opened sessions
        let sessionsClient = this.getOneRequired<ISessionsClientV1>(
            new Descriptor('pip-services-sessions', 'client', '*', '*', '*')
        );

        let adminUserData = _.clone(adminUserAccount);
        adminUserData.roles = [ 'admin', TestSites.Site1Id + ':admin' ];
        sessionsClient.openSession(
            null, TestUsers.AdminUserId, TestUsers.AdminUserName,
            null, null, adminUserData, null,
            (err, session) => { session.id = TestUsers.AdminUserSessionId });

        let user1Data = _.clone(user1Account);
        user1Data.roles = [ TestSites.Site1Id + ':manager' ];
        sessionsClient.openSession(
            null, TestUsers.User1Id, TestUsers.User1Name,
            null, null, user1Data, null,
            (err, session) => { session.id = TestUsers.User1SessionId });

        let user2Data = _.clone(user2Account);
        user2Data.roles = [ TestSites.Site1Id + ':user' ];
        sessionsClient.openSession(
            null, TestUsers.User2Id, TestUsers.User2Name,
            null, null, user2Data, null,
            (err, session) => { session.id = TestUsers.User2SessionId });
    }

}
```

Now, let’s create a file with a test client, which will help us test our user and session related operations. Place the code below into a file named **TestRestClient.ts**:

**/test/fixture/TestRestClient.ts**

```typescript
let restify = require('restify-clients');

import { TestUsers } from './TestUsers';

export class TestRestClient {
    private _rest: any;

    public constructor() {
        let url = 'http://localhost:3000';
        this._rest = restify.createJsonClient({ url: url, version: '*' });
    }


    public get(path: string,
        callback: (err: any, req: any, res: any, result: any) => void): void {
        delete this._rest.headers['x-session-id'];
        this._rest.get(path, callback);
    }

    public head(path: string,
        callback: (err: any, req: any, res: any, result: any) => void): void {
        delete this._rest.headers['x-session-id'];
        this._rest.head(path, callback)
    }

    public post(path: string, params: any,
        callback: (err: any, req: any, res: any, result: any) => void): void {
        delete this._rest.headers['x-session-id'];
        this._rest.post(path, params, callback);
    }

    public put(path: string, params: any,
        callback: (err: any, req: any, res: any, result: any) => void): void {
        delete this._rest.headers['x-session-id'];
        this._rest.put(path, params, callback);
    }

    public del(path: string,
        callback: (err: any, req: any, res: any, result: any) => void): void {
        delete this._rest.headers['x-session-id'];
        this._rest.del(path, callback);
    }


    public getAsUser(sessionId: string, path: string,
        callback: (err: any, req: any, res: any, result: any) => void): void {
        this._rest.headers['x-session-id'] = sessionId;
        this._rest.get(path, callback);
    }

    public headAsUser(sessionId: string, path: string,
        callback: (err: any, req: any, res: any, result: any) => void): void {
        this._rest.headers['x-session-id'] = sessionId;
        this._rest.head(path, callback)
    }

    public postAsUser(sessionId: string, path: string, params: any,
        callback: (err: any, req: any, res: any, result: any) => void): void {
        this._rest.headers['x-session-id'] = sessionId;
        this._rest.post(path, params, callback);
    }

    public putAsUser(sessionId: string, path: string, params: any,
        callback: (err: any, req: any, res: any, result: any) => void): void {
        this._rest.headers['x-session-id'] = sessionId;
        this._rest.put(path, params, callback);
    }

    public delAsUser(sessionId: string, path: string,
        callback: (err: any, req: any, res: any, result: any) => void): void {
        this._rest.headers['x-session-id'] = sessionId;
        this._rest.del(path, callback);
    }

}

```

Lastly, define some test users in a file named **TestUsers.ts**, as shown below:

**/test/fixture/TestUsers.ts**

```typescript
export class TestUsers {
    public static readonly AdminUserId: string = '1';
    public static readonly AdminUserName: string = 'Admin User';
    public static readonly AdminUserLogin: string = 'admin';
    public static readonly AdminUserPassword: string = 'pwd123';
    public static readonly AdminUserSessionId: string = '111';

    public static readonly User1Id: string = '2';
    public static readonly User1Name: string = 'User #1';
    public static readonly User1Login: string = 'user1';
    public static readonly User1Password: string = 'pwd123';
    public static readonly User1SessionId: string = '222';

    public static readonly User2Id: string = '3';
    public static readonly User2Name: string = 'User #2';
    public static readonly User2Login: string = 'user2';
    public static readonly User2Password: string = 'pwd123';
    public static readonly User2SessionId: string = '333';
};

```

Now we can move on to the tests themselves. Create the following files in the folder **test/operations**:

**BeaconsRoutesV1.test.ts** - for testing business logic operations of the Beacons microservice:

**/test/operations/BeaconsRoutesV1.test.ts**

```typescript
let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { ConfigParams } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';

import { BeaconV1 } from '../../../src/clients/version1/BeaconV1';
import { BeaconsMemoryClientV1 } from '../../../src/clients/version1/BeaconsMemoryClientV1';

import { TestUsers } from '../../fixtures/TestUsers';
import { TestReferences } from '../../fixtures/TestReferences';
import { TestRestClient } from '../../fixtures/TestRestClient';
import { BeaconsOperationsV1 } from '../../../src/operations/version1/BeaconsOperationsV1';

let BEACON1: BeaconV1 = {
    id: '1',
    udi: '000001',
    site_id: '1',
    label: 'TestBeacon1',
    center: { type: 'Point', coordinates: [0, 0] },
    radius: 50
};
let BEACON2: BeaconV1 = {
    id: '2',
    udi: '000002',
    site_id: '1',
    label: 'TestBeacon2',
    center: { type: 'Point', coordinates: [2, 2] },
    radius: 70
};
let BEACON3: BeaconV1 = {
    id: '3',
    udi: '000003',
    site_id: '2',
    label: 'TestBeacon3',
    center: { type: 'Point', coordinates: [10, 10] },
    radius: 50
};

suite('BeaconsOperationsV2', () => {
    let references: TestReferences;
    let rest: TestRestClient;

    setup((done) => {
        rest = new TestRestClient();
        references = new TestReferences();
        references.put(new Descriptor('nov-services-beacons', 'client', 'memory', 'default', '1.0'), new BeaconsMemoryClientV1());
        references.open(null, done);
    });

    teardown((done) => {
        references.close(null, done);
    });

    test('should perform beacon operations', (done) => {
        let beacon1, beacon2, beacon3: BeaconV1;

        async.series([
        // Create one beacon
            (callback) => {
                rest.postAsUser(
                    TestUsers.AdminUserSessionId,
                    '/api/v2/sites/' + BEACON1.site_id + '/xbeacons',
                    BEACON1,
                    (err, req, res, beacon) => {
                        assert.isNull(err);

                        assert.isObject(beacon);
                        assert.equal(beacon.site_id, BEACON1.site_id);
                        assert.equal(beacon.udi, BEACON1.udi);
                        assert.equal(beacon.label, BEACON1.label);
                        assert.isNotNull(beacon.center);

                        beacon1 = beacon;

                        callback();
                    }
                );
            },
        // Create another beacon
            (callback) => {
                rest.postAsUser(
                    TestUsers.AdminUserSessionId,
                    '/api/v2/sites/' + BEACON2.site_id + '/xbeacons', 
                    BEACON2,
                    (err, req, res, beacon) => {
                        assert.isNull(err);

                        assert.isObject(beacon);
                        assert.equal(beacon.site_id, BEACON2.site_id);
                        assert.equal(beacon.udi, BEACON2.udi);
                        assert.equal(beacon.label, BEACON2.label);
                        assert.isNotNull(beacon.center);

                        beacon2 = beacon;

                        callback();
                    }
                );
            },
        // Create yet another beacon
            (callback) => {
                rest.postAsUser(
                    TestUsers.AdminUserSessionId,
                    '/api/v2/sites/' + BEACON3.site_id + '/xbeacons', 
                    BEACON3,
                    (err, req, res, beacon) => {
                        assert.isNull(err);

                        assert.isObject(beacon);
                        assert.equal(beacon.site_id, BEACON3.site_id);
                        assert.equal(beacon.udi, BEACON3.udi);
                        assert.equal(beacon.label, BEACON3.label);
                        assert.isNotNull(beacon.center);

                        beacon3 = beacon;

                        callback();
                    }
                );
            },
        // Get all beacons
            (callback) => {
                rest.getAsUser(
                    TestUsers.AdminUserSessionId,
                    '/api/v2/sites/' + BEACON1.site_id + '/xbeacons',
                    (err, req, res, page) => {
                        assert.isNull(err);

                        assert.isObject(page);
                        assert.lengthOf(page.data, 2);

                        callback();
                    }
                );
            },
            // Calculate positions
            (callback) => {
                rest.postAsUser(
                    TestUsers.AdminUserSessionId,
                    '/api/v2/sites/' + BEACON1.site_id + '/xbeacons/calculate_position',
                    {
                        site_id: BEACON1.site_id,
                        udis: [BEACON1.udi]
                    },
                    (err, req, res, position) => {
                        assert.isNull(err);

                        assert.isObject(position);
                        assert.equal(position.type, 'Point');

                        callback();
                    }
                );
            },
            // Validate beacon udi
            (callback) => {
                rest.postAsUser(
                    TestUsers.AdminUserSessionId,
                    '/api/v2/sites/' + beacon1.site_id + '/xbeacons/validate_udi?udi=' + beacon1.udi,
                    {},
                    (err, req, res, result) => {
                        assert.isNull(err);

                        assert.equal(result, beacon1.id);

                        callback();
                    }
                );
            },
        // Update the beacon
            (callback) => {
                beacon1.label = 'ABC';

                rest.putAsUser(
                    TestUsers.AdminUserSessionId,
                    '/api/v2/sites/' + beacon1.site_id + '/xbeacons/' + beacon1.id,
                    beacon1,
                    (err, req, res, beacon) => {
                        assert.isNull(err);

                        assert.isObject(beacon);
                        assert.equal(beacon.label, 'ABC');

                        beacon1 = beacon;

                        callback();
                    }
                );
            },
        // Delete beacon
            (callback) => {
                rest.delAsUser(
                    TestUsers.AdminUserSessionId,
                    '/api/v2/sites/' + beacon1.site_id + '/xbeacons/' + beacon1.id,
                    (err, req, res, result) => {
                        assert.isNull(err);

                        //assert.isNull(result);

                        callback();
                    }
                );
            },
        // Try to get delete beacon
            (callback) => {
                rest.getAsUser(
                    TestUsers.AdminUserSessionId,
                    '/api/v2/sites/' + beacon1.site_id + '/xbeacons/' + beacon1.id,
                    (err, req, res, result) => {
                        assert.isNull(err);

                        //assert.isNull(result);

                        callback();
                    }
                );
            }
        ], done);
    });

});
```

**SessionsRoutesV1.test.ts** - for testing user and session related operations:

**/test/operations/SessionsRoutesV1.test.ts**

```typescript

let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { Descriptor } from 'pip-services3-commons-node';

import { TestReferences } from '../../fixtures/TestReferences';
import { TestUsers } from '../../fixtures/TestUsers';
import { TestRestClient } from '../../fixtures/TestRestClient';

suite('SessionRoutesV1', () => {
    let USER = {
        login: 'test',
        name: 'Test User',
        email: 'test@conceptual.vision',
        password: 'test123'
    };

    let references: TestReferences;
    let rest: TestRestClient;

    setup((done) => {
        rest = new TestRestClient();
        references = new TestReferences();
        references.open(null, done);
    });

    teardown((done) => {
        references.close(null, done);
    });

    test('should signup new user', (done) => {
        rest.post('/api/v1/signup',
            USER,
            (err, req, res, session) => {
                assert.isNull(err);

                assert.isDefined(session);
                assert.isDefined(session.id);
                assert.equal(session.user_name, USER.name);

                done();
            }
        );
    });

    test('should check login for signup', (done) => {
        async.series([
        // Check registered email
            (callback) => {
                rest.get('/api/v1/signup/validate?login=' + TestUsers.User1Login,
                    (err, req, res, result) => {
                        assert.isNotNull(err);
                        callback();
                    }
                );
            },
        // Check not registered email
            (callback) => {
                rest.get('/api/v1/signup/validate?login=xxx@gmail.com',
                    (err, req, res, result) => {
                        assert.isNull(err);
                        callback();
                    }
                );
            }
        ], done);
    });

    test('should not signup with the same email', (done) => {
        async.series([
        // Sign up
            (callback) => {
                rest.post('/api/v1/signup',
                    USER,
                    (err, req, res, session) => {
                        assert.isNull(err);
                        callback();
                    }
                );
            },
        // Try to sign up again
            (callback) => {
                rest.post('/api/v1/signup',
                    USER,
                    (err, req, res, session) => {
                        assert.isNotNull(err);
                        callback();
                    }
                );
            }
        ], done);

    });

    test('should signout', (done) => {
        rest.post('/api/v1/signout',
            null,
            (err, req, res, result) => {
                assert.isNull(err);
                done();
            }
        );
    });

    test('should signin with email and password', (done) => {
        async.series([
        // Sign up
            (callback) => {
                rest.post('/api/v1/signup',
                    USER,
                    (err, req, res, session) => {
                        assert.isNull(err);
                        callback();
                    }
                );
            },
        // Sign in with username
            (callback) => {
                rest.post('/api/v1/signin',
                    {
                        login: USER.login,
                        password: USER.password
                    },
                    (err, req, res, session) => {
                        assert.isNull(err);
                        callback();
                    }
                );
            }
        ], done);
    });

    test('should get sessions as admin', (done) => {
        rest.getAsUser(
            TestUsers.AdminUserSessionId,
            '/api/v1/sessions?paging=1&skip=0&take=2',
            (err, req, res, page) => {
                assert.isNull(err);

                assert.isObject(page);

                done();
            }
        );
    });

    test('should get user sessions as owner', (done) => {
        rest.getAsUser(
            TestUsers.User1SessionId,
            '/api/v1/sessions/' + TestUsers.User1Id + '?paging=1&skip=0&take=2',
            (err, req, res, page) => {
                assert.isNull(err);

                assert.isObject(page);

                done();
            }
        );
    });

});

```

Run the tests using the following command:

```bash
npm run test
```

Once all the tests pass successfully, you can move on to [Step 8 - Running the facade](../step7) - to learn how to deploy all of these microservices using Docker.


<span class="hide-title-link">

### [Step 8 - Running the facade](../step7)

</span>
