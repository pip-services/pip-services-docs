
```go
page, _ := persistence.GetPageByFilter(context.Background(), cquery.NewFilterParamsFromTuples("id", "id 1", "key", "key 2"), cquery.NewPagingParams(0, 1, true))

fmt.Printf("Has %v items \n", page.Total)
for _, v := range page.Data {
	fmt.Printf("%v, %v, %v \n", v.Id, v.Key, v.Content)
}
```
