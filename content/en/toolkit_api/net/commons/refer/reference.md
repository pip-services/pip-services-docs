---
type: docs
title: "Reference"
linkTitle: "Reference"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Contains a reference to a component and a locator to find it.
    
 
---

### Description

The Reference class allows you to store a reference to a component and a locator to find it.

**Important points**

- It is used by [References](../references) to store registered component references.

### Constructors
Creates a new instance of the reference object and assigns its values.

> `public` Reference(object locator, object component)

- **locator**: object  - locator to find the reference. 
- **component**: object  - reference to component.

###  Instance methods

#### GetComponent
Gets the stored component reference.    

> `public` object GetComponent()

- **returns**: object - component's references.


#### GetLocator
Gets the stored component locator. 

> `public` object GetLocator()

- **returns**: object - component's locator.

#### Match
Matches locator to this reference locator.
Descriptors are matched using the equal method.
All other locator types are matched using direct comparison.

> `public` bool Match(object locator)

- **locator**: object - locator to match. 
- **returns**: bool - true if locators are matching and false it they don't.


