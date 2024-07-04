```ts
import { PagingParams } from "pip-services4-data-node";

let paging = new PagingParams(0, 100, true);

let page = await client.getMyObjects(filter, sorting, paging);
```
