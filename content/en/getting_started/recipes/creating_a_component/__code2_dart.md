
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

class MyComponentA implements IConfigurable {
  String _param1 = 'ABC';
  int _param2 = 123;
  bool _open = false;
  String? _status;

  // Creates a new instance of the component.
  MyComponentA() {
    _status = 'Created';
    print('MyComponentA has been created.');
  }

  @override
  void configure(ConfigParams config) {
    _param1 = config.getAsStringWithDefault('param1', 'ABC');
    _param2 = config.getAsIntegerWithDefault('param2', 123);
    _status = 'Configured';

    print('MyComponentA has been configured.');
  }
}


```
