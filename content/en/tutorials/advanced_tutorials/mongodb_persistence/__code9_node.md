
See: [MongoDb module](../../../toolkit_api/node/mongodb), [Commons module](../../../toolkit_api/node/commons), [FilterParams](../../../toolkit_api/node/commons/data/filter_params/)

```typescript
let filter = FilterParams.fromTuples(
    "name", 'ABC'
 )
let page = await persistence.getPageByFilter("123", filter, null)


```

