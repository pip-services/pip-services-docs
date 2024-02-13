---
type: docs
title: "Factory"
linkTitle: "Factory"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
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

`@override`
> dynamic canCreate(locator)

- **locator**: dynamic - locator to identify component to be created.
- **returns**: dynamic - locator for a component that the factory is able to create.


#### create
Creates a component identified by given a locator.

`@override`
> dynamic create(locator)

- **locator**: dynamic - locator to identify component to be created.
- **returns**: dynamic - created component.


#### register
Registers a component using a factory method.

> void register(locator, factory(locator))

- **locator**: dynamic - locator to identify component to be created.
- **factory**: dynamic - factory function that receives a locator and returns a created component.


#### registerAsType
Registers a component using its type (a constructor function).

> void registerAsType(locator, type)

- **locator**: dynamic - locator to identify component to be created.
- **type**: dynamic - component type.

### Examples

```dart
var factory = Factory();
factory.registerAsType(
    Descriptor('mygroup', 'mycomponent1', 'default', '*', '1.0'),
    MyComponent1
);

factory.register(
    Descriptor('mygroup', 'mycomponent2', 'default', '*', '1.0'),
    (locator) {
        return MyComponent2();
    }
);

factory.create(Descriptor('mygroup', 'mycomponent1', 'default', 'name1', '1.0'))
factory.create(Descriptor('mygroup', 'mycomponent2', 'default', 'name2', '1.0'))
```

### See also
- #### [Descriptor](../../../commons/refer/descriptor)
- #### [IFactory](../ifactory)
