
```ts
import { TypeConverter, TypeCode } from "pip-services4-commons-node"

let value1 = TypeConverter.toType(TypeCode.String, 123);                  // Returns '123'
let value2 = TypeConverter.toNullableType(TypeCode.String, 123);          // Returns '123'
let value3 = TypeConverter.toTypeWithDefault(TypeCode.Integer, "ABC", 1); // 1
let value4 = TypeConverter.toTypeCode("Hello world");                     // Returns TypeCode.String
let value5 = TypeConverter.toString(TypeCode.String);                     // Returns 'string'

```
