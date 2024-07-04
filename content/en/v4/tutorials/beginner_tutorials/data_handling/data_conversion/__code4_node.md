
```ts
import { DoubleConverter } from "pip-services4-commons-node"

let value1 = DoubleConverter.toDouble("123.456");               // Returns 123.456
let value2 = DoubleConverter.toDouble("ABC");                   // Returns 0
let value3 = DoubleConverter.toDoubleWithDefault("123.456", 0); // Returns 123.456
let value4 = DoubleConverter.toDoubleWithDefault("ABC", 0);     // Returns 0
let value5 = DoubleConverter.toNullableDouble("123.456");       // Returns 123.456
let value6 = DoubleConverter.toNullableDouble("ABC");           // Returns null
let value7 = DoubleConverter.toNullableDouble(true);            // Returns 1

```
