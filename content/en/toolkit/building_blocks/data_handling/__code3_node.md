
```ts
let sorting = SortParams.fromTuples(
  ‘key1’, true,
  ‘key2’, false
);

let values = await client.getMyObjects(filter, sorting);

```
