
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_components/pip_services3_components.dart';

class MyComponent implements IReferenceable {
  late ICache _cache;
  late MemoryLock _lock;

  @override
  void setReferences(IReferences references) {
    _cache =
        references.getOneRequired(Descriptor('*', 'cache', '*', '*', '1.0'));
    _lock = references.getOneRequired(Descriptor('*', 'lock', '*', '*', '1.0'));
  }

  Future<void> storeResult(String? correlationId, String param1) async {
    // Lock
    await _lock.acquireLock(correlationId, 'mykey', 1000, 1000);

    var config = ConfigParams.fromTuples(['retry_timeout', 200]);
    _lock.configure(config);

    // Do processing
    // ...
    print('The stored value is ' + param1);

    // Store result to cache async
    await _cache.store(correlationId, 'mykey', param1, 3600000);

    // Release lock async
    await _lock.releaseLock(correlationId, 'mykey');
  }

  Future<String> obtainResult(String? correlationId) async {
    // Lock..
    await _lock.acquireLock(correlationId, 'mykey', 1000, 1000);

    // Do processing
    // ...
    var result = await _cache.retrieve(correlationId, 'mykey') as String;

    // Release lock async
    await _lock.releaseLock(correlationId, 'mykey');

    return result;
  }
}
    
    
// Use the component
var my_component = MyComponent();
my_component.setReferences(References.fromTuples([
  Descriptor('pip-services', 'cache', 'memory', 'default', '1.0'),
  MemoryCache(),
  Descriptor('pip-services', 'lock', 'memory', 'default', '1.0'),
  MemoryLock()
]));

await my_component.storeResult(null, 'param1');

var result = await my_component.obtainResult(null);

print('The retrieved value is ' + result);
```
