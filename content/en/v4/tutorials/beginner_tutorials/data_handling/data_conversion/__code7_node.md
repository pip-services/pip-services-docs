
```ts
import { LongConverter } from "pip-services4-commons-node"

let value1 = LongConverter.toLong("123.456");               // Returns 123
let value2 = LongConverter.toLong("ABC");                   // Returns 0
let value3 = LongConverter.toNullableLong("123.456");       // Returns 123
let value4 = LongConverter.toNullableLong("ABC");           // Returns null
let value5 = LongConverter.toNullableLong(true);            // Returns 1
let value6 = LongConverter.toLongWithDefault("123.456", 0); // Returns 123
let value7 = LongConverter.toLongWithDefault("ABC", 0);     // Returns 0

```
