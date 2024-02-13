
```ts
import { PagingParams } from "pip-services3-commons-nodex";

let paging = new PagingParams(0, 100, true);

let page = await client.getMyObjects(filter, sorting, paging);

```
