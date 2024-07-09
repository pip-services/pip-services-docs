
```go
// get all item
page, _ = persistence.GetPageByFilter(context.Background(), cdata.NewFilterParamsFromTuples("id", "1"), cdata.NewPagingParams(0, nil, true))

fmt.Printf("Has %v items \n", page.Total)
```
