---
type: docs
title: "IFactory"
linkTitle: "IFactory"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Interface for component factories.
    
---

### Description

The IFactory interface defines methods used by component factories to create components.

Important points

- Factories use locators to identify components to be created.
- The locators are similar to those used to locate components in references. They can be of any type, like strings or integers. However the Pip.Services toolkit most often uses Descriptor objects as component locators.

### Instance methods

#### CanCreate
Checks if this factory is able to create component by given locator.

This method searches for all registered components and returns
a locator for component it is able to create that matches the given locator.
If the factory is not able to create a requested component it returns null.

> object CanCreate(object locator)

- **locator**: object - a locator to identify component to be created.
- **returns**: object - a locator for a component that the factory is able to create.


#### Create
Creates a component identified by given locator.
Throws a [CreateException](../create_exception) if the factory is not able to create the component.

> object Create(object locator)

- **locator**: object - a locator to identify component to be created.
- **returns**: object - the created component.



### See also
- #### [Descriptor](../../../commons/refer/descriptor)
- #### [IFactory](../ifactory)
