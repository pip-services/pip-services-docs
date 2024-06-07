
```go
projection := cquery.NewProjectionParamsFromStrings([]string{"field1", "field2"})
page := client.GetMyObjects(context.Background(), filter, sorting, paging, projection)
```
