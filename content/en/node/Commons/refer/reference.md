---
type: docs
title: "Reference"
linkTitle: "Reference"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Contains a reference to a component and locator to find it.
    It is used by [References](../references) to store registered component references.
---

### Constructors
Create a new instance of the reference object and assigns its values.

> `public` constructor(locator: any, component: any): [Reference]()

- **locator**: any - a locator to find the reference. 
- **component**: any - a reference to component.

### Methods

#### getComponent
Gets the stored component reference.    

> `public` getComponent(): any

- **returns**: any - the component's references.


#### getLocator
Gets the stored component locator. 

> `public` getLocator(): any

- **returns**: any - the component's locator.

#### match
Matches locator to this reference locator.
Descriptors are matched using equal method.
All other locator types are matched using direct comparison.

> `public` match(locator: any): boolean

- **locator**: any - the locator to match. 
- **returns**: any - true if locators are matching and false it they don't.

