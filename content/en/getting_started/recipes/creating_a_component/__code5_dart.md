
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

class MyComponentB {
  // ...
}

class MyComponentA implements IConfigurable, IReferenceable, IOpenable {
  String _param1 = 'ABC';
  int _param2 = 123;
  bool _open = false;
  String? _status;
  MyComponentB? _anotherComponent;

  String? dummyVariable;

  // ...

  void myTask(String correlationId) {
    print('Doing my business task');
    dummyVariable = 'dummy value';
  }
}


```

