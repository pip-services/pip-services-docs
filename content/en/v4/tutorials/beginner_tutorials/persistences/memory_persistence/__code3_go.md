
```go
item, _ := persistence.Create(context.Background(), dummy1)
fmt.Println("Created Dummy with ID: " + item.Id)

item, _ = persistence.Create(context.Background(), dummy2)
fmt.Println("Created Dummy with ID: " + item.Id)

item, _ = persistence.Create(context.Background(), dummy3)
fmt.Println("Created Dummy with ID: " + item.Id)
```
