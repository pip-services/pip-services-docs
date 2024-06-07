
```go
paging := cquery.NewPagingParams(0, 100, true)
page := client.GetMyObjects(context.Background(), filter, sorting, paging)
```
