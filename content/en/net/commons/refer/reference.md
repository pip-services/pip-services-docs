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

Important points

- It is used by [References](../references) to store registered component references.

### Constructors
Create a new instance of the reference object and assigns its values.

> `public` Reference(object locator, object component)

- **locator**: object  - a locator to find the reference. 
- **component**: object  - a reference to component.

###  Instance ethods

#### GetComponent
Gets the stored component reference.    

> `public` object GetComponent()

- **returns**: object - the component's references.


#### GetLocator
Gets the stored component locator. 

> `public` object GetLocator()

- **returns**: object - the component's locator.

#### Match
Matches locator to this reference locator.
Descriptors are matched using equal method.
All other locator types are matched using direct comparison.

> `public` bool Match(object locator)

- **locator**: object - the locator to match. 
- **returns**: bool - true if locators are matching and false it they don't.


