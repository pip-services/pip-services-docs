
See: [MongoDb module](../../../toolkit_api/golang/mongodb), [Commons module](../../../toolkit_api/golang/commons), [FilterParams](../../../toolkit_api/golang/data/query/filter_params/)

```go
filter := cquery.NewFilterParamsFromTuples(
	"name", "ABC",
)
result, _ := persistence.GetPageByFilter(context.Background(), filter, nil)
```
