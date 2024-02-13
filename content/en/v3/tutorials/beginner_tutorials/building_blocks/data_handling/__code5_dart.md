
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

var projection = ProjectionParams(['field1', 'field2']);

var page = await client.getMyObjects(filter, sorting, paging, projection);

```
