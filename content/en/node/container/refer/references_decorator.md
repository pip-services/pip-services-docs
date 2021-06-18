---
type: docs
title: "ReferencesDecorator"
linkTitle: "ReferencesDecorator"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-container-nodex"
description: >
    Chainable decorator for IReferences that allows to inject additional capabilities
    such as automatic component creation, automatic registration and opening.
---

**Implements:** [IReferences](../../../commons/refer/ireferences)

### Description

The ReferencesDecorator class allows you to create chainable decorators for IReferences that allow to inject addtional capabilities, such as automatic component creation, automatic registration and opening.

### Constructors
Creates a new instance of the decorator.

> `public` constructor(nextReferences: [IReferences](../../../commons/refer/ireferences), topReferences: [IReferences](../../../commons/refer/ireferences))

- **nextReferences**: [IReferences](../../../commons/refer/ireferences) - next references or decorator in the chain.
- **topReferences**: [IReferences](../../../commons/refer/ireferences) - decorator at the top of the chain.

### Fields

<span class="hide-title-link">

#### nextReferences
Next references or decorator in the chain.
> `public` **nextReferences**: [IReferences](../../../commons/refer/ireferences)

#### topReferences
Decorator at the top of the chain.
> `public` **topReferences**: [IReferences](../../../commons/refer/ireferences)

</span>


### Instance methods

#### find
Gets all component references that match the specified locator.
Throws a [ReferenceException](../../../commons/refer/reference_exception) when required is set to True but no references were found.

> `public` find\<T\>(locator: any, required: boolean): T[]
- **locator**: any - locator to find a reference by.
- **required**: boolean - if True, it forces to raise an exception when no reference is found.
- **returns**: T[] -  list with matching component references.

#### getAll
Gets all component references registered in this reference map.

> `public` getAll(): any[]
- **returns**: any[] - list with component references.

#### getAllLocators
Gets locators for all registered component references in the reference map.

> `public` getAllLocators(): any[]
- **returns**: any[] - list with component locators.

#### getOneOptional
Gets an optional component reference that matches the specified locator.

> `public` getOneOptional\<T\>(locator: any): T
- **locator**: any - locator to find references by.
- **returns**: T - matching component reference or null if nothing was found.


#### getOneRequired
Gets a required component reference that matches the specified locator.
Throws a [ReferenceException](../../../commons/refer/reference_exception) when no references were found.

> `public` getOneRequired\<T\>(locator: any): T
- **locator**: any - locator to find a reference by.
- **returns**: any - matching component reference.


#### getOptional
Gets all component references that match the specified locator.

> `public` getOptional\<T\>(locator: any): T[]
- **locator**: any - locator to find references by.
- **returns**: T[] - list with matching component references or empty list if nothing was found.


#### getRequired
Gets all component references that match the specified locator.
At least one component reference must be present.
Throws a [ReferenceException](../../../commons/refer/reference_exception) when no references were found.

> `public` getRequired\<T\>(locator: any): T[]
- **locator**: any - locator to find references by.
- **returns**: T[] - list with matching component references.


#### put
Puts a new reference into the reference map.

> `public` put(locator: any, component: any): any
- **locator**: any - locator to find the reference by.
- **reference**: any - component reference to be added.


#### remove
Removes a previously added component that matches the specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use **removeAll** method instead.

> `public` remove(locator: any): any
- **locator**: any - locator to remove component
- **returns**: any - removed component.


#### removeAll
Removes all component references that match the specified locator.

> `public` removeAll(locator: any): any[]
- **locator**: any - locator to remove references by.
- **returns**: any[] - list containing all removed references.

### See also
- #### [IReferences](../../../commons/refer/ireferences)
