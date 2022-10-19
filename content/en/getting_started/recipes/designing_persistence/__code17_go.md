
```go
result, err := persistence.GetPageByFilter(context.Background(), "123", *cdata.NewFilterParamsFromTuples("key", "key 8"), *cdata.NewEmptyPagingParams(), *cdata.NewEmptySortParams())
```
