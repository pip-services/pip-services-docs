
```go
sorting := cquery.NewSortParams([]cquery.SortField{
		cquery.NewSortField("key1", true),
		cquery.NewSortField("key2", false),
	})

values := client.GetMyObjects(context.Background(), filter, sorting)
```
