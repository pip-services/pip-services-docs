---
type: docs
title: "RunReferencesDecorator"
linkTitle: "RunReferencesDecorator"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-container-nodex"
description: >
    References decorator that automatically opens to newly added components
    that implement the [IOpenable](../../../commons/run/iopenable) interface and closes removed components
    that implement the [IClosable](../../../commons/run/iclosable) interface.
---

**Extends:** [ReferencesDecorator](../references_decorator)

**Implements:** [IOpenable](../../../commons/run/iopenable)

### Description

The RunReferencesDecorator class allows you to create a references decorator that automatically opens to newly added components that implement the [IOpenable](../../../commons/run/iopenable) interface and closes removed components that implement the [IClosable](../../../commons/run/iclosable) interface.

### Constructors
Creates a new instance of the decorator.

> `public` constructor(nextReferences: [IReferences](../../../commons/refer/ireferences), topReferences: [IReferences](../../../commons/refer/ireferences))

- **nextReferences**: [IReferences](../../../commons/refer/ireferences) - next references or decorator in the chain.
- **topReferences**: [IReferences](../../../commons/refer/ireferences) - decorator at the top of the chain.


### Fields

<span class="hide-title-link">

#### _opened
Flag of the component state
> `public` _opened: boolean = false

</span>

### Instance methods

#### put
Puts a new reference into the reference map.

> `public` put(locator: any, component: any): void
- **locator**: any - locator to find the reference by.
- **reference**: any - component reference to be added.


#### remove
Removes a previously added component that matches the specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use the **removeAll** method instead.

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
