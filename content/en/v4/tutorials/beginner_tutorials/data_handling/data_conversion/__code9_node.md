
```ts
import { JsonConverter, TypeCode } from "pip-services4-commons-node"

let value1 = JsonConverter.toJson({ "key": 123 });                           // Returns '{"key": 123}'
let value2 = JsonConverter.fromJson(TypeCode.Map, "{\"key\":\"123\"}");      // Returns {'key': '123'}
let value3 = JsonConverter.toMap(value1);                                    // Returns {'key': 123}
let value4 = JsonConverter.toMapWithDefault(value1, { "my key": "my val" }); // Returns {'key': 123}
let value5 = JsonConverter.toMapWithDefault("", { "my key": "my val" });     // Returns { "my key": "my val" }
let value6 = JsonConverter.toNullableMap(value1);                            // Returns {'key': 123}
let value7 = JsonConverter.toNullableMap("{}");                              // Returns {}
  
```
