
**lib/src/services/version1/FacadeServiceV1.dart**

```dart
import 'package:pip_facade_sample_dart/pip_facade_sample_dart.dart';
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';

import 'AuthorizerV1.dart';

class FacadeServiceV1 extends RestService {
  final _sessionsOperations = SessionsOperationsV1();
  final _beaconsOperations = BeaconsOperationsV1();

  FacadeServiceV1() : super() {
    baseRoute = 'api/v1';
  }

  @override
  void configure(ConfigParams config) {
    super.configure(config);

    _beaconsOperations.configure(config);
    _sessionsOperations.configure(config);
  }

  @override
  void setReferences(IReferences references) {
    super.setReferences(references);

    _beaconsOperations.setReferences(references);
    _sessionsOperations.setReferences(references);
  }

  @override
  void register() {
    var auth = AuthorizerV1();

    // Restore session middleware
    registerInterceptor('', _sessionsOperations.loadSession);

    registerUserManagementRoutes(auth);
    registerUserRoutes(auth);
  }

  void registerUserManagementRoutes(AuthorizerV1 auth) {
    // Beacons routes
    registerRouteWithAuth('get', '/beacons', Schema(), auth.signed(),
        _beaconsOperations.getBeacons);
    registerRouteWithAuth('get', '/beacons/<id>', Schema(),
        auth.owner('user_id'), _beaconsOperations.getBeaconById);
    registerRouteWithAuth('get', '/beacons/udi/<udi>', Schema(), auth.owner(),
        _beaconsOperations.getBeaconByUdi);
    registerRouteWithAuth('post', '/beacons', Schema(), auth.signed(),
        _beaconsOperations.createBeacon);
    registerRouteWithAuth('put', '/beacons', Schema(), auth.signed(),
        _beaconsOperations.updateBeacon);
    registerRouteWithAuth('del', '/beacons/<id>', Schema(), auth.signed(),
        _beaconsOperations.deleteBeaconById);
    registerRouteWithAuth('post', '/beacons/position', Schema(), auth.signed(),
        _beaconsOperations.calculatePosition);
  }

  void registerUserRoutes(AuthorizerV1 auth) {
    // Session Routes
    registerRouteWithAuth('post', '/users/signup', Schema(), auth.anybody(),
        _sessionsOperations.signup);
    registerRouteWithAuth('post', '/users/signin', Schema(), auth.anybody(),
        _sessionsOperations.signin);
    registerRouteWithAuth('post', '/users/signout', Schema(), auth.anybody(),
        _sessionsOperations.signout);
  }
}

```

