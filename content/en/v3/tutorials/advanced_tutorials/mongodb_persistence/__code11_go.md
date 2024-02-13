
See: [PagingParams](../../../toolkit_api/golang/commons/data/paging_params/)

```go
// skip = 25, take = 50, total = False
paging := cdata.NewPagingParams(25, 50, false)
result := persistence.GetPageByFilter(context.Background(), "123", nil, paging)
```
