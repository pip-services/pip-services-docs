
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

class MyObjectSchema extends ObjectSchema {
  MyObjectSchema() : super() {
    withRequiredProperty('prop1', TypeCode.Integer);
    withOptionalProperty('prop2', TypeCode.String);
    withOptionalProperty('prop3', MySubObjectSchema());
  }
}


```
