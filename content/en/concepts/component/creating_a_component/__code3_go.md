
```go
import (
	"fmt"

	config "github.com/pip-services3-gox/pip-services3-commons-gox/config"
	refer "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
)

type MyComponentB struct {
	param1 string
	param2 int
	open   bool

	status string
}

type MyComponentA struct {
	config.IConfigurable
	refer.IReferenceable

	param1 string
	param2 int
	open   bool

	anotherComponent interface{}

	status string
}

// Creates a new instance of the component.
func NewMyComponentB() *MyComponentB {
	fmt.Println("MyComponentB has been created.")

	return &MyComponentB{
		param1: "ABC2",
		param2: 456,
		open:   false,
		status: "Created",
	}
}

// Creates a new instance of the component.
func NewMyComponentA() *MyComponentA {
	fmt.Println("MyComponentA has been created.")

	return &MyComponentA{
		param1: "ABC",
		param2: 123,
		open:   false,
		status: "Created",
	}
}

func (c *MyComponentA) Configure(ctx context.Context, config *config.ConfigParams) {
	c.param1 = config.GetAsStringWithDefault("param1", "ABC")
	c.param2 = config.GetAsIntegerWithDefault("param2", 123)
	c.status = "Configured"
	fmt.Println("MyComponentA has been configured.")
}

func (c *MyComponentA) SetReferences(ctx context.Context, references refer.IReferences) {
	component, err := references.GetOneRequired(
		refer.NewDescriptor("myservice", "mycomponent-b", "*", "*", "1.0"),
	)
	if err == nil {
		c.anotherComponent = component.(*MyComponentB)
		c.status = "Configured"
		fmt.Println("MyComponentA's references have been defined.")
	}

}
```

