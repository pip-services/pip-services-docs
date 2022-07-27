
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';

class FriendCommandableHttpService extends CommandableHttpService {
  FriendCommandableHttpService() : super('commandable_hello_friend') {
    dependencyResolver.put('controller', Descriptor('hello-friend', 'controller', '*', '*', '*'));
  }
}

```
