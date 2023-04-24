
```dart
import 'package:pip_services3_components/pip_services3_components.dart';

class MyComponent {
  ICache _cache;

  ...

  Future<MyObject> getMyObjectById(String? correlationId, String objectId) async {
    var result = await _cache.retrieve(correlationId, 'mycomponent:' + objectId);
    if (result != null) { return result; }

    // Retrieve the object
    ...

    await _cache.store(correlationId, 'mycomponent:' + objectId, result, 1000);
    return result;
  }
}

```
