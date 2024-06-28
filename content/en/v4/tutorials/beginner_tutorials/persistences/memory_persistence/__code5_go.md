
```go
// all items

items := persistence.Items
for _, v := range items {
	fmt.Printf("%v, %v, %v \n", v.Id, v.Key, v.Content)
}
```
