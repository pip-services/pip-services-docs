---
type: docs
title: "Factory"
linkTitle: "Factory"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Basic component factory that creates components using registered types and factory functions.
---

**Implements**: [IFactory](../ifactory)

### Description

The Factory class allows you to create components using registered types and factory functions.

### Instance methods

#### can_create
Checks if this factory is able to create component by given locator.

This method searches for all registered components and returns
a locator for component it is able to create that matches the given locator.
If the factory is not able to create a requested component is returns None.

>  can_create(locator: Any): Any

- **locator**: Any - a locator to identify component to be created.
- **returns**: Any - a locator for a component that the factory is able to create.


#### create
Creates a component identified by given locator.

> create(locator: Any): Any

- **locator**: Any - a locator to identify component to be created.
- **returns**: Any - the created component.


#### register
Registers a component using a factory method.

> register(locator: Any, factory: Any)

- **locator**: Any - a locator to identify component to be created.
- **factory**: Any - a factory function that receives a locator and returns a created component.


#### register_as_type
Registers a component using its type (a constructor function).

> register_as_type(locator: Any, object_factory: Any)

- **locator**: Any - a locator to identify component to be created.
- **object_factory**: Any - a component type.

### Examples

```python
factory = Factory()

factory.register_as_type(Descriptor("mygroup", "mycomponent1", "default", "*", "1.0"), MyComponent1)

factory.create(Descriptor("mygroup", "mycomponent1", "default", "name1", "1.0"))
```

### See also
- #### [Descriptor](../../../commons/refer/descriptor)
- #### [IFactory](../ifactory)
