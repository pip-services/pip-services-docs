---
type: docs
title: "CompositeFactory"
linkTitle: "CompositeFactory"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Aggregates multiple factories into a single factory component.
   
---

**Inherits**: [IFactory](../ifactory)

### Description

The CompositeFactory class allows you to aggregate multiple factories into a single factory component.

**Important points**

- When a new component is requested, it iterates through factories to locate the one able to create the requested component.
- Usually used to keep all supported factories in a single place.

### Constructors
Creates a new instance of the factory.

> `public` CompositeFactory(params [IFactory](../ifactory)[] factories)

- **factories**: [IFactory](../ifactory)[] - list of factories to embed into this factory.


Creates a new instance of the factory.

> `public` CompositeFactory()


### Instance methods

#### Add
Adds a factory into the list of embedded factories.

> `public` void Add([IFactory](../ifactory) factory)

- **factory**: [IFactory](../ifactory) - factory to be added.


#### CanCreate
Checks if this factory is able to create component by a given locator.

This method searches for all registered components and returns
a locator for a component it is able to create that matches the given locator.
If the factory is not able to create a requested component, it returns null.

> `public` object CanCreate(object locator)

- **locator**: object - locator to identify component to be created.
- **returns**: object - locator for a component that the factory is able to create.


#### Create
Creates a component identified by a given locator.

> `public` object Create(object locator)

- **locator**: object - locator to identify component to be created.
- **returns**: object - created component.


#### Remove
Removes a factory from the list of embedded factories.

> `public` void Remove([IFactory](../ifactory) factory)

- **factory**: [IFactory](../ifactory) - factory to remove.

### Examples

```cs
var factory = new CompositeFactory();
factory.Add(new DefaultLoggerFactory());
factory.Add(new DefaultCountersFactory());

var loggerLocator = new Descriptor("*", "logger", "*", "*", "1.0");
factory.CanCreate(loggerLocator);       // Result: Descriptor("pip-service", "logger", "null", "default", "1.0")
factory.Create(loggerLocator);          // Result: created NullLogger
```
