---
type: docs
title: "CompositeFactory"
linkTitle: "CompositeFactory"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Aggregates multiple factories into a single factory component.
   
---

**Implements**: [IFactory](../ifactory)

### Description

The CompositeFactory class allows you to aggregate multiple factories into a single factory component.

Important points

- When a new component is requested, it iterates through factories to locate the one able to create the requested component.
- Usually used to keep all supported factories in a single place.

### Constructors
Creates a new instance of the factory.

> CompositeFactory(*factories: [IFactory](../ifactory))

- **factories**: [IFactory](../ifactory) - a list of factories to embed into this factory.


### Instance methods

#### add
Adds a factory into the list of embedded factories.

> add(factory: [IFactory](../ifactory))

- **factory**: [IFactory](../ifactory) - a factory to be added.


#### can_create
Checks if this factory is able to create component by given locator.

This method searches for all registered components and returns
a locator for component it is able to create that matches the given locator.
If the factory is not able to create a requested component is returns None.

> can_create(locator: Any): Any

- **locator**: Any - a locator to identify component to be created.
- **returns**: Any - a locator for a component that the factory is able to create.


#### create
Creates a component identified by given locator.

> create(locator: Any): Any

- **locator**: Any - a locator to identify component to be created.
- **returns**: Any - the created component.


#### remove
Removes a factory from the list of embedded factories.

>  remove(factory: [IFactory](../ifactory))

- **factory**: [IFactory](../ifactory) - the factory to remove.

### Examples

```python
factory = CompositeFactory()
factory.add(new DefaultLoggerFactory())
factory.add(new DefaultCountersFactory())

loggerLocator = Descriptor("*", "logger", "*", "*", "1.0")
factory.can_create(loggerLocator)  # Result: Descriptor("pip-service", "logger", "None", "default", "1.0")
factory.create(loggerLocator)      # Result: created NullLogger
```
