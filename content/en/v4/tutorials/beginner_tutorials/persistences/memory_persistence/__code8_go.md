
```go
// update patially
updateMap := cdata.NewAnyValueMap(map[string]interface{}{"content": "new new content 2"})
item, _ := persistence.UpdatePartially(context.Background(), "id 1", updateMap)

fmt.Printf("%v , %v, %v \n", item.Id, item.Key, item.Content)

```
