---
type: docs
title: "Commons module"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
no_list: true
weight: 30
description: > 
 
    Provides a set of tools used in microservices or backend services, and it is designed to facilitate
    symmetric implementation accross different programming languages.

---


### Packages

The module contains the following packages:

* [**Commands**](commands) - commands and events 
* [**Config**](config) - component configuration
* [**Convert**](convert) - portable value converters
* [**Data**](data) - data patterns
* [**Errors**](errors) - application errors
* [**Random**](random) - random data generators
* [**Refer**](refer) - component dependencies (Based on the inversion of control (IoC) pattern)
* [**Reflect**](reflect) - portable reflection utilities
* [**Run**](run) - component life-cycle management
* [**Validate**](validate) - validation rules



### Use

Get the package from the Github repository:
```bash
go get -u github.com/pip-services3-gox/pip-services3-commons-gox@latest
```
Then you are ready to start using the Pip.Services patterns to augment your backend code.

For instance, here is how you can implement a component, that receives configuration, get assigned references,
can be opened and closed using the patterns from this module.

```go

import (
	"context"
	"fmt"

	"github.com/pip-services3-gox/pip-services3-commons-gox/config"
	"github.com/pip-services3-gox/pip-services3-commons-gox/refer"
)

type MyComponentA struct {
	param1           string
	param2           int
	anotherComponent MyComponentB
	opened           bool
}

func NewMyComponentA() *MyComponentA {
	return &MyComponentA{
		param1: "ABC",
		param2: 123,
		opened: false,
	}
}

type MyComponentB struct{
    // ...
}

func (c *MyComponentA) Configure(ctx context.Context, config *config.ConfigParams) {
	c.param1 = config.GetAsStringWithDefault("param1", c.param1)
	c.param2 = config.GetAsIntegerWithDefault("param2", c.param2)
}

func (c *MyComponentA) SetReferences(ctx context.Context, references refer.IReferences) {
	res, err := references.GetOneRequired(refer.NewDescriptor("myservice", "mycomponent-b", "*", "*", "1.0"))
	if err != nil {
		panic(err)
	}

	c.anotherComponent = res.(MyComponentB)
}

func (c *MyComponentA) IsOpen() bool {
	return c.opened
}

func (c *MyComponentA) Open(ctx context.Context, correlationId string) error {
	c.opened = true
	fmt.Println("MyComponentA has been opened.")
	return nil
}

func (c *MyComponentA) Close(ctx context.Context, correlationId string) error {
	c.opened = false
	fmt.Println("MyComponentA has been closed.")
	return nil
}

```

Then here is how the component can be used in the code

```go
package main

import (
	"context"
	"fmt"

	"github.com/pip-services3-gox/pip-services3-commons-gox/config"
	"github.com/pip-services3-gox/pip-services3-commons-gox/refer"
)

func main() {
	myComponentA := NewMyComponentA()

	// Configure the component
	myComponentA.Configure(context.Background(), config.NewConfigParamsFromTuples(
		"param1", "XYZ",
		"param2", 987,
	))

	// Set references to the component
	myComponentA.SetReferences(context.Background(),
		refer.NewReferencesFromTuples(context.Background(),
			refer.NewDescriptor("myservice", "mycomponent-b", "default", "default", "1.0"), &MyComponentB{},
		),
	)

	// Open the component
	err := myComponentA.Open(context.Background(), "123")

	if err != nil {
		panic(err)
	} else {
		fmt.Println("MyComponentA has been opened.")
	}
}
```
