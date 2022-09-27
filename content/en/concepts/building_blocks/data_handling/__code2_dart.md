
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

var filter = FilterParams.fromTuples(['key1', 'ABC', 'key2', 123]);

var values = await client.getMyObjects(filter);

```
