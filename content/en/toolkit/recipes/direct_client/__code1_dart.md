
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

void main(List<String> argument) {
  // Instantiation
  var myController = MyController();
}

class MyController implements IConfigurable, IReferenceable {
  void configure(ConfigParams config) {}

  void setReferences(IReferences references) {}

  void myMethod() {
    print('Hello world');
  }
}

```
