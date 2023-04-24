
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

var paging = PagingParams(0, 100, true);

var page = await client.getMyObjects(filter, sorting, paging);

```
