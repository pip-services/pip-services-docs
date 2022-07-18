
```dart
import 'package:pip_services3_components/pip_services3_components.dart';

class MyComponent {
  ILock _lock;

  ...
  void processMyObject(String correlationId, String objectId) async {
    // Acquire lock for 10 secs
    await _lock.acquireLock(correlationId, 'mycomponent:' + objectId, 10000, 10000);
    try {
      ...
    } finally {
      // Release lock
      await _lock.releaseLock(correlationId, 'mycomponent:' + objectId);
    }
  }
}

```
