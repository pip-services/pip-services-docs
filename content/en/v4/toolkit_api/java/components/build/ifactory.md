---
type: docs
title: "IFactory"
linkTitle: "IFactory"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-components-java"
description: >
    Interface for component factories.
    
---

### Description

The IFactory interface defines methods used by component factories to create components.

Important points

- Factories use locators to identify components to be created.
- The locators are similar to those used to locate components in references. They can be of any type, like strings or integers. However the Pip.Services toolkit most often uses Descriptor objects as component locators.

### Instance methods

#### canCreate
Checks if this factory is able to create component by given locator.

This method searches for all registered components and returns
a locator for component it is able to create that matches the given locator.
If the factory is not able to create a requested component it returns null.

>  Object canCreate(Object locator)

- **locator**: Object - a locator to identify component to be created.
- **returns**: Object - a locator for a component that the factory is able to create.


#### create
Creates a component identified by given locator.
Throws a [CreateException](../create_exception) if the factory is not able to create the component.

> Object create(Object locator) throws CreateException

- **locator**: Object - a locator to identify component to be created.
- **returns**: Object - the created component.



### See also
- #### [Descriptor](../../../components/refer/descriptor)
- #### [IFactory](../ifactory)
