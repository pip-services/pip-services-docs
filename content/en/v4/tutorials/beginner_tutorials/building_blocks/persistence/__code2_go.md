
```go
type MyIdentifiableObject struct {
	Id    string `bson:"id" json:"id"`
	Name  string `bson:"name" json:"name"`
	Value string `bson:"value" json:"value"`
}

func (c *MyIdentifiableObject) GetId() string {
	return c.Id
}
```
