
```dart
var lock = MemoryLock();
var config = ConfigParams.fromTuples(['retry_timeout', 200]);
lock.configure(config);
```
