
```ts
//skip = 25, take = 50, total = False
let paging = new PagingParams(25, 50, false);
let result = await persistence.getPageByFilter(null, null, paging);


```
