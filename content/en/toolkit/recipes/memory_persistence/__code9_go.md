
```go
// get all items
result, _ = persistence.GetPageByFilter(correlationId, cdata.NewFilterParamsFromTuples("id", "id 1"), cdata.NewPagingParams(0, nil, true))

page, _ = result.(*mypersistence.DummyPage)
fmt.Printf("get all item\n")
fmt.Printf("Has %v items \n", *page.Total)
for _, v := range page.Data {
	fmt.Printf("%v , %v, %v \n", v.Id, v.Key, v.Content)
}
```
