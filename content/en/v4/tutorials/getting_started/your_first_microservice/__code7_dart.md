
```dart
class HelloWorldServiceFactory extends Factory
```

Next, in the factory's constructor, we'll be registering descriptors and their corresponding component types.

```dart
HelloWorldServiceFactory() : super() {
    registerAsType(
        Descriptor('hello-world', 'controller', 'default', '*', '1.0'),
        HelloWorldController);
    registerAsType(Descriptor('hello-world', 'service', 'http', '*', '1.0'),
        HelloWorldRestService);
}
```

For more info on how this works, be sure to check out [Process Container](../../tutorials/beginner_tutorials/containers/process_container).

The full listing of the factory's code can found in the file:

**‍/lib/src/HelloWorldServiceFactory.dart**

```dart
import 'package:pip_services3_components/pip_services3_components.dart';
import 'package:pip_services3_commons/pip_services3_commons.dart';
import './HelloWorldController.dart';import './HelloWorldRestService.dart';

class HelloWorldServiceFactory extends Factory {
  HelloWorldServiceFactory() : super() {
    registerAsType(
        Descriptor('hello-world', 'controller', 'default', '*', '1.0'),
        HelloWorldController);
    registerAsType(Descriptor('hello-world', 'service', 'http', '*', '1.0'),
        HelloWorldRestService);
  }
}
```

