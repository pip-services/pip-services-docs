---
type: docs
title: "Reference"
linkTitle: "Reference"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Contains a reference to a component and a locator to find it.
    
 
---

### Description

The Reference class allows you to store a reference to a component and a locator to find it.

Important points

- It is used by [References](../references) to store registered component references.

### Constructors
Create a new instance of the reference object and assigns its values.

> NewReference(locator interface{}, component interface{}) [*Reference]()

- **locator**: interface{} - a locator to find the reference. 
- **component**: interface{} - a reference to component.

###  Methods

#### Component
Gets the stored component reference.    

> (c *Reference) Component() interface{}

- **returns**: interface{} - the component's references.


#### Locator
Gets the stored component locator. 

> (c *Reference) Locator() interface{}

- **returns**: interface{} - the component's locator.

#### Match
Matches locator to this reference locator.
Descriptors are matched using equal method.
All other locator types are matched using direct comparison.

> (c *Reference) Match(locator interface{}) bool

- **locator**: interface{} - the locator to match. 
- **returns**: bool - true if locators are matching and false it they don't.


