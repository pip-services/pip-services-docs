
```ts
// get all items 
page = await persistence.getPageByFilter(null,
    FilterParams.fromTuples('id', 'id 1'),
    new PagingParams(0, null, null));

for (let item of page.data) {
    console.log(`${item.id}, ${item.key}, ${item.content}`);
}

```
