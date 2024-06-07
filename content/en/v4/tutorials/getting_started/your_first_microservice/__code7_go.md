
```go
type HelloWorldControllerFactory struct {
	*cbuild.Factory
}
```

Next, in the factory's constructor, we'll be registering descriptors and their corresponding component types.

```go
func NewHelloWorldControllerFactory() *HelloWorldControllerFactory {
	c := HelloWorldControllerFactory{}
	c.Factory = cbuild.NewFactory()
	c.RegisterType(
		cref.NewDescriptor("hello-world", "service", "default", "*", "1.0"),
		NewHelloWorldService,
	)
	c.RegisterType(
		cref.NewDescriptor("hello-world", "controller", "http", "*", "1.0"),
		NewHelloWorldRestController,
	)
	return &c
}
```

For more info on how this works, be sure to check out [Process Container](../../tutorials/beginner_tutorials/containers/process_container).

Full listing of the factory's code found in the file:

**‍/HelloWorldControllerFactory.go**

```go
package quickstart

import (
	cbuild "github.com/pip-services4/pip-services4-go/pip-services4-components-go/build"
	cref "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
)

type HelloWorldControllerFactory struct {
	*cbuild.Factory
}

func NewHelloWorldControllerFactory() *HelloWorldControllerFactory {
	c := HelloWorldControllerFactory{}
	c.Factory = cbuild.NewFactory()
	c.RegisterType(
		cref.NewDescriptor("hello-world", "service", "default", "*", "1.0"),
		NewHelloWorldService,
	)
	c.RegisterType(
		cref.NewDescriptor("hello-world", "controller", "http", "*", "1.0"),
		NewHelloWorldRestController,
	)
	return &c
}

```

