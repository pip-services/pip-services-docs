
```go
import "fmt"

type Worker interface {
	Do(level int, message string)
}

type Worker1 struct {
	_defaultName string
}

func NewWorker1(name string) *Worker1 {
	if name != "" {
		return &Worker1{_defaultName: "default name1"}
	}
	return &Worker1{_defaultName: "default name1"}

}

func (c *Worker1) Do(level string, message string) {
	fmt.Printf("Write to %v.%v message: %v", c._defaultName, level, message)
}

type Worker2 struct {
	_defaultName string
}

func NewWorker2(name string) *Worker2 {
	if name != "" {
		return &Worker2{_defaultName: "default name2"}
	}
	return &Worker2{_defaultName: "default name2"}

}

func (c *Worker2) Do(level string, message string) {
	fmt.Printf("Write to %v.%v message: %v", c._defaultName, level, message)
}
```
