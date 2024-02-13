
```dart
import 'package:pip_services3_container/pip_services3_container.dart';
import 'package:pip_services3_commons/pip_services3_commons.dart';


class MyProcess extends ProcessContainer {
  MyProcess() : super('myservice', 'My service running as a process') {
    configPath = './config.yaml';
    factories.add(MyFactory());
  }
}
```
