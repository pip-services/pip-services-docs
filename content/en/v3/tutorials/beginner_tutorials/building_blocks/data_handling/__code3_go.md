
```go
sorting:= cdata.NewSortingParams([]cdata.SortField{
	  NewSortField("key1", true),
	  NewSortField("key2", false),
})
  
values := client.GetMyObjects(context.Background(), filter, sorting)

```
