---
type: docs
title: "Factory"
linkTitle: "Factory"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Basic component factory that creates components using registered types and factory functions.
---

**Inherits**: [IFactory](../ifactory)

### Description

The Factory class allows you to create components using registered types and factory functions.

### Instance methods

#### CanCreate
Checks if this factory is able to create component by a given locator.

This method searches for all registered components and returns
a locator for the component it is able to create that matches the given locator.
If the factory is not able to create the requested component is returns null.

> `public` object CanCreate(object locator)

- **locator**: object - a locator to identify component to be created.
- **returns**: object - a locator for a component that the factory is able to create.


#### Create
Creates a component identified by given a locator.

> `public` object Create(object locator)

- **locator**: object - a locator to identify component to be created.
- **returns**: object - the created component.


#### Register
Registers a component using a factory method.

> `public` void Register(object locator, Func\<object, object\> factory)

- **locator**: object - a locator to identify component to be created.
- **factory**: Func\<object, object\> - a factory function that receives a locator and returns a created component.


#### RegisterAsType
Registers a component using its type (a constructor function).

> `public` void RegisterAsType(object locator, Type type)

- **locator**: object - a locator to identify component to be created.
- **type**: Type - a component type.

### Examples

```cs
Factory factory = new Factory();

factory.RegisterAsType(
    new Descriptor("mygroup", "mycomponent1", "default", "*", "1.0"),
    MyComponent1 
);

factory.Register(
    new Descriptor("mygroup", "mycomponent2", "default", "*", "1.0"),
    (locator) => {return new MyComponent2();
});

factory.Create(new Descriptor("mygroup", "mycomponent1", "default", "name1", "1.0"))
factory.Create(new Descriptor("mygroup", "mycomponent2", "default", "name2", "1.0"))
```

### See also
- #### [Descriptor](../../../commons/refer/descriptor)
- #### [IFactory](../ifactory)
