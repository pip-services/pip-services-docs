
```ts
import { ProjectionParams } from "pip-services4-data-node";

let projection = new ProjectionParams(['field1', 'field2']);

let page = await client.getMyObjects(filter, sorting, paging, projection);
```
