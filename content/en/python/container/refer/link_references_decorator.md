---
type: docs
title: "LinkReferencesDecorator"
linkTitle: "LinkReferencesDecorator"
gitUrl: "https://github.com/pip-services3-python/pip-services3-container-python"
description: >
    References decorator that automatically sets references to newly added components
    that implement [IReferenceable interface](../../../commons/refer/ireferenceable) and unsets references from removed components
    that implement [IUnreferenceable interface](../../../commons/refer/iunreferenceable).
---

**Implements:** [ReferencesDecorator](../references_decorator), [IOpenable](../../../commons/run/iopenable)

### Constructors
Creates a new instance of the decorator.

> LinkReferencesDecorator(next_references: [IReferences](../../../commons/refer/ireferences), top_references: [IReferences](../../../commons/refer/ireferences))

- **next_references**: [IReferences](../../../commons/refer/ireferences) - the next references or decorator in the chain.
- **top_references**: [IReferences](../../../commons/refer/ireferences) - the decorator at the top of the chain.

### Methods

#### close
Closes component and frees used resources.

> close(correlation_id: Optional[str])
- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.

#### is_open
Checks if the component is opened.

> is_open(): bool
- **returns**: bool - true if the component has been opened and false otherwise.

#### open
Opens the component.

> open(correlation_id: Optional[str])
- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.

#### put
Puts a new reference into this reference map.

> put(locator: Any = None, component: Any = None)
- **locator**: Any - a locator to find the reference by.
- **component**: Any - a component reference to be added.


#### remove
Removes a previously added reference that matches specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use **remove_all** method instead.

> remove(locator: Any): Any
- **locator**: Any - a locator to remove reference
- **returns**: Any - the removed component reference.

#### remove_all
Removes all component references that match the specified locator.

> remove_all(locator: Any): List[Any]
- **locator**: Any - the locator to remove references by.
- **returns**: List[Any] - a list, containing all removed references.