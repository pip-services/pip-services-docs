
```go

import (
	"fmt"
)

type MyComponent1 struct {
	_status string
}

func NewMyComponent1() *MyComponent1 {
	c := &MyComponent1{}
	c._status = "Created"
	fmt.Println("MyComponent1 has been created.")
	return c
}

func MyTask() {
	fmt.Println("task executed")
}
```
