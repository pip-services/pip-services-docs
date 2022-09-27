
```dart
import 'package:pip_services3_components/pip_services3_components.dart';

class MyFactory extends Factory {
  MyFactory() : super() {
    registerAsType(
        Descriptor('myservice', 'MyComponentA', '*', '*', '1.0'), MyComponentA);
  }
}
```
