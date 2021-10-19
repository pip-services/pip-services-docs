
```dart
class MyComponentB
    implements
        IReferenceable,
        IUnreferenceable,
        IConfigurable,
        IOpenable,
        ICleanable {
  String _param1 = 'ABC2';
  int _param2 = 456;

  bool _opened = false;

  String? _status;

  var _logger = ConsoleLogger();

  /// Creates a new instance of the component.
  MyComponentB() {
    _status = 'Created';
    _logger.setLevel(LogLevel.Debug);
    _logger.info(null, 'MyComponentB has been configured.');
  }

  @override
  void configure(ConfigParams config) {
    _param1 = config.getAsStringWithDefault('param1', _param1);
    _param2 = config.getAsIntegerWithDefault('param2', _param2);
    _logger.info(null, 'MyComponentB has been configured.');
  }

  void myTask(String? correlationId) {
    // create an artificial problem
    try {
      throw Exception('Logging demo. Error created');
    } catch (ex) {
      _logger.error(correlationId, ex as Exception, 'Error created.');
    }
  }

  @override
  void setReferences(IReferences references) {
    // pass
  }

  @override
  bool isOpen() {
    // pass
    return true;
  }

  @override
  Future open(String? correlationId) async {
    // pass
  }

  @override
  Future close(String? correlationId) async {
    // pass
  }

  /// Clears component state.
  @override
  Future clear(String? correlationId) async {
    // pass
  }

  /// Unsets (clears) previously set references to dependent components.
  @override
  void unsetReferences() {
    // pass
  }
}

class MyComponentA
    implements
        IReferenceable,
        IUnreferenceable,
        IConfigurable,
        IOpenable,
        ICleanable {
  String _param1 = 'ABC';
  int _param2 = 123;

  bool _opened = false;

  String? _status;

  MyComponentB? _anotherComponent;

  String? dummyVariable = 'resource variable';

  var _logger = CompositeLogger();

  /// Creates a new instance of the component.
  MyComponentA() : _status = 'Created' {
    _logger.setLevel(LogLevel.Debug);
    _logger.info(null, 'MyComponentA has been configured.');
  }

  @override
  void configure(ConfigParams config) {
    _param1 = config.getAsStringWithDefault('param1', _param1);
    _param2 = config.getAsIntegerWithDefault('param2', _param2);

    _status = 'Configured';

    _logger.info(null, 'MyComponentB has been configured.');
  }

  void myTask(String? correlationId) {
    // create an artificial problem
    try {
      throw Exception('Logging demo. Error created');
    } catch (ex) {
      _logger.error(correlationId, ex as Exception, 'Error created.');
    }
  }

  @override
  void setReferences(IReferences references) {
    _anotherComponent = references.getOneRequired(
        Descriptor('myservice', 'mycomponent-b', '*', '*', '1.0'));
    _logger.setReferences(references);

    _status = 'Configured';
    _logger.info(null, "MyComponentA's references have been defined.");
  }

  @override
  bool isOpen() {
    return _opened;
  }

  @override
  Future open(String? correlationId) async {
    _opened = true;
    _status = 'Open';
    _logger.info(correlationId, 'MyComponentA has been opened.');
    // artificial problem
    myTask(correlationId);
  }

  @override
  Future close(String? correlationId) async {
    _opened = false;
    _status = 'Closed';
    _logger.info(correlationId, 'MyComponentA has been closed.');
  }

  /// Clears component state.
  @override
  Future clear(String? correlationId) async {
    dummyVariable = null;
    _status = null;
    _logger.info(null, 'Resources cleared');
  }

  /// Unsets (clears) previously set references to dependent components.
  @override
  void unsetReferences() {
    _anotherComponent = null;
    _status = 'Un-referenced';
    _logger.info(null, 'References cleared');
  }
}

```
