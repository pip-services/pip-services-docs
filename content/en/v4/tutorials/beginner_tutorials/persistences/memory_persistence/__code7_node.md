
```ts
// get all items 
page = await persistence.getPageByFilter(null,
    FilterParams.fromTuples('id', 'id 1'),
    new PagingParams(0, 3));

for (let item of page.data) {
    console.log(`${item.id}, ${item.key}, ${item.content}`);
}

```
