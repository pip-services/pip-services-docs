
```ts
import { StringConverter } from "pip-services4-commons-node"

let value1 = StringConverter.toString(123.456);                 // Returns '123.456'
let value2 = StringConverter.toString(true);                    // Returns 'True'
let value3 = StringConverter.toString(new Date(2018, 10, 1));   // Returns '2018-10-01T00:00:00Z'
let value4 = StringConverter.toString([ "a", "b", "c" ]);       // Returns 'a,b,c'
let value5 = StringConverter.toString(null);                    // Returns ""
let value6 = StringConverter.toNullableString(null);            // Returns null
let value7 = StringConverter.toStringWithDefault(null, "my default");   // Returns 'my default' 

```
