
```go
// update patially
updateMap := cdata.NewAnyValueMap(map[string]interface{}{"content": "new new content 2"})
result, _ = persistence.UpdatePartially(correlationId, "id 1", updateMap)

item, _ = result.(mypersistence.Dummy)
fmt.Printf("%v , %v, %v \n", item.Id, item.Key, item.Content)
```
