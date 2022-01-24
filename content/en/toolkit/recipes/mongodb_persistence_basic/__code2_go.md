
```go
type MyData struct {
	Id      string `bson:"_id" json:"id"`
	Key     string `bson:"key" json:"key"`
	Content string `bson:"content" json:"content"`
}

type MyDataPage struct {
	Total *int64   `bson:"total" json:"total"`
	Data  []MyData `bson:"data" json:"data"`
}

func NewEmptyMyDataPage() *MyDataPage {
	return &MyDataPage{}
}

func NewMyDataPage(total *int64, data []MyData) *MyDataPage {
	return &MyDataPage{Total: total, Data: data}
}

```
