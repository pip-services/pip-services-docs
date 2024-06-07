
```go
func (c *HelloWorldService) Greeting(ctx context.Context, name string) (result string, err error) {
	if name == "" {
		name = c.defaultName
	}
	return "Hello, " + name + "!", nil
}
```

To demonstrate the dynamic configuration of a component, the recipient name will be specified by the parameter "default_name". To get the configuration, the component must implement the interface "IConfigurable" with the method "configure".

```go
func (c *HelloWorldService) Configure(ctx context.Context, config *cconf.ConfigParams) {
	c.defaultName = config.GetAsStringWithDefault("default_name", c.defaultName)
}
```

Parameters will be read by the microservice from the configuration file and passed to the "configure" method of the corresponding component. Here's an example of the configuration:

```yml
# Service
- descriptor: "hello-world:service:default:default:1.0"
  default_name: "World"
```

More details on this mechanism can be found in [Component Configuration](../../tutorials/beginner_tutorials/configuration/component_configuration/).

This is all the code of the controller in the file:

**/HelloWorldService.go**

```go
package quickstart

import (
	"context"

	cconf "github.com/pip-services4/pip-services4-go/pip-services4-components-go/config"
)

type HelloWorldService struct {
	defaultName string
}

func NewHelloWorldService() *HelloWorldService {
	c := HelloWorldService{}
	c.defaultName = "Pip User"
	return &c
}

func (c *HelloWorldService) Configure(ctx context.Context, config *cconf.ConfigParams) {
	c.defaultName = config.GetAsStringWithDefault("default_name", c.defaultName)
}

func (c *HelloWorldService) Greeting(ctx context.Context, name string) (result string, err error) {
	if name == "" {
		name = c.defaultName
	}
	return "Hello, " + name + "!", nil
}

```
