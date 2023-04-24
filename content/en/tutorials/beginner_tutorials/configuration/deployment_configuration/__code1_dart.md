
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

abstract class IMyDataPersistence {
  Future<MyFriend?> getOneRandom(String? correlationId, FilterParams filter);
  Future<MyFriend?> create(String? correlationId, MyFriend item);
}

```

