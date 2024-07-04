
```ts
import { SortParams, SortField } from "pip-services4-data-node";

let sorting = new SortParams(
    new SortField("key1", true),
    new SortField("key2", false)
  );
  
let values = await client.getMyObjects(filter, sorting);
```
