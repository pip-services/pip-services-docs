
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

class MyCustomPersistence {
  // Custom implementation using any persistence framework
}

class MyCustomPersistenceWrapper
    implements IConfigurable, IReferenceable, IOpenable {
  ConfigParams _config = ConfigParams();
  MyCustomPersistence? _persistence;

  @override
  void configure(ConfigParams config) {
    // Store config parameters
        _config = config;
  }

  @override
  void setReferences(IReferences references) {
    // Retrieve whatever references you may need
  }

   @override
  bool isOpen() {
    return _persistence != null;
  }

  @override
  Future open(String? correlationId) {
    if (_persistence != null) {
      return;
    }

    // Create custom persistence
    _persistence = new MyCustomPersistence();

    // Configure custom persistence
    ...

    // Open and connect to the database
    await _persistence.connect();
  }

  @override
  Future close(String? correlationId) {
    if (_persistence == null) {
      return;
    }

    // Disconnect from the database and close
    await _persistence.disconnect();
    _persistence = null;
  }

  Future customMethod(...) async {
    // Delegate operations to custom persistence
    return await _persistence.customMethod(...);
  }
  
}

```