
```go
count, err := persistence.GetCountByFilter(context.Background(), cquery.NewFilterParamsFromTuples("key", "key 3")) // Returns 1
```
