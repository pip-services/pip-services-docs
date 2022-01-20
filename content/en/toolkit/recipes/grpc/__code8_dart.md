
```ts
import 'package:pip_services3_commons/pip_services3_commons.dart';

var service = MyGrpcService();
service.configure(ConfigParams.fromTuples([
  'connection.protocol', 'http',
  'connection.host', 'localhost',
  'connection.port', 50055
]));

service.setReferences(References());

```
