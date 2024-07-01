
```go
import (
	"context"
	"fmt"

	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	cref "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
)

type ComponentB struct {
	_param1 string
	_param2 int
	_opened bool
	_status string
}

func NewComponentB() *ComponentB {
	c := &ComponentB{}
	c._param1 = "ABC2"
	c._param2 = 456
	c._opened = false
	c._status = "Created"
	fmt.Println("ComponentB has been created.")
	return c
}

func (c *ComponentB) Configure(ctx context.Context, config *cconf.ConfigParams) {
	c._param1 = config.GetAsStringWithDefault("param1", c._param1)
	c._param2 = config.GetAsIntegerWithDefault("param2", c._param2)
	fmt.Println("ComponentB has been configured.")
}

func (c *ComponentB) SetReferences(ctx context.Context, references cref.IReferences) {

}

func (c *ComponentB) IsOpen() bool {
	return c._opened
}

func (c *ComponentB) Open(ctx context.Context, correlationId string) (err error) {
	return nil
}

func (c *ComponentB) Close(ctx context.Context, correlationId string) (err error) {
	return nil
}

// Unsets (clears) previously set references to dependent components.
func (c *ComponentB) UnsetReferences() {

}

type ComponentA1 struct {
	_param1            string
	_param2            int
	_another_component *ComponentB
	_opened            bool
	_status            string
	dummy_variable     string
}

// Creates a new instance of the component.
func NewComponentA1() *ComponentA1 {
	c := &ComponentA1{}
	c._param1 = "ABC2"
	c._param2 = 456
	c._opened = false
	c._status = "Created"
	fmt.Println("ComponentA1 has been created.")
	return c
}

func (c *ComponentA1) Configure(ctx context.Context, config *cconf.ConfigParams) {
	c._param1 = config.GetAsStringWithDefault("param1", "ABC")
	c._param2 = config.GetAsIntegerWithDefault("param2", 123)
	c._status = "Configured"
	fmt.Println("ComponentA1 has been configured.")
}

func (c *ComponentA1) SetReferences(ctx context.Context, references cref.IReferences) {
	res, descrErr := references.GetOneRequired(
		cref.NewDescriptor("myservice", "component-b", "*", "*", "1.0"),
	)
	if descrErr != nil {
		panic(descrErr)
	}
	c._another_component = res.(*ComponentB)
	c._status = "Configured"
	fmt.Println("ComponentA1's references have been defined.")
}

func (c *ComponentA1) IsOpen() bool {
	return c._opened
}

func (c *ComponentA1) Open(ctx context.Context, correlationId string) (err error) {
	c._opened = true
	c._status = "Open"
	fmt.Println("ComponentA1 has been opened.")
	return nil
}

func (c *ComponentA1) Close(ctx context.Context, correlationId string) (err error) {
	c._opened = false
	c._status = "Closed"
	fmt.Println("ComponentA1 has been closed.")
	return nil
}

func (c *ComponentA1) MyTask() {
	fmt.Println("Doing my business task")
	c.dummy_variable = "dummy value"
}

// Unsets (clears) previously set references to dependent components.
func (c *ComponentA1) UnsetReferences() {
	c._another_component = nil
	c._status = "Un-referenced"
	fmt.Println("References cleared")
}

type ComponentA2 struct {
	_param1            string
	_param2            int
	_another_component *ComponentB
	_opened            bool
	_status            string
	dummy_variable     string
}

// Creates a new instance of the component.
func NewComponentA2() *ComponentA2 {
	c := &ComponentA2{}
	c._param1 = "ABC"
	c._param2 = 123
	c._opened = false
	c._status = "Created"
	fmt.Println("ComponentA2 has been created.")
	return c
}

func (c *ComponentA2) Configure(ctx context.Context, config *cconf.ConfigParams) {
	c._param1 = config.GetAsStringWithDefault("param1", "ABC")
	c._param2 = config.GetAsIntegerWithDefault("param2", 123)
	c._status = "Configured"
	fmt.Println("ComponentA2 has been configured.")
}

func (c *ComponentA2) SetReferences(ctx context.Context, references cref.IReferences) {
	res, descrErr := references.GetOneRequired(
		cref.NewDescriptor("myservice", "component-b", "*", "*", "1.0"),
	)
	if descrErr != nil {
		panic(descrErr)
	}
	c._another_component = res.(*ComponentB)
	c._status = "Configured"
	fmt.Println("ComponentA2's references have been defined.")
}

func (c *ComponentA2) IsOpen() bool {
	return c._opened
}

func (c *ComponentA2) Open(ctx context.Context, correlationId string) (err error) {
	c._opened = true
	c._status = "Open"
	fmt.Println("ComponentA2 has been opened.")
	return nil
}

func (c *ComponentA2) Close(ctx context.Context, correlationId string) (err error) {
	c._opened = false
	c._status = "Closed"
	fmt.Println("ComponentA2 has been closed.")
	return nil
}

func (c *ComponentA2) MyTask() {
	fmt.Println("Doing my business task")
	c.dummy_variable = "dummy value"
}

// Unsets (clears) previously set references to dependent components.
func (c *ComponentA2) UnsetReferences() {
	c._another_component = nil
	c._status = "Un-referenced"
	fmt.Println("References cleared")
}
```
