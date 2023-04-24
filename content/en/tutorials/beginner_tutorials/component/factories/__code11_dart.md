
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_components/pip_services3_components.dart';

var factory1 = Factory();
factory1.registerAsType(Descriptor("mygroup", "mycomponent1", "default", "*", "1.0"), MyComponent1);
compositeFactory.add(factory1);
```
