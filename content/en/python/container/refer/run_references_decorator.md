---
type: docs
title: "RunReferencesDecorator"
linkTitle: "RunReferencesDecorator"
gitUrl: "https://github.com/pip-services3-python/pip-services3-container-python"
description: >
    References decorator that automatically opens to newly added components
    that implement the [IOpenable](../../../commons/run/iopenable) interface and closes removed components
    that implement the [IClosable](../../../commons/run/iclosable) interface.
---

**Implements:** [ReferencesDecorator](../references_decorator), [IOpenable](../../../commons/run/iopenable)

### Description

The RunReferencesDecorator class allows you to create a references decorator that automatically opens to newly added components that implement the [IOpenable](../../../commons/run/iopenable) interface and closes removed components that implement the [IClosable](../../../commons/run/iclosable) interface.

### Constructors
Creates a new instance of the decorator.

> RunReferencesDecorator(next_references: Optional[[IReferences](../../../commons/refer/ireferences)], top_references: Optional[[IReferences](../../../commons/refer/ireferences)])

- **next_references**: Optional[[IReferences](../../../commons/refer/ireferences)] - next references or decorator in the chain.
- **top_references**: Optional[[IReferences](../../../commons/refer/ireferences)] - decorator at the top of the chain.


### Instance methods

#### put
Puts a new reference into this reference map.

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
- **returns**: Any - list containing all removed references.

### See also
- #### [IReferences](../../../commons/refer/ireferences)
