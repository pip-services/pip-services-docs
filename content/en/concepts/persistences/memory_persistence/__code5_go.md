
See: [DataPage](../../../toolkit_api/golang/commons/data/data_page/)

```go
// get all items
result, _ = persistence.GetPageByFilter(correlationId, nil, cdata.NewPagingParams(0, nil, true))

page, _ = result.(*mypersistence.DummyPage)
fmt.Printf("Has %v items \n", *page.Total)
for _, v := range page.Data {
	fmt.Printf("%v , %v, %v \n", v.Id, v.Key, v.Content)
}

```
