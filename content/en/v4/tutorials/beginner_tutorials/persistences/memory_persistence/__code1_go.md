
```go
package persistence

type Dummy struct {
	Id      string `json:"id"`
	Key     string `json:"key"`
	Content string `json:"content"`
}


dummy1 := Dummy{
	Id: "1",
	Key: "key 1",
	Content: "content 1",
}
dummy2 := Dummy{
	Id: "id 1",
	Key: "key 2",
	Content:  "content 2",
}
dummy3 := Dummy{
	Id: "",
	Key: "key 3",
	Content: "content 3",
}
```
