
```go
package persistence

type Dummy struct {
	Id      string `json:"id"`
	Key     string `json:"key"`
	Content string `json:"content"`
}


dummy1 := Dummy("1", "key 1", "content 1")
dummy2 := Dummy("id 1", "key 2", "content 2")
dummy3 := Dummy(nil, "key 3", "content 3")
```
