
See: [MongoDb module](../../../toolkit_api/golang/mongodb), [Commons module](../../../toolkit_api/golang/commons), [FilterParams](../../../toolkit_api/golang/commons/data/filter_params/)

```go
filter := cdata.NewFilterParamsFromTuples(
	"name", "ABC",
)
result, _ := persistence.GetPageByFilter(context.Background(), "123", filter, nil)

```
