
```go
func (c *HelloWorldController) Greeting(ctx context.Context, name string) (result string, err error) {
	if name == "" {
		name = c.defaultName
	}
	return "Hello, " + name + "!", nil
}
```

To demonstrate the dynamic configuration of a component, the recipient name will be specified by the parameter "default_name". To get the configuration, the component must implement the interface "IConfigurable" with the method "configure".

```go
func (c *HelloWorldController) Configure(ctx context.Context, config *cconf.ConfigParams) {
	c.defaultName = config.GetAsStringWithDefault("default_name", c.defaultName)
}
```

Parameters will be read by the microservice from the configuration file and passed to the "configure" method of the corresponding component. Here's an example of the configuration:

```yml
# Controller
- descriptor: "hello-world:controller:default:default:1.0"
  default_name: "World"
```

More details on this mechanism can be found in [Component Configuration](../../tutorials/beginner_tutorials/configuration/component_configuration/).

This is all the code of the controller in the file:

**/HelloWorldController.go**

```go
package quickstart

import (
	"context"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
)

type HelloWorldController struct {
	defaultName string
}

func NewHelloWorldController() *HelloWorldController {
	c := HelloWorldController{}
	c.defaultName = "Pip User"
	return &c
}

func (c *HelloWorldController) Configure(ctx context.Context, config *cconf.ConfigParams) {
	c.defaultName = config.GetAsStringWithDefault("default_name", c.defaultName)
}

func (c *HelloWorldController) Greeting(ctx context.Context, name string) (result string, err error) {
	if name == "" {
		name = c.defaultName
	}
	return "Hello, " + name + "!", nil
}

```
