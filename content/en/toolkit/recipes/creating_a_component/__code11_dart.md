
```dart
import 'package:pip_services3_components/pip_services3_components.dart';

class MyClassFactory extends Factory {
  MyClassFactory() : super() {
    var ComponentADescriptor =
        Descriptor('myservice', 'mycomponentA', 'default', '*', '1.0');
    var ComponentBDescriptor =
        Descriptor('myservice', 'mycomponent-b', 'default', '*', '1.0');

    registerAsType(ComponentADescriptor, MyComponentA);
    registerAsType(ComponentBDescriptor, MyComponentB);
  }
}

```

