
**/test/fixture/TestReferences.ts**

```typescript
let _ = require('lodash');

import { ConfigParams } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';

import { CompositeFactory } from 'pip-services3-components-node';
import { ManagedReferences } from 'pip-services3-container-node';

import { IAccountsClientV1, AccountV1 } from 'pip-clients-accounts-node';
import { ISessionsClientV1 } from 'pip-clients-sessions-node';

import { TestUsers } from './TestUsers';
import { ClientFacadeFactory } from '../../src/build/ClientFacadeFactory';
import { ServiceFacadeFactory } from '../../src/build/ServiceFacadeFactory';
import { HttpEndpoint } from 'pip-services3-rpc-node';
import { DefaultRpcFactory } from 'pip-services3-rpc-node';
import { FacadeServiceV1 } from '../../src/services/version1/FacadeServiceV1';
import { AccountsMemoryClientV1 } from 'pip-clients-accounts-node';
import { SessionsMemoryClientV1 } from 'pip-clients-sessions-node';
import { BeaconsMemoryClientV1 } from 'pip-clients-beacons-node';

export class TestReferences extends ManagedReferences {
    private _factory = new CompositeFactory();

    public constructor() {
        super();

        this.setupFactories();
        this.appendDependencies();
        this.configureService();
        this.createUsersAndSessions();
    }

    private setupFactories() {
        this._factory.add(new ClientFacadeFactory());
        this._factory.add(new ServiceFacadeFactory());
        this._factory.add(new DefaultRpcFactory());
    }

    public append(descriptor: Descriptor): void {
        let component = this._factory.create(descriptor);
        this.put(descriptor, component);
    }

    private appendDependencies() {
        // Add factories
        this.put(null, this._factory);

        // Add service
        this.put(null, new FacadeServiceV1());

        // Add user management services
        this.put(new Descriptor('pip-services-accounts', 'client', 'memory', 'default', '*'), new AccountsMemoryClientV1());
        this.put(new Descriptor('pip-services-sessions', 'client', 'memory', 'default', '*'), new SessionsMemoryClientV1());
        // Add content management services
        // Beacons
        this.put(new Descriptor('pip-services-beacons', 'client', 'memory', 'default', '*'), new BeaconsMemoryClientV1());
    }

    private configureService(): void {
        // Configure Facade service
        let service = this.getOneRequired<HttpEndpoint>(
            new Descriptor('pip-services', 'endpoint', 'http', 'default', '*')
        );
        service.configure(ConfigParams.fromTuples(
            'root_path', '', //'/api/1.0',
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

        // Create opened sessions
        let sessionsClient = this.getOneRequired<ISessionsClientV1>(
            new Descriptor('pip-services-sessions', 'client', '*', '*', '*')
        );

        let adminUserData = _.clone(adminUserAccount);
        adminUserData.roles = ['admin'];
        sessionsClient.openSession(
            null, TestUsers.AdminUserId, TestUsers.AdminUserName,
            null, null, adminUserData, null,
            (err, session) => { session.id = TestUsers.AdminUserSessionId });

        let user1Data = _.clone(user1Account);
        user1Data.roles = [];
        sessionsClient.openSession(
            null, TestUsers.User1Id, TestUsers.User1Name,
            null, null, user1Data, null,
            (err, session) => { session.id = TestUsers.User1SessionId });

        let user2Data = _.clone(user2Account);
        user2Data.roles = [];
        sessionsClient.openSession(
            null, TestUsers.User2Id, TestUsers.User2Name,
            null, null, user2Data, null,
            (err, session) => { session.id = TestUsers.User2SessionId });
    }

}
```

