---
type: docs
title: "RunReferencesDecorator"
linkTitle: "RunReferencesDecorator"
gitUrl: "https://github.com/pip-services3-python/pip-services3-container-python"
description: >
    References decorator that automatically opens to newly added components
    that implement [IOpenable interface](../../../commons/run/iopenable) and closes removed components
    that implement [IClosable interface](../../../commons/run/iclosable)
---

**Implements:** [ReferencesDecorator](../references_decorator), [IOpenable](../../../commons/run/iopenable)

### Constructors
Creates a new instance of the decorator.

> RunReferencesDecorator(next_references: Optional[[IReferences](../../../commons/refer/ireferences)], top_references: Optional[[IReferences](../../../commons/refer/ireferences)])

- **next_references**: Optional[[IReferences](../../../commons/refer/ireferences)] - the next references or decorator in the chain.
- **top_references**: Optional[[IReferences](../../../commons/refer/ireferences)] - the decorator at the top of the chain.


### Methods

#### put
Puts a new reference into this reference map.

> put(locator: Any = None, reference: Any = None)
- **locator**: Any - a locator to find the reference by.
- **reference**: Any - a component reference to be added.


#### remove
Removes a previously added component that matches specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use **remove_all** method instead.

> remove(locator: Any): Any
- **locator**: Any - a locator to remove component
- **returns**: Any - the removed component component.


#### remove_all
Removes all component references that match the specified locator.

> remove_all(locator: Any): List[Any]
- **locator**: Any - the locator to remove references by.
- **returns**: Any - a list, containing all removed references.

### See also
- #### [IReferences](../../../commons/refer/ireferences)