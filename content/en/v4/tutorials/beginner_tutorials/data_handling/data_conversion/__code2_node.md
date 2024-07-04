
```ts
import { BooleanConverter } from "pip-services4-commons-node"

let value1 = BooleanConverter.toBoolean("yes");                     // Returns True
let value2 = BooleanConverter.toBooleanWithDefault(true, false);    // Returns True
let value3 = BooleanConverter.toBooleanWithDefault(123, false);     // Returns True
let value4 = BooleanConverter.toNullableBoolean(true);              // Returns True
let value5 = BooleanConverter.toNullableBoolean("yes");             // Returns True
let value6 = BooleanConverter.toNullableBoolean(123);               // Returns True
let value7 = BooleanConverter.toNullableBoolean({});                // Returns null
```
