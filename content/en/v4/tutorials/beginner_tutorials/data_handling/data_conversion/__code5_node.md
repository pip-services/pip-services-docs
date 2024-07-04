
```ts
import { FloatConverter } from "pip-services4-commons-node"

let value1 = FloatConverter.toFloat("123.456");                 // Returns 123.456
let value2 = FloatConverter.toFloat("ABC");                     // Returns 0
let value3 = FloatConverter.toFloatWithDefault("123.456", 0);   // Returns 123.456
let value4 = FloatConverter.toFloatWithDefault("ABC", 0);       // Returns 0
let value5 = FloatConverter.toNullableFloat("123.456");         // Returns 123.456
let value6 = FloatConverter.toNullableFloat("ABC");             // Returns null
let value7 = FloatConverter.toNullableFloat(true);              // Returns 1

```
