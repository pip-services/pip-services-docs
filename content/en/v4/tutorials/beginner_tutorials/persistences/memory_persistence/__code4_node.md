
```ts
// get one item
let page = await persistence.getPageByFilter(null, 
    FilterParams.fromTuples('key', 'key 2'), 
    new PagingParams(0, null, true));

console.log('Has ' + page.total + ' items');

for(let item of page.data){
    console.log(`${item.id}, ${item.key}, ${item.content}`);
}

```
