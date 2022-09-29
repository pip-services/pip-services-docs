
```python
package main

import (
	"fmt"

	refer "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	build "github.com/pip-services3-gox/pip-services3-components-gox/build"
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
