
```go
import (
	"context"
	"errors"

	cconfig "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
	crefer "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
	crun "github.com/pip-services4/pip-services4-go/pip-services4-components-go/run"
	clog "github.com/pip-services4/pip-services4-go/pip-services4-observability-go/log"
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
	_logger clog.ILogger

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
	component._logger.Info(context.Background(), "MyComponentB has been created.")

	return component
}

func (c *MyComponentB) Configure(ctx context.Context, config *cconfig.ConfigParams) {
	c._param1 = config.GetAsStringWithDefault("param1", c._param1)
	c._param2 = config.GetAsIntegerWithDefault("param2", c._param2)

	c._logger.Info(ctx, "MyComponentB has been configured.")
}

func (c *MyComponentB) SetReferences(ctx context.Context, references *crefer.References) {
	// pass
}

func (c *MyComponentB) isOpen() bool {
	// pass
	return true
}

func (c *MyComponentB) Open(ctx context.Context) {
	// pass
}

func (c *MyComponentB) Close(ctx context.Context) {
	// pass
}

func (c *MyComponentB) MyTask(ctx context.Context) {
	// pass
}

// Unsets (clears) previously set references to dependent components.
func (c *MyComponentB) UnsetReferences(ctx context.Context) {
	// pass
}

// Clears component state.
// - correlationId: (optional) transaction id to trace execution through call chain.
func (c *MyComponentB) Clear(ctx context.Context) {
	// pass
}

type MyComponentA struct {
	crefer.IReferences
	crefer.IUnreferenceable
	cconfig.IConfigurable
	crun.IOpenable
	crun.ICleanable

	_logger clog.ILogger

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
	component._logger.Info(context.Background(), "MyComponentA has been created.")

	return component
}

func (c *MyComponentA) Configure(ctx context.Context, config *cconfig.ConfigParams) {
	c._param1 = config.GetAsStringWithDefault("param1", c._param1)
	c._param2 = config.GetAsIntegerWithDefault("param2", c._param2)
	c._status = "Configured"

	c._logger.Info(ctx, "MyComponentB has been configured.")
}

func (c *MyComponentA) SetReferences(ctx context.Context, references *crefer.References) {
	_another_component, err := references.GetOneRequired(crefer.NewDescriptor("myservice", "mycomponent-b", "*", "*", "1.0"))

	if err != nil {
		panic("Error: Another Component is not in refs")
	}

	c._another_component = _another_component.(MyComponentB)
	c._status = "Configured"

	c._logger.Info(ctx, "MyComponentA's references have been defined.")
}

func (c *MyComponentA) isOpen() bool {
	return c._opened
}

func (c *MyComponentA) Open(ctx context.Context, correlationId string) {
	c._opened = true
	c._status = "Open"
	c._logger.Info(ctx, "MyComponentA has been opened.")
	// artificial problem
	c.MyTask(ctx)
}

func (c *MyComponentA) Close(ctx context.Context) {
	c._opened = false
	c._status = "Closed"
	c._logger.Info(ctx, "MyComponentA has been closed.")
}

func (c *MyComponentA) MyTask(ctx context.Context) {
	// create an artificial problem
	c._logger.Error(ctx, errors.New("Logging demo. Error created"), "Error created.")
}

// Unsets (clears) previously set references to dependent components.
func (c *MyComponentA) UnsetReferences(ctx context.Context) {
	c._another_component = nil
	c._status = "Un-referenced"
	c._logger.Info(ctx, "References cleared")
}

// Clears component state.
// - correlationId: (optional) transaction id to trace execution through call chain.
func (c *MyComponentA) Clear(ctx context.Context) {
	c.dummy_variable = nil
	c._status = ""
	c._logger.Info(ctx, "Resources cleared")
}
```
