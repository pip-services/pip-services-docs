
```ts
import { SortParams } from "pip-services3-commons-nodex";

let sorting = SortParams.fromTuples(
  'key1', true,
  'key2', false
);

let values = await client.getMyObjects(filter, sorting);

```
