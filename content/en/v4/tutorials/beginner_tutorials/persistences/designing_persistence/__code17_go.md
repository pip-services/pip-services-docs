
```go
result, err := persistence.GetPageByFilter(context.Background(), *cquery.NewFilterParamsFromTuples("key", "key 8"), *cquery.NewEmptyPagingParams(), *cquery.NewEmptySortParams())
```
