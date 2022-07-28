
See: [PagingParams](../../../toolkit_api/node/commons/data/paging_params/)

```typescript
//skip = 25, take = 50, total = False
let paging = new PagingParams(25, 50, false);
let result = await persistence.getPageByFilter(null, null, paging);

```

