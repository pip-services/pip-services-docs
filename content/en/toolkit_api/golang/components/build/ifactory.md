---
type: docs
title: "IFactory"
linkTitle: "IFactory"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
description: >
    Interface for component factories.
    
---

### Description

The IFactory interface defines methods used by component factories to create components.

Important points

- Factories use locators to identify the components to be created.
- The locators are similar to those used to locate components in references. They can be of any type, like strings or integers. However the Pip.Services toolkit most often uses Descriptor objects as component locators.

### Methods

#### CanCreate
Checks if this factory is able to create a component by given locator.

This method searches for all registered components and returns
a locator for a component it is able to create that matches the given locator.
If the factory is not able to create a requested component it returns nil.

> CanCreate(locator any) any

- **locator**: any - locator used to identify the component to be created.
- **returns**: any - locator for the component that the factory is able to create.


#### Create
Creates a component identified by given locator.
Throws a [CreateError](../create_error) if the factory is not able to create the component.

> Create(locator any) (any, error)

- **locator**: any - locator used to identify the component to be created.
- **returns**: (any, error) - created component.



### See also
- #### [Descriptor](../../../commons/refer/descriptor)
- #### [IFactory](../ifactory)
