---
type: docs
title: "IFactory"
linkTitle: "IFactory"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
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

> CanCreate(locator interface{}) interface{}

- **locator**: interface{} - locator used to identify the component to be created.
- **returns**: interface{} - locator for the component that the factory is able to create.


#### Create
Creates a component identified by given locator.
Throws a [CreateError](../create_error) if the factory is not able to create the component.

> Create(locator interface{}) (interface{}, error)

- **locator**: interface{} - locator used to identify the component to be created.
- **returns**: (interface{}, error) - created component.



### See also
- #### [Descriptor](../../../commons/refer/descriptor)
- #### [IFactory](../ifactory)
