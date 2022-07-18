
```ts
import { ProjectionParams } from "pip-services3-commons-nodex";

let projection = new ProjectionParams(['field1', 'field2']);

let page = await client.getMyObjects(filter, sorting, paging, projection);

```
