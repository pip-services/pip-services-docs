---
type: docs
title: "RunReferencesDecorator"
linkTitle: "RunReferencesDecorator"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-container-python"
description: >
    References decorator that automatically opens to newly added components
    that implement the [IOpenable](../../../components/run/iopenable) interface and closes removed components
    that implement the [IClosable](../../../commons/run/iclosable) interface.
---

**Implements:** [ReferencesDecorator](../references_decorator), [IOpenable](../../../components/run/iopenable)

### Description

The RunReferencesDecorator class allows you to create a references decorator that automatically opens to newly added components that implement the [IOpenable](../../../components/run/iopenable) interface and closes removed components that implement the [IClosable](../../../components/run/iclosable) interface.

### Constructors
Creates a new instance of the decorator.

> RunReferencesDecorator(next_references: Optional[[IReferences](../../../components/refer/ireferences)], top_references: Optional[[IReferences](../../../components/refer/ireferences)])

- **next_references**: Optional[[IReferences](../../../components/refer/ireferences)] - next references or decorator in the chain.
- **top_references**: Optional[[IReferences](../../../components/refer/ireferences)] - decorator at the top of the chain.


### Fields

<span class="hide-title-link">

#### _opened
Flag of the component state
> **_opened**: boolean = false

</span>


### Instance methods

#### put
Puts a new reference into the reference map.

> put(locator: Any = None, reference: Any = None)
- **locator**: Any - locator to find the reference by.
- **reference**: Any - component reference to be added.


#### remove
Removes a previously added component that matches the specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use the **remove_all** method instead.

> remove(locator: Any): Any
- **locator**: Any - locator to remove component
- **returns**: Any - removed component.


#### remove_all
Removes all component references that match the specified locator.

> remove_all(locator: Any): List[Any]
- **locator**: Any - locator to remove references by.
- **returns**: List[Any] - list containing all removed references.

### See also
- #### [IReferences](../../../components/refer/ireferences)
