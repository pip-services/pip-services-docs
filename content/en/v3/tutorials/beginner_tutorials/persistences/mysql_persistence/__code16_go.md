
```go
page, err := persistence.GetPageByFilter(context.Background(), "123", "`key`='key 1'", *cdata.NewEmptyPagingParams(), "", "")
```
