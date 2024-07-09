
```ts
// get all items 
page = await persistence.getPageByFilter(null,
    FilterParams.fromTuples('id', '1'),
    new PagingParams(0, null, true));

console.log('Has ' + page.total + ' items');

```
