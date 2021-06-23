---
type: docs
title: "Factory"
linkTitle: "Factory"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Basic component factory that creates components using registered types and factory functions.
---

### Description

The Factory class allows you to create components using registered types and factory functions.

### Constructors

#### NewFactory
Creates new factory.

> NewFactory() [*Factory]()

### Methods

#### CanCreate
Checks if this factory is able to create component by a given locator.

This method searches for all registered components and returns
a locator for the component it is able to create that matches the given locator.
If the factory is not able to create the requested component it returns nil.

> (c [*Factory]()) CanCreate(locator interface{}) interface{}

- **locator**: interface{} - locator used to identify the component to be created.
- **returns**: interface{} - locator for a component that the factory is able to create.


#### Create
Creates a component identified by given a locator.

> (c [*Factory]()) Create(locator interface{}) (interface{}, error)

- **locator**: interface{} - locator used to identify the component to be created.
- **returns**: (interface{}, error) - created component.


#### Register
Registers a component using a factory method.

> (c [*Factory]()) Register(locator interface{}, factory func() interface{})

- **locator**: interface{} - locator used to identify the component to be created.
- **factory**: func() interface{} - factory function that receives a locator and returns the created component.


#### RegisterType
Registers a component using its type (a constructor function).

> (c [*Factory]()) RegisterType(locator interface{}, factory interface{})

- **locator**: interface{} - locator used to identify a component to be created.
- **factory**: interface{} - component type.

### Examples

```go
factory := NewFactory();
factory.RegisterType(
    NewDescriptor("mygroup", "mycomponent1", "default", "*", "1.0"),
    MyComponent1
);
factory.Register(
    NewDescriptor("mygroup", "mycomponent2", "default", "*", "1.0"),
    (locator){
        return NewMyComponent2();
    }
);
  
factory.Create(NewDescriptor("mygroup", "mycomponent1", "default", "name1", "1.0"))
factory.Create(NewDescriptor("mygroup", "mycomponent2", "default", "name2", "1.0"))
```

### See also
- #### [Descriptor](../../../commons/refer/descriptor)
- #### [IFactory](../ifactory)
