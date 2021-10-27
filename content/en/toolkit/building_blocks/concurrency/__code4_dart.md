
```dart
import 'package:pip_services3_components/pip_services3_components.dart';

class MyComponent {
  ILock _lock;

  ...
  void processMyObject(String correlationId, String objectId) async {
    // Try to acquire lock for 10 secs
    if(!await _lock.tryAcquireLock(correlationId, 'mycomponent:' + objectId, 10000)) {
      // Other instance already executing that transaction
      return;
    }

  ...
  }
}

```
