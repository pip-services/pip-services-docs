
```go

import (
	"errors"

	cconfig "github.com/pip-services3-go/pip-services3-commons-go/config"
	crefer "github.com/pip-services3-go/pip-services3-commons-go/refer"
	crun "github.com/pip-services3-go/pip-services3-commons-go/run"
	clog "github.com/pip-services3-go/pip-services3-components-go/log"
)

type MyComponentB struct {
	crefer.IReferences
	crefer.IUnreferenceable
	cconfig.IConfigurable
	crun.IOpenable
	crun.ICleanable

	_status string
	_param1 string
	_param2 int
	_opened bool

	dummy_variable interface{}
}

// Creates a new instance of the component.
func NewMyComponentB() *MyComponentB {
	component := &MyComponentB{
		_status: "Created",
		_param1: "ABC2",
		_param2: 456,
		_opened: false,
		_logger: clog.NewConsoleLogger(),

		dummy_variable: "resource variable",
	}

	component._logger.SetLevel(5)
	component._logger.Info("123", "MyComponentB has been created.")

	return component
}

func (c *MyComponentB) Configure(config *cconfig.ConfigParams) {
	c._param1 = config.GetAsStringWithDefault("param1", c._param1)
	c._param2 = config.GetAsIntegerWithDefault("param2", c._param2)

	c._logger.Info("123", "MyComponentB has been configured.")
}

func (c *MyComponentB) SetReferences(references *crefer.References) {
	// pass
}

func (c *MyComponentB) isOpen() bool {
	// pass
	return true
}

func (c *MyComponentB) Open(correlationId string) {
	// pass
}

func (c *MyComponentB) Close(correlationId string) {
	// pass
}

func (c *MyComponentB) MyTask(correlationId string) {
	// pass
}

// Unsets (clears) previously set references to dependent components.
func (c *MyComponentB) UnsetReferences() {
	// pass
}

// Clears component state.
// - correlationId: (optional) transaction id to trace execution through call chain.
func (c *MyComponentB) Clear(correlationId string) {
	// pass
}

type MyComponentA struct {
	crefer.IReferences
	crefer.IUnreferenceable
	cconfig.IConfigurable
	crun.IOpenable
	crun.ICleanable

	_logger *clog.ConsoleLogger

	_status string
	_param1 string
	_param2 int
	_opened bool

	dummy_variable interface{}

	_another_component interface{}
}

// Creates a new instance of the component.
func NewMyComponentA() *MyComponentA {
	component := &MyComponentA{
		_status: "Created",
		_param1: "ABC2",
		_param2: 456,
		_opened: false,
		_logger: clog.NewConsoleLogger(),

		dummy_variable: "dummy_variable setted",
	}

	component._logger.SetLevel(5)
	component._logger.Info(correlationId, "MyComponentA has been created.")

	return component
}

func (c *MyComponentA) Configure(config *cconfig.ConfigParams) {
	c._param1 = config.GetAsStringWithDefault("param1", c._param1)
	c._param2 = config.GetAsIntegerWithDefault("param2", c._param2)
	c._status = "Configured"

	c._logger.Info("123", "MyComponentB has been configured.")
}

func (c *MyComponentA) SetReferences(references *crefer.References) {
	_another_component, err := references.GetOneRequired(crefer.NewDescriptor("myservice", "mycomponent-b", "*", "*", "1.0"))

	if err != nil {
		panic("Error: Another Component is not in refs")
	}

	c._another_component = _another_component.(MyComponentB)
	c._status = "Configured"

	c._logger.Info("123", "MyComponentA's references have been defined.")
}

func (c *MyComponentA) isOpen() bool {
	return c._opened
}

func (c *MyComponentA) Open(correlationId string) {
	c._opened = true
	c._status = "Open"
	c._logger.Info(correlationId, "MyComponentA has been opened.")
	// artificial problem
	c.MyTask(correlationId)
}

func (c *MyComponentA) Close(correlationId string) {
	c._opened = false
	c._status = "Closed"
	c._logger.Info(correlationId, "MyComponentA has been closed.")
}

func (c *MyComponentA) MyTask(correlationId string) {
	// create an artificial problem
	c._logger.Error(correlationId, errors.New("Logging demo. Error created"), "Error created.")
}

// Unsets (clears) previously set references to dependent components.
func (c *MyComponentA) UnsetReferences() {
	c._another_component = nil
	c._status = "Un-referenced"
	c._logger.Info("123", "References cleared")
}

// Clears component state.
// - correlationId: (optional) transaction id to trace execution through call chain.
func (c *MyComponentA) Clear(correlationId string) {
	c.dummy_variable = nil
	c._status = ""
	c._logger.Info(correlationId, "Resources cleared")
}

```