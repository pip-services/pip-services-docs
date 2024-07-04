
```ts
import { IntegerConverter } from "pip-services4-commons-node"

let value1 = IntegerConverter.toInteger("123.456");                 // Returns 123
let value2 = IntegerConverter.toInteger("ABC");                     // Returns 0
let value3 = IntegerConverter.toNullableInteger("123.456");         // Returns 123
let value4 = IntegerConverter.toNullableInteger("ABC");             // Returns null
let value5 = IntegerConverter.toNullableInteger(true);              // Returns 1
let value6 = IntegerConverter.toIntegerWithDefault("ABC", 123);     // Returns 123 
let value7 = IntegerConverter.toIntegerWithDefault("123.456", 123); // Returns 123 

```
