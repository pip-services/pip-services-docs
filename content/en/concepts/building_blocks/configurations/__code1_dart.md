
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

void main(List<String> arguments) async {
  var config = ConfigParams.fromTuples(['param1', 'XYZ', 'param2', 345]);

  component.configure(config);
}

/// Also, often components can have hard-coded presets. 
/// The ConfigParams class has methods that allow to easily use them as defaults:

class MyComponent implements IConfigurable {
  String _param1 = 'ABC';
  int _param2 = 123;

  @override
  void configure(ConfigParams config) {
    _param1 = config.getAsStringWithDefault('param1', _param1);
    _param2 = config.getAsIntegerWithDefault('param2', _param2);
  }
}

```
