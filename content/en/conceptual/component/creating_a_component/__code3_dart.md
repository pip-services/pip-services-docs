
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

class MyComponentB {
  String _param1 = 'ABC2';
  int _param2 = 456;
  bool _open = false;
  String? _status;

  // Creates a new instance of the component.
  MyComponentB() {
    _status = 'Created';
    print('MyComponentB has been created.');
  }
}

class MyComponentA implements IConfigurable, IReferenceable {
  String _param1 = 'ABC';
  int _param2 = 123;
  bool _open = false;
  String? _status;
  MyComponentB? _anotherComponent;

  // Creates a new instance of the component.
  MyComponentA() {
    _status = 'Created';
    print('MyComponentA has been created.');
  }

  @override
  void setReferences(IReferences references) {
    _anotherComponent = references.getOneRequired<MyComponentB>(
        Descriptor('myservice', 'mycomponent-b', '*', '*', '1.0'));

    _status = 'Configured';
    print("MyComponentA's references have been defined.");
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

