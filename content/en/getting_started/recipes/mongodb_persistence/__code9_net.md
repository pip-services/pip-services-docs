
See: [MongoDb module](../../../toolkit_api/net/mongodb), [Commons module](../../../toolkit_api/net/commons), [FilterParams](../../../toolkit_api/net/commons/data/filter_params/)

```cs
var filter = FilterParams.FromTuples(
    "name", "ABC"
);
var result = await persistence.GetPageByFilterAsync(null, filter, null);

```

