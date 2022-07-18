
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';

class FriendCommandableHttpService1 extends CommandableHttpService {
  String? _swaggerPath;

  FriendCommandableHttpService1() : super('commandable_hello_friend1') {
    dependencyResolver.put(
        'controller', Descriptor('hello-friend', 'controller', '*', '*', '*'));
  }

  @override
  set config(ConfigParams? _config) {
    super.config = _config;

    // swagger
    _swaggerPath = config?.getAsNullableString('swagger.path');
  }

  @override
  void register() {
    super.register();

    if (_swaggerPath != null) registerOpenApiSpecFromFile(_swaggerPath!);
  }
}

```
