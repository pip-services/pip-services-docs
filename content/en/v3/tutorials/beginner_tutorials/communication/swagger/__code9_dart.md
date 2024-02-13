
```dart
import 'package:pip_services3_container/pip_services3_container.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';
import 'package:pip_services3_swagger/pip_services3_swagger.dart';


class HelloFriendProcess extends ProcessContainer {
  HelloFriendProcess() : super('hello-friend', 'HelloFriend microservice') {
    configPath = './config.yml';
    factories.add(HelloFriendServiceFactory());
    factories.add(DefaultRpcFactory());
    factories.add(DefaultSwaggerFactory());
  }
}

```
