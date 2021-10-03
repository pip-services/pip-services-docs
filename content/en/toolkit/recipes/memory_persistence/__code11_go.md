
```go
// get all item
result, _ = persistence.GetPageByFilter(correlationId, cdata.NewFilterParamsFromTuples("id", "1"), cdata.NewPagingParams(0, nil, true))

page, _ = result.(*mypersistence.DummyPage)

fmt.Printf("Has %v items \n", *page.Total)

```
