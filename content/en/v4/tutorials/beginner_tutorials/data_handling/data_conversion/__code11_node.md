
```ts
import { RecursiveMapConverter } from "pip-services4-commons-node"

let value1 = RecursiveMapConverter.toMap({ "key": 123});                              // Returns {'key': 123}
let value2 = RecursiveMapConverter.toMapWithDefault(null, { "my key": "my val" });    // Returns { "my key": "my val" }
let value3 = RecursiveMapConverter.toNullableMap({ "key": 123 });                     // Returns {'key': 123}
let value4 = RecursiveMapConverter.toNullableMap([1,[2,3]]); // Returns {0: 1, 1: {0: 2, 1: 3}}

```
