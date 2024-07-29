
```go
page, err := persistence.GetPageByFilter(context.Background(), "`key`='key 1'", *cquery.NewEmptyPagingParams(), "", "")
```
