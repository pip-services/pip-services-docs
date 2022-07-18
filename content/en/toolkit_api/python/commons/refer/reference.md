---
type: docs
title: "Reference"
linkTitle: "Reference"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Contains a reference to a component and a locator to find it.
    
 
---

### Description

The Reference class allows you to store a reference to a component and a locator to find it.

Important points

- It is used by [References](../references) to store registered component references.

### Constructors
Create a new instance of the reference object and assigns its values.

> Reference(locator: Any, component: Any)

- **locator**: Any - a locator to find the reference. 
- **component**: Any - a reference to component.

###  Instance methods

#### get_component
Gets the stored component reference.    

> get_component(): Any

- **returns**: Any - the component's references.


#### get_locator
Gets the stored component locator. 

> get_locator(): Any

- **returns**: Any - the component's locator.

#### match
Matches locator to this reference locator.
Descriptors are matched using equal method.
All other locator types are matched using direct comparison.

> match(locator: Any): bool

- **locator**: Any - the locator to match. 
- **returns**: bool - true if locators are matching and false it they don't.

