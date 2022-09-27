
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

class MyComponentB {
  // ...
}

class MyComponentA implements IConfigurable, IReferenceable, IOpenable, IUnreferenceable {
  String _param1 = 'ABC';
  int _param2 = 123;
  bool _open = false;
  String? _status;
  MyComponentB? _anotherComponent;

  String? dummyVariable;

  // ...

}


try {
    var component = MyComponentA();
    // ...

    await component.close(null);
} finally {
    print("Component destroyed");
}

```

