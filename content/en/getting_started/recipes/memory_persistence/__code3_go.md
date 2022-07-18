
```go
result, _ := persistence.Create(correlationId, dummy1)
item, _ := result.(mypersistence.Dummy)
fmt.Println("Created Dummy with ID: " + item.Id)

result, _ = persistence.Create(correlationId, dummy2)
item, _ = result.(mypersistence.Dummy)
fmt.Println("Created Dummy with ID: " + item.Id)

result, _ = persistence.Create(correlationId, dummy3)
item, _ = result.(mypersistence.Dummy)
fmt.Println("Created Dummy with ID: " + item.Id)
```
