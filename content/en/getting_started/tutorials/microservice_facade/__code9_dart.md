
**/test/fixture/TestReferences.dart**

```dart
import 'package:pip_facade_sample_dart/pip_facade_sample_dart.dart';
import 'package:pip_clients_accounts/pip_clients_accounts.dart';
import 'package:pip_clients_beacons_dart/pip_clients_beacons_dart.dart';
import 'package:pip_clients_sessions/pip_clients_sessions.dart';
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_components/pip_services3_components.dart';
import 'package:pip_services3_container/pip_services3_container.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';
import 'package:pip_services_accounts/pip_services_accounts.dart';

import 'TestData.dart';

class TestReferences extends ManagedReferences {
  final _factory = CompositeFactory(null);

  TestReferences() : super([]) {
    _setupFactories();
    _appendDependencies();
    _createUsersAndSessions();
    _configureService();
  }

  void _setupFactories() {
    _factory.add(ClientFacadeFactory());
    _factory.add(ServiceFacadeFactory());
    _factory.add(DefaultRpcFactory());
  }

  void _configureService() {
    // Configure Endpoint
    var service =
        getOneRequired<HttpEndpoint>(DefaultRpcFactory.HttpEndpointDescriptor);
    service.configure(ConfigParams.fromTuples([
      [
        'root_path', '', //'/api/1.0',
        'connection.protocol', 'http',
        'connection.host', '0.0.0.0',
        'connection.port', 3000
      ]
    ]));
  }

  void _appendDependencies() {
    put(null, _factory);

    // Add service
    put(null, FacadeServiceV1());

    // Add user management services
    put(Descriptor('pip-services-accounts', 'client', 'memory', 'default', '*'),
        AccountsMemoryClientV1());
    put(Descriptor('pip-services-sessions', 'client', 'memory', 'default', '*'),
        SessionsMemoryClientV1());

    // Add content management services
    // Beacons
    put(Descriptor('pip-services-beacons', 'client', 'memory', 'default', '*'),
        BeaconsMockClientV1());
  }

  void _createUsersAndSessions() async {
    // Create accounts
    var accountsClient = getOneRequired<IAccountsClientV1>(
        Descriptor('pip-services-accounts', 'client', '*', '*', '*'));

    var adminUserAccount = AccountV1(
        id: TestUsers.AdminUserId,
        login: TestUsers.AdminUserLogin,
        name: TestUsers.AdminUserName,
        active: true,
        create_time: DateTime.now());
    await accountsClient.createAccount(null, adminUserAccount);

    var user1Account = AccountV1(
        id: TestUsers.User1Id,
        login: TestUsers.User1Login,
        name: TestUsers.User1Name,
        active: true,
        create_time: DateTime.now());
    await accountsClient.createAccount(null, user1Account);

    var user2Account = AccountV1(
        id: TestUsers.User2Id,
        login: TestUsers.User2Login,
        name: TestUsers.User2Name,
        active: true,
        create_time: DateTime.now());
    await accountsClient.createAccount(null, user2Account);

    // Create opened sessions
    var sessionsClient = getOneRequired<ISessionsClientV1>(
        Descriptor('pip-services-sessions', 'client', '*', '*', '*'));

    var adminUserData = adminUserAccount.toJson();
    adminUserData['roles'] = ['admin'];
    var session = await sessionsClient.openSession(
      null,
      TestUsers.AdminUserId,
      TestUsers.AdminUserName,
      null,
      null,
      adminUserData,
      null,
    );

    session?.id = TestUsers.AdminUserSessionId;

    // clone
    var user1Data = user1Account.toJson();
    user1Data['roles'] = [];

    session = await sessionsClient.openSession(null, TestUsers.User1Id,
        TestUsers.User1Name, null, null, user1Data, null);

    session?.id = TestUsers.User1SessionId;

    var user2Data = user2Account.toJson();
    user2Data['roles'] = [];
    session = await sessionsClient.openSession(null, TestUsers.User2Id,
        TestUsers.User2Name, null, null, user2Data, null);

    session?.id = TestUsers.User2SessionId;
  }
}

```

