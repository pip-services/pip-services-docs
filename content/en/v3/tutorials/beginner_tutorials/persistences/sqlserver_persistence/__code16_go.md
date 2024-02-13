
```go
page, err := persistence.GetPageByFilter(context.Background(), "123", "[key]='key 3'", *cdata.NewEmptyPagingParams(), "", "")
```
