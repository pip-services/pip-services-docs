
```go
count, err := persistence.GetCountByFilter(context.Background(), "", cdata.NewFilterParamsFromTuples("key", "key 3")) // Returns 1
```
