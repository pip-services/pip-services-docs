
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

var sorting = SortParams.fromTuples([
  'key1', true, 
  'key2', false
]);

var values = await client.getMyObjects(filter, sorting);

```
