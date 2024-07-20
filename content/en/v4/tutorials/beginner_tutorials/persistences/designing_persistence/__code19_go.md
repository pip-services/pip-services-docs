
```go
newValue := MyData{Id: "1", Key: "key 1", Content: "Updated content 1"}
res, err := persistence.Update(context.Background(), newValue)
```
