
```ts
// get all items 
page = await persistence.getPageByFilter(null,
    null,
    new PagingParams(0, null, true));

console.log('Has ' + page.total + ' items');

for (let item of page.data) {
    console.log(`${item.id}, ${item.key}, ${item.content}`);
}

```
