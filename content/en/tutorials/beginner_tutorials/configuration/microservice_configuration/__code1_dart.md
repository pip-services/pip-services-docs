
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

class ComponentB
    implements IReferenceable, IConfigurable, IOpenable, IUnreferenceable {
  String _param1 = 'ABC2';
  int _param2 = 456;
  bool _opened = false;
  String _status;

  ComponentB() : _status = 'Created' {
    print('ComponentB has been created.');
  }

  @override
  void configure(ConfigParams config) {
    _param1 = config.getAsStringWithDefault('param1', _param1);
    _param2 = config.getAsIntegerWithDefault('param2', _param2);
    print('ComponentB has been configured.');
  }

  @override
  void setReferences(IReferences references) {
    // TODO: implement setReferences
  }

  @override
  bool isOpen() {
    // TODO: implement isOpen
    throw UnimplementedError();
  }

  @override
  Future open(String? correlationId) {
    // TODO: implement open
    throw UnimplementedError();
  }

  @override
  Future close(String? correlationId) {
    // TODO: implement close
    throw UnimplementedError();
  }

  /// Unsets (clears) previously set references to dependent components.
  @override
  void unsetReferences() {
    // TODO: implement unsetReferences
  }
}

class ComponentA1
    implements IReferenceable, IConfigurable, IOpenable, IUnreferenceable {
  String _param1 = 'ABC';
  int _param2 = 123;
  ComponentB? _another_component;
  bool _opened = false;
  String _status;
  String? dummy_variable;

  ComponentA1() : _status = 'Created' {
    print('ComponentA1 has been created.');
  }

  @override
  void configure(ConfigParams config) {
    _param1 = config.getAsStringWithDefault('param1', 'ABC');
    _param2 = config.getAsIntegerWithDefault('param2', 123);
    _status = 'Configured';
    print('ComponentA1 has been configured.');
  }

  @override
  void setReferences(IReferences references) {
    _another_component = references.getOneRequired(
        Descriptor('myservice', 'component-b', '*', '*', '1.0'));
    _status = 'Configured';
    print("ComponentA1's references have been defined.");
  }

  @override
  bool isOpen() {
    return _opened;
  }

  @override
  Future open(String? correlationId) async {
    _opened = true;
    _status = 'Open';
    print('ComponentA1 has been opened.');
  }

  @override
  Future close(String? correlationId) async {
    this._opened = false;
    this._status = 'Closed';
    print('ComponentA1 has been closed.');
  }

  Future myTask(String? correlationId) async {
    print('Doing my business task');
    dummy_variable = 'dummy value';
  }

  /// Unsets (clears) previously set references to dependent components.
  @override
  void unsetReferences() {
    _another_component = null;
    _status = 'Un-referenced';
    print('References cleared');
  }
}

class ComponentA2
    implements IReferenceable, IConfigurable, IOpenable, IUnreferenceable {
  String _param1 = 'ABC';
  int _param2 = 123;
  ComponentB? _another_component;
  bool _opened = false;
  String _status;
  String? dummy_variable;

  ComponentA2() : _status = 'Created' {
    print('ComponentA2 has been created.');
  }

  @override
  void setReferences(IReferences references) {
    _another_component = references.getOneRequired(
        Descriptor('myservice', 'component-b', '*', '*', '1.0'));
    _status = 'Configured';
    print("ComponentA2's references have been defined.");
  }

  @override
  void configure(ConfigParams config) {
    _param1 = config.getAsStringWithDefault('param1', 'ABC');
    _param2 = config.getAsIntegerWithDefault('param2', 123);
    _status = 'Configured';
    print('ComponentA2 has been configured.');
  }

  @override
  bool isOpen() {
    return _opened;
  }

  @override
  Future open(String? correlationId) async {
    _opened = true;
    _status = 'Open';
    print('ComponentA2 has been opened.');
  }

  @override
  Future close(String? correlationId) async {
    _opened = false;
    _status = 'Closed';
    print('ComponentA2 has been closed.');
  }

  Future myTask(String? correlationId) async {
    print('Doing my business task');
    dummy_variable = 'dummy value';
  }

  /// Unsets (clears) previously set references to dependent components.
  @override
  void unsetReferences() {
    _another_component = null;
    _status = 'Un-referenced';
    print('References cleared');
  }
}

```
