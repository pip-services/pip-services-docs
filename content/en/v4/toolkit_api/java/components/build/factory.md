---
type: docs
title: "Factory"
linkTitle: "Factory"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-components-java"
description: >
    Basic component factory that creates components using registered types and factory functions.
---

**Implements**: [IFactory](../ifactory)

### Description

The Factory class allows you to create components using registered types and factory functions.

### Instance methods

#### canCreate
Checks if this factory is able to create component by a given locator.

This method searches for all registered components and returns
a locator for the component it is able to create that matches the given locator.
If the factory is not able to create the requested component is returns null.

> `public` Object canCreate(Object locator)

- **locator**: Object - a locator to identify component to be created.
- **returns**: Object - a locator for a component that the factory is able to create.


#### create
Creates a component identified by given a locator.

> `public` Object create(Object locator) throws CreateException

- **locator**: Object - a locator to identify component to be created.
- **returns**: Object - the created component.


#### register
Registers a component using a factory method.

> `public` void register(Object locator, IComponentFactory factory)

- **locator**: Object - a locator to identify component to be created.
- **factory**: IComponentFactory - a factory function that receives a locator and returns a created component.


#### registerAsType
Registers a component using its type (a constructor function).

> `public` void registerAsType(Object locator, Class<?> type)

- **locator**: Object - a locator to identify component to be created.
- **type**: Class<?> - a component type.

### Examples

```java
{
  Factory factory = new Factory();
  
  factory.registerAsType(
  		new Descriptor("mygroup", "mycomponent1", "default", "*", "1.0"),
  		MyComponent1.class
  );
  factory.register(
  		new Descriptor("mygroup", "mycomponent2", "default", "*", "1.0"),
  		(locator) -> {
  			return new MyComponent2();
  		}
  );
  
  factory.create(new Descriptor("mygroup", "mycomponent1", "default", "name1", "1.0"))
  factory.create(new Descriptor("mygroup", "mycomponent2", "default", "name2", "1.0"))
  }
```

### See also
- #### [Descriptor](../../../components/refer/descriptor)
- #### [IFactory](../ifactory)
