
```ts
import { DateTimeConverter } from "pip-services4-commons-node"

let value0 = DateTimeConverter.toDateTime("2021-11-09T17:24:50.750Z");          // Returns 2021-11-09 17:24:50.75
let value1 = DateTimeConverter.toNullableDateTime("ABC");                       // Returns null
let value2 = DateTimeConverter.toNullableDateTime("2021-11-09T17:24:50.750Z");  // Returns 2021-11-09 17:24:50.75
let value3 = DateTimeConverter.toNullableDateTime(12345657755000);              // Returns 2361-03-21 16:22:35
let value4 = DateTimeConverter.toDateTimeWithDefault("ABC", new Date());        // Returns current datetime
let value5 = DateTimeConverter.toDateTimeWithDefault("2021-11-09T17:24:50.750Z", new Date()); // Returns 2021-11-09 17:24:50.75

```
