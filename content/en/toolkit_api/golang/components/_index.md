---
type: docs
title: "Components module"
no_list: true
weight: 40
gitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
description: > 
    Contains standard component definitions that can be used to build applications and services.
---


### Packages

The module contains the following packages:

* [**Auth**](auth) - authentication credential stores
* [**Build**](build) - basic factories for constructing objects
* [**Cache**](cache) - distributed cache
* [**Config**](config) - configuration readers and managers, whose main task is to deliver configuration parameters to the application from wherever they are being stored
* [**Connect**](connect) - connection discovery and configuration services
* [**Count**](count) - performance counters
* [**Info**](info) - context info implementations that manage the saving of process information and sending additional parameter sets
* [**Lock**](lock) - distributed lock components
* [**Log**](log) - basic logging components that provide console and composite logging, as well as an interface for developing custom loggers
* [**State**](state) - TODO: add description
* [**Trace**](trace) - TODO: add description
* [**Test**](test) - minimal set of test components to make testing easier
* [**Component**](component) - the root package


### Use

Get the package from the Github repository:
```bash
go get -u github.com/pip-services3-gox/pip-services3-components-gox@latest
```

Example how to use Logging and Performance counters. Here we are going to use CompositeLogger and CompositeCounters components. They will pass through calls to loggers and counters that are set in references.

```go
import (
	"context"

	"github.com/pip-services3-gox/pip-services3-commons-gox/config"
	"github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	"github.com/pip-services3-gox/pip-services3-components-gox/count"
	"github.com/pip-services3-gox/pip-services3-components-gox/log"
)

type MyComponent struct {
	logger   *log.CompositeLogger
	counters *count.CompositeCounters
}

func (c *MyComponent) Configure(ctx context.Context, config *config.ConfigParams) {
	c.logger.Configure(ctx, config)
}

func (c *MyComponent) SetReferences(ctx context.Context, references refer.IReferences) {
	c.logger.SetReferences(ctx, references)
	c.counters.SetReferences(ctx, references)
}

func (c *MyComponent) MyMethod(ctx context.Context, correlationId string, param1 any) {
	c.logger.Trace(ctx, correlationId, "Executed method mycomponent.mymethod")
	c.counters.Increment(ctx, "mycomponent.mymethod.exec_count", 1)
	timing := c.counters.BeginTiming(ctx, "mycomponent.mymethod.exec_time")
	defer timing.EndTiming(ctx)
	// ....

	if err != nil {
		c.logger.Error(ctx, correlationId, err, "Failed to execute mycomponent.mymethod")
		c.counters.Increment(ctx, "mycomponent.mymethod.error_count", 1)
	}
}
```

Example how to get connection parameters and credentials using resolvers. The resolvers support "discovery_key" and "store_key" configuration parameters to retrieve configuration from discovery services and credential stores respectively.

```go
package main

import (
	"context"

	"github.com/pip-services3-gox/pip-services3-commons-gox/config"
	"github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	"github.com/pip-services3-gox/pip-services3-components-gox/auth"
	"github.com/pip-services3-gox/pip-services3-components-gox/connect"
)

func main() {
	// Using the component
	myComponent := NewMyComponent()

	myComponent.Configure(context.Background(), config.NewConfigParamsFromTuples(
		"connection.host", "localhost",
		"connection.port", 1234,
		"credential.username", "anonymous",
		"credential.password", "pass123",
	))

	err := myComponent.Open(context.Background(), "123")
}

type MyComponent struct {
	connectionResolver *connect.ConnectionResolver
	credentialResolver *auth.CredentialResolver
}

func NewMyComponent() *MyComponent {
	return &MyComponent{
		connectionResolver: connect.NewEmptyConnectionResolver(),
		credentialResolver: auth.NewEmptyCredentialResolver(),
	}
}

func (c *MyComponent) Configure(ctx context.Context, config *config.ConfigParams) {
	c.connectionResolver.Configure(ctx, config)
	c.credentialResolver.Configure(ctx, config)
}

func (c *MyComponent) SetReferences(ctx context.Context, references refer.IReferences) {
	c.connectionResolver.SetReferences(ctx, references)
	c.credentialResolver.SetReferences(ctx, references)
}

// ...

func (c *MyComponent) IsOpen() bool {
	panic("not implemented") // TODO: Implement
}

func (c *MyComponent) Open(ctx context.Context, correlationId string) error {
	connection, err := c.connectionResolver.Resolve(correlationId)
	credential, err := c.credentialResolver.Lookup(ctx, correlationId)

	host := connection.Host()
	port := connection.Port()
	user := credential.Username()
	pass := credential.Password()
}

func (c *MyComponent) Close(ctx context.Context, correlationId string) error {
	panic("not implemented") // TODO: Implement
}

```

