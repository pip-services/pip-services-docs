
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_components/pip_services3_components.dart';


class HelloFriendServiceFactory extends Factory {
  HelloFriendServiceFactory() : super() {
    var HttpServiceDescriptor =
        Descriptor('hello-friend', 'service', 'http', '*', '1.0'); // View 1
    var CommandableHttpServiceDescriptor1 = Descriptor(
        'hello-friend', 'service', 'commandable-http1', '*', '1.0'); // View 2
    var CommandableHttpServiceDescriptor2 = Descriptor(
        'hello-friend', 'service', 'commandable-http2', '*', '1.0'); // View 2
    var ControllerDescriptor = Descriptor(
        'hello-friend', 'controller', 'default', '*', '1.0'); // Controller

    registerAsType(HttpServiceDescriptor, HelloFriendRestService); // View 1
    registerAsType(CommandableHttpServiceDescriptor1,
        FriendCommandableHttpService1); // View 2
    registerAsType(CommandableHttpServiceDescriptor2,
        FriendCommandableHttpService2); // View 3
    registerAsType(ControllerDescriptor, HelloFriendController); // Controller
  }
}
    
```
