
```dart
Future<String> greeting(name) async{
    return 'Hello, ' + (name ?? defaultName) + '!';
}
```

To demonstrate the dynamic configuration of a component, the recipient name will be specified by the parameter "default_name". To get the configuration, the component must implement the interface "IConfigurable" with the method "configure".

```dart
void configure(config) {
    defaultName = config.getAsStringWithDefault('default_name', defaultName);  
}
```

Parameters will be read by the microservice from the configuration file and passed to the "configure" method of the corresponding component. Here's an example of the configuration:

```yml
# Controller
- descriptor: "hello-world:controller:default:default:1.0"
  default_name: "World"
```

More details on this mechanism can be found in [Component Configuration](../../tutorials/beginner_tutorials/configuration/component_configuration/).

This is all the code of the service in the file:

**/lib/src/HelloWorldController.dart**

```dart
import 'dart:async';

class HelloWorldController implements IConfigurable {
  var defaultName;
  HelloWorldController() {
    defaultName = 'Pip User';
  }

  @override  
  void configure(ConfigParams config) {
    defaultName = config.getAsStringWithDefault('default_name', defaultName);
  }
‍
  Future<String> greeting(name) async{
    return 'Hello, ' + (name ?? defaultName) + '!';
  }
}

```
