---
type: docs
title: "Reference"
linkTitle: "Reference"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-components-java"
description: >
    Contains a reference to a component and a locator to find it.
    
 
---

### Description

The Reference class allows you to store a reference to a component and a locator to find it.

Important points

- It is used by [References](../references) to store registered component references.

### Constructors
Creates a new instance of the reference object and assigns its values.

> `public` Reference(Object locator, Object reference) throws NullPointerException

- **locator**: Object - locator to find the reference. 
- **component**: Object - reference to component.

###  Instance methods

#### getComponent
Gets the stored component reference.    

> `public` Object getComponent()

- **returns**: Object - component's references.


#### getLocator
Gets the stored component locator. 

> `public` Object getLocator()

- **returns**: Object - component's locator.

#### match
Matches locator to this reference locator.
Descriptors are matched using the equal method.
All other locator types are matched using direct comparison.

> `public` boolean match(Object locator)

- **locator**: Object - locator to match. 
- **returns**: boolean - true if locators are matching and false it they don't.


