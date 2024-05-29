
```go
type HelloWorldServiceFactory struct {
	*cbuild.Factory
}
```

Next, in the factory's constructor, we'll be registering descriptors and their corresponding component types.

```go
func NewHelloWorldServiceFactory() *HelloWorldServiceFactory {
	c := HelloWorldServiceFactory{}
	c.Factory = cbuild.NewFactory()
	c.RegisterType(
		cref.NewDescriptor("hello-world", "controller", "default", "*", "1.0"),
		NewHelloWorldController,
	)
	c.RegisterType(
		cref.NewDescriptor("hello-world", "service", "http", "*", "1.0"),
		NewHelloWorldRestService,
	)
	return &c
}
```

For more info on how this works, be sure to check out [Process Container](../../tutorials/beginner_tutorials/containers/process_container).

Full listing of the factory's code found in the file:

**‍/HelloWorldServiceFactory.go**

```go
package quickstart

import (
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	cbuild "github.com/pip-services3-gox/pip-services3-components-gox/build"
)

type HelloWorldServiceFactory struct {
	*cbuild.Factory
}

func NewHelloWorldServiceFactory() *HelloWorldServiceFactory {
	c := HelloWorldServiceFactory{}
	c.Factory = cbuild.NewFactory()
	c.RegisterType(
		cref.NewDescriptor("hello-world", "controller", "default", "*", "1.0"),
		NewHelloWorldController,
	)
	c.RegisterType(
		cref.NewDescriptor("hello-world", "service", "http", "*", "1.0"),
		NewHelloWorldRestService,
	)
	return &c
}

```

