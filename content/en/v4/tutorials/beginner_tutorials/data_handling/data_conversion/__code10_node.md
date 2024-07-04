
```ts
import { MapConverter } from "pip-services4-commons-node"

let value1 = MapConverter.toNullableMap("ABC");                       // Returns null
let value2 = MapConverter.toNullableMap({ "key": 123 });              // Returns { key: 123 }
let value3 = MapConverter.toNullableMap([1, 2, 3]);                   // Returns { "0": 1, "1": 2, "2": 3 }
let value4 = MapConverter.toMap("ABC");                               // Returns {}
let value5 = MapConverter.toMapWithDefault("ABC", value2);            // Returns {'key': 123}
let value6 = MapConverter.toMapWithDefault({ "key": 12345 }, value2); // Returns {'key': 12345}

```
