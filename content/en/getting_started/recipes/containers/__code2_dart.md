
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';


class MyComponentA
    implements
        IReferenceable,
        IUnreferenceable,
        IConfigurable,
        IOpenable,
        IExecutable {
  bool _open = false;

  MyComponentA() {
    print('MyComponentA has been created.');
  }

  @override
  void configure(ConfigParams config) {
    print('MyComponentA has been configured.');
  }

  @override
  void setReferences(IReferences references) {
    print("MyComponentA's references have been defined.");
  }

  @override
  void unsetReferences() {
    print('References cleared');
  }

  @override
  bool isOpen() {
    return this._open;
  }

  @override
  Future open(String? correlationId) async {
    print('MyComponentA has been opened.');
  }

  @override
  Future close(String? correlationId) async {
    print('MyComponentA has been closed.');
  }

  @override
  Future execute(String? correlationId, Parameters args) async {
    print('Executing');
    var result = args;
    return result;
  }
}
```
