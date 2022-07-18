
```dart
// JSON converter
import 'package:pip_services3_commons/pip_services3_commons.dart';

var value1 = JsonConverter.toJson({'key': 123});                            // Returns '{"key": 123}'
var value2 = JsonConverter.fromJson(TypeCode.Map, '{\"key\":\"123\"}');     // Returns {'key': '123'}
var value3 = JsonConverter.toMap(value1!);                                  // Returns {'key': 123}
var value4 = JsonConverter.toMapWithDefault(value1, {'my key': 'my val'});  // Returns {'key': 123}
var value5 = JsonConverter.toMapWithDefault('', {'my key': 'my val'});      // Returns { "my key": "my val" }
var value6 = JsonConverter.toNullableMap(value1);                           // Returns {'key': 123}
var value7 = JsonConverter.toNullableMap('{}');                             // Returns {}
    

```
