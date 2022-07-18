
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

class MyIdentifiableMongoDbPersistence
    extends IdentifiableMongoDbPersistence<MyData, String> {
  MyIdentifiableMongoDbPersistence() : super('mydata');
}

var persistence = MyIdentifiableMongoDbPersistence();
var config = ConfigParams.fromTuples([
  'connection.host','localhost',
  'connection.port', 27017,
  'connection.database', 'pipdatabase'
]);

persistence.configure(config);
```
