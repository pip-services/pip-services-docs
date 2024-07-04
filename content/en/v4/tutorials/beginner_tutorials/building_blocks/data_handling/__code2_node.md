
```ts
import { FilterParams } from "pip-services4-data-node";

let filter = FilterParams.fromTuples(
    'key1', 'ABC',
    'key2', 123
);

let values = await client.getMyObjects(filter);
```
