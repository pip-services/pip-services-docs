
See: [PagingParams](../../../toolkit_api/golang/data/query/paging_params/)

```go
// skip = 25, take = 50, total = False
paging := cquery.NewPagingParams(25, 50, false)
result := persistence.GetPageByFilter(context.Background(), nil, paging)
```
