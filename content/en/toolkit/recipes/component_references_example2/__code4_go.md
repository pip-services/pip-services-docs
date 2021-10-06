
```go
import (
	"fmt"

	crefer "github.com/pip-services3-go/pip-services3-commons-go/refer"
	clog "github.com/pip-services3-go/pip-services3-components-go/log"
)

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

func (c *Worker1) Do(level int, message string) {
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

func (c *Worker2) Do(level int, message string) {
	fmt.Printf("Write to %v.%v message: %v", c._defaultName, level, message)
}

type SimpleController struct {
	_worker interface{}
}

func (c *SimpleController) SetReferences(references crefer.IReferences) {
	c._worker, _ = references.GetOneRequired(111)
}

func (c *SimpleController) UnsetReferences() {
	c._worker = nil
}

func (c *SimpleController) Greeting(name string) {

	c._worker.(Worker).Do(clog.Debug, "Hello, "+name+"!")
}
```
