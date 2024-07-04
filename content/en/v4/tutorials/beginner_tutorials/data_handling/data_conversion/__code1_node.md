
```ts
import { ArrayConverter } from "pip-services4-commons-node"

let value1 = ArrayConverter.toArray([1, 2]);                // Returns [1, 2]
let value2 = ArrayConverter.toArray(1);                     // Returns [1]
let value3 = ArrayConverter.toArrayWithDefault(null, [1]);  // Returns [1]
let value4 = ArrayConverter.listToArray("1,2,3");           // Returns ['1', '2', '3']
let value5 = ArrayConverter.toNullableArray("1,2");         // Returns ['1,2']
```
