---
type: docs
title: "Build"
linkTitle: "Build"
no_list: true
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Todo: Rewrite the description.


    Contains the "factory design pattern". There are various factory types, 
    which are also implemented in a portable manner.  
---
---

<div class="module-body"> 

### Interfaces

#### [IFactory](ifactory)
Interface for component factories.

Factories use locators to identify components to be created.

The locators are similar to those used to locate components in references.
They can be of any type like strings or integers. However Pip.Services toolkit
most often uses Descriptor objects as component locators.

### Classes

#### [CompositeFactory](composite_factory)
Aggregates multiple factories into a single factory component.
When a new component is requested, it iterates through 
factories to locate the one able to create the requested component.

#### [CreateException](create_exception)
Error raised when factory is not able to create requested component.

#### [Factory](factory)
Basic component factory that creates components using registered types and factory functions.

</div>
