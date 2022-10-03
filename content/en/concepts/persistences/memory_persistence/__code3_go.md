
```go
item, _ := persistence.Create(context.Background(), correlationId, dummy1)
fmt.Println("Created Dummy with ID: " + item.Id)

item, _ = persistence.Create(context.Background(), correlationId, dummy2)
fmt.Println("Created Dummy with ID: " + item.Id)

item, _ = persistence.Create(context.Background(), correlationId, dummy3)
fmt.Println("Created Dummy with ID: " + item.Id)
```
