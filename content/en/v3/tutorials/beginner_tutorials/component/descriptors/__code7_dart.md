
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_components/pip_services3_components.dart';

void main(List<String> arguments) async {
  var MyFactory1 = Factory();
  var classADescriptor =
      Descriptor('mygroup', 'class', 'classA', 'classA', '1.0');

  MyFactory1.registerAsType(classADescriptor, ClassA);

  MyFactory1.create(classADescriptor);
}

class ClassA {
  ClassA() {
    print('ClassA created');
  }
}

```
