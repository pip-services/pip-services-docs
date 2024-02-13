---
type: docs
title: "CompositeFactory"
linkTitle: "CompositeFactory"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: >
    Aggregates multiple factories into a single factory component.
   
---

### Description

The CompositeFactory class allows you to aggregate multiple factories into a single factory component.

Important points

- When a new component is requested, it iterates through factories to locate the one able to create the requested component.
- Usually used to keep all supported factories in a single place.

### Constructors

#### NewCompositeFactoryFromFactories
Creates a new instance of the factory.

> NewCompositeFactoryFromFactories(factories ...[IFactory](../ifactory)) [*CompositeFactory]()

- **factories**: ...[IFactory](../ifactory) - list of factories to embed into this factory.

#### NewCompositeFactory

> NewCompositeFactory() [*CompositeFactory]()


### Methods

#### Add
Adds a factory into the list of embedded factories.

> (c [*CompositeFactory]()) Add(factory [IFactory](../ifactory))

- **factory**: [IFactory](../ifactory) - factory to be added.


#### CanCreate
Checks if this factory is able to create a component by a given locator.

This method searches for all registered components and returns
a locator for component it is able to create that matches the given locator.
If the factory is not able to create a requested component it returns nil.

> (c [*CompositeFactory]()) CanCreate(locator any) any

- **locator**: any - a locator to identify component to be created.
- **returns**: any - a locator for a component that the factory is able to create.


#### Create
Creates a component identified by given locator.

> (c [*CompositeFactory]()) Create(locator any) (any, error)

- **locator**: any - locator to identify component to be created.
- **returns**: (any, error) - created component.


#### Remove
Removes a factory from the list of embedded factories.

> (c [*CompositeFactory]()) Remove(factory [IFactory](../ifactory))

- **factory**: [IFactory](../ifactory) - factory to remove.

### Examples

```go
factory := NewCompositeFactory();
factory.Add(NewDefaultLoggerFactory());
factory.Add(NewDefaultCountersFactory());

loggerLocator := NewDescriptor("*", "logger", "*", "*", "1.0")
factory.CanCreate(context.Background(), loggerLocator) // Result: Descriptor("pip-service", "logger", "null", "default", "1.0")
factory.Create(context.Background(), loggerLocator)    // Result: created NullLogger
```