Example how to use caching and locking. Here we assume that references are passed externally.

```go
package main

import (
	"context"

	"github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	"github.com/pip-services3-gox/pip-services3-components-gox/cache"
	"github.com/pip-services3-gox/pip-services3-components-gox/lock"
)

func main() {
	// Use the component
	myComponent := NewMyComponent()

	myComponent.SetReferences(context.Background(), refer.NewReferencesFromTuples(context.Background(),
		refer.NewDescriptor("pip-services", "cache", "memory", "default", "1.0"), cache.NewMemoryCache[any](),
		refer.NewDescriptor("pip-services", "lock", "memory", "default", "1.0"), lock.NewMemoryLock(),
	))

	result, err := myComponent.MyMethod(context.Background(), "123", "my_param")
}

type MyComponent struct {
	cache cache.ICache[any]
	lock  lock.ILock
}

func NewMyComponent() *MyComponent {
	return &MyComponent{}
}

func (c *MyComponent) SetReferences(ctx context.Context, references refer.IReferences) {
	res, errDescr := references.GetOneRequired(refer.NewDescriptor("*", "cache", "*", "*", "1.0"))
	if errDescr != nil {
		panic(errDescr)
	}
	c.cache = res.(cache.ICache[any])

	res, errDescr = references.GetOneRequired(refer.NewDescriptor("*", "lock", "*", "*", "1.0"))
	if errDescr != nil {
		panic(errDescr)
	}
	c.lock = res.(lock.ILock)
}

func (c *MyComponent) MyMethod(ctx context.Context, correlationId string, param1 any) (any, error) {
	// First check cache for result
	result, err := c.cache.Retrieve(ctx, correlationId, "mykey")
	if result != nil || err != nil {
		return result, err
	}

	// Lock..
	err = c.lock.AcquireLock(ctx, correlationId, "mykey", 1000, 1000)
	if err != nil {
		return result, err
	}

	// Do processing
	// ...

	// Store result to cache async
	_, err = c.cache.Store(ctx, correlationId, "mykey", result, 3600000)
	if err != nil {
		return result, err
	}

	// Release lock async
	err = c.lock.ReleaseLock(ctx, correlationId, "mykey")
	if err != nil {
		return result, err
	}
	return result, nil
}

```

If you need to create components using their locators (descriptors) implement component factories similar to the example below.

```go
package main

import (
	"github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	"github.com/pip-services3-gox/pip-services3-components-gox/build"
)

var MyComponentDescriptor = refer.NewDescriptor("myservice", "mycomponent", "default", "*", "1.0")

func NewMyFactory() *build.Factory {
	factory := build.NewFactory()

	factory.RegisterType(MyComponentDescriptor, NewMyComponent)

	return factory
}

func main() {
	// Using the factory
	myFactory := NewMyFactory()
	myComponent1, err = myFactory.Create(refer.NewDescriptor("myservice", "mycomponent", "default", "myComponent1", "1.0"))
	myComponent2, err := myFactory.Create(refer.NewDescriptor("myservice", "mycomponent", "default", "myComponent2", "1.0"))
}

```