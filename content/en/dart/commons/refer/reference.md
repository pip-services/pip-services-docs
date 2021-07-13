---
type: docs
title: "Reference"
linkTitle: "Reference"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Contains a reference to a component and a locator to find it.
    
 
---

### Description

The Reference class allows you to store a reference to a component and a locator to find it.

Important points

- It is used by [References](../references) to store registered component references.

### Constructors
Creates a new instance of the reference object and assigns its values.

> Reference(locator, component)

- **locator**: dynamic - locator to find the reference. 
- **component**: dynamic - reference to component.

###  Instance methods

#### getComponent
Gets the stored component reference.    

> dynamic getComponent()

- **returns**: dynamic - component's references.


#### getLocator
Gets the stored component locator. 

> dynamic getLocator()

- **returns**: dynamic - component's locator.

#### match
Matches locator to this reference locator.
Descriptors are matched using the equal method.
All other locator types are matched using direct comparison.

>  bool match(locator)

- **locator**: dynamic - locator to match. 
- **returns**: bool - true if locators are matching and false it they don't.


