---
type: docs
title: "Factory"
linkTitle: "Factory"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
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
If the factory is not able to create the requested component is returns None.

>  canCreate(locator: any): any

- **locator**: any - a locator to identify component to be created.
- **returns**: any - a locator for a component that the factory is able to create.


#### create
Creates a component identified by given a locator.

> create(locator: any): any

- **locator**: any - a locator to identify component to be created.
- **returns**: any - the created component.


#### register
Registers a component using a factory method.

> register(locator: any, factory: any)

- **locator**: any - a locator to identify component to be created.
- **factory**: any - a factory function that receives a locator and returns a created component.


#### registerAsType
Registers a component using its type (a constructor function).

> register_as_type(locator: any, type: any)

- **locator**: any - a locator to identify component to be created.
- **type**: any - a component type.

### Examples

```typescript
let factory = new Factory();
   
factory.registerAsType(
    new Descriptor("mygroup", "mycomponent1", "default", "*", "1.0"),
    MyComponent1
);
factory.register(
    new Descriptor("mygroup", "mycomponent2", "default", "*", "1.0"),
    (locator) => {
        return new MyComponent2();
    }
);
    
factory.create(new Descriptor("mygroup", "mycomponent1", "default", "name1", "1.0"))
factory.create(new Descriptor("mygroup", "mycomponent2", "default", "name2", "1.0"))
```

### See also
- #### [Descriptor](../../../commons/refer/descriptor)
- #### [IFactory](../ifactory)
