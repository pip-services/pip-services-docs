
```dart
import 'package:pip_services3_components/pip_services3_components.dart';
import 'package:pip_services3_container/pip_services3_container.dart';

/// Running the container
void main(List<String> argument) async {
  var runner = MyProcess();
  print('run');
  try {
    runner.run(argument);
  } catch (ex) {
    print(ex);
  }
}

/// Creating a process container
class MyProcess extends ProcessContainer {
  MyProcess() : super('myservice', 'My service running as a process') {
    configPath = './configV4.yaml';

    var MyFactory1 = Factory();

    MyFactory1.registerAsType(
        Descriptor('myservice', 'component-a1', 'default', '*', '1.0'),
        ComponentA1);
    MyFactory1.registerAsType(
        Descriptor('myservice', 'component-a2', 'default', '*', '1.0'),
        ComponentA2);
    MyFactory1.registerAsType(
        Descriptor('myservice', 'component-b', 'default', '*', '1.0'),
        ComponentB);

    factories.add(MyFactory1);
  }
}
```
