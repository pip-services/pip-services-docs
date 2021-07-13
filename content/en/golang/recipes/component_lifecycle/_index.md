---
type: docs
no_list: true
title: "Component Lifecycle!"
linkTitle: "Component Lifecycle!"
weight: 30
---

**TODO: need rewrite on Golang**

- by Alex Mazur

### Component lifecycle

A microservice is a set of loosely coupled components, each of which serves a specific purpose, such as logging events, reading records from a database, or connecting to a 3rd party service.
One of the roles of the microservice’s container is to correctly initialize all internal components, each of which can have its own lifecycle. For example, loading its own configuration, running certain functional processes, and even waiting for results from other components. The order in which component lifecycle management methods are called is as follows:

![ConsoleScreen1](/images/tutorials/component_lifecycle/component_lifecycle_scheme.png)

1. Configuration of the component is performed (configure)
2. Components are linked (setReference)
3. Connections are opened and active processes are started (open)
4. Business processes are called or event notifications are sent (execute, notify)
5. Active processes are stopped and connections are closed (close)
6. The links between components are destroyed (unsetReferences)
7. The component is destroyed

A flexible and, at the same time, standardized approach was developed in the Pip.Services Toolkit for initializing components. This approach preserves the conceptual integrity of the whole microservice, while keeping the source code clean, coherent, and testable. A component’s lifecycle is determined by which of the following interfaces it implements:

- IConfigurable – component configuration [Config](../../commons/config).
- IReferenceable and IUnreferenceable – setting and destroying references to other components [Reference](../../commons/refer/reference).
- IOpenable and IClosable – starting and stopping internal functional processes [IOpenable](../../commons/run/iopenable).
- IExecutable – execution of functional processes [Executable](../../commons/run/iexecutable).
- INotifiable - sending event notifications [Notifiable](../../commons/run/inotifiable).

```go

type IConfigurable interface {
	Configure(config *ConfigParams)
}

type IReferenceable interface {
	SetReferences(references IReferences)
}

type IOpenable interface {
	IClosable

	IsOpen() bool

	Open(correlationId string) error
}


type IClosable interface {
	Close(correlationId string) error
}


type IExecutable interface {
	Execute(correlationId string, args *Parameters) (result interface{}, err error)
}

```

### Implementation

Microservice developers are free to implement just the interfaces needed by their components. When the container is started, all implemented methods will be called in the previously mentioned order. 
For example: 

```go
TODO: add CounterController
    
```
### Utilities
The Pip.Service’s Toolkit also includes a few utilities that can be used during microservice development:
- Opener – initiates the functional processes of selected components.
- Closer – stops the functional processes of selected components.
- Executor – runs the functional processes of selected components.
- Notifier - sends event notifications for selected components.
- Cleaner – cleans the current state of selected components.


For example:

```go
TODO: add example
```
