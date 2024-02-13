
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_components/pip_services3_components.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';


class HelloFriendServiceFactory extends Factory {
  HelloFriendServiceFactory() : super() {
    var CommandableHttpServiceDescriptor = Descriptor(
        'hello-friend', 'service', 'commandable-http', '*', '1.0'); // View
    var ControllerDescriptor = Descriptor(
        'hello-friend', 'controller', 'default', '*', '1.0'); // Controller

    registerAsType(
        CommandableHttpServiceDescriptor, FriendCommandableHttpService);
    registerAsType(ControllerDescriptor, HelloFriendController);
  }
}

```
