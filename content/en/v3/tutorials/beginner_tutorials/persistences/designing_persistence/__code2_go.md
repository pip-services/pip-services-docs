
```go
type MyData struct {
	Id      string `bson:"_id" json:"id"`
	Key     string `bson:"key" json:"key"`
	Content string `bson:"content" json:"content"`
}

func (d *MyData) SetId(id string) {
	d.Id = id
}

func (d MyData) GetId() string {
	return d.Id
}

func (d MyData) Clone() MyData {
	return MyData{
		Id:      d.Id,
		Key:     d.Key,
		Content: d.Content,
	}
}
```
