
```go
import (
	"fmt"

	build "github.com/pip-services4/pip-services4-go/pip-services4-components-go/build"
	refer "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
)

type ComponentA struct{}

func NewComponentA() *ComponentA {
	defer fmt.Println("Created ComponentA")
	return &ComponentA{}
}

func main() {
	MyFactory1 := build.NewFactory()

	myComponentADescriptor := refer.NewDescriptor("mygroup", "class", "classA", "classA", "1.0")

	MyFactory1.RegisterType(myComponentADescriptor, NewComponentA)

	MyFactory1.Create(myComponentADescriptor)
}
```
