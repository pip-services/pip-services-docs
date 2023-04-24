
```go
type MyData struct {
	Id      string `json:"id"`
	Key     string `json:"key"`
	Content string `json:"content"`
}

func NewMyData(id string, key string, content string) *MyData {
	return &MyData{
		Id:      id,
		Key:     key,
		Content: content,
	}
}
```
