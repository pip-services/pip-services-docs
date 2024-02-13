---
type: docs
title: "LinkReferencesDecorator"
linkTitle: "LinkReferencesDecorator"
gitUrl: "https://github.com/pip-services3-python/pip-services3-container-python"
description: >
    References decorator that automatically sets references to newly added components
    that implement [IReferenceable interface](../../../commons/refer/ireferenceable), and unsets references from removed components
    that implement [IUnreferenceable interface](../../../commons/refer/iunreferenceable).
---

**Implements:** [ReferencesDecorator](../references_decorator), [IOpenable](../../../commons/run/iopenable)

### Description

The LinkReferencesDecorator class allows you to create a references decorator that automatically sets references to newly added components that implement the [IReferenceable](../../../commons/refer/ireferenceable) interface, and unsets references from removed components that implement the [IUnreferenceable](../../../commons/refer/iunreferenceable) interface.

### Constructors
Creates a new instance of the decorator.

> LinkReferencesDecorator(next_references: [IReferences](../../../commons/refer/ireferences), top_references: [IReferences](../../../commons/refer/ireferences))

- **next_references**: [IReferences](../../../commons/refer/ireferences) - next references or decorator in the chain.
- **top_references**: [IReferences](../../../commons/refer/ireferences) - decorator at the top of the chain.

### Instance methods

#### close
Closes the component and frees used resources.

> close(correlation_id: Optional[str])
- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.

#### is_open
Checks if the component is open.

> is_open(): bool
- **returns**: bool - True if the component is open and False otherwise.

#### open
Opens the component.

> open(correlation_id: Optional[str])
- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.

#### put
Puts a new reference into the reference map.

> put(locator: Any = None, component: Any = None)
- **locator**: Any - locator to find the reference by.
- **component**: Any - component's reference to be added.


#### remove
Removes a previously added reference that matches the specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use **remove_all** method instead.

> remove(locator: Any): Any
- **locator**: Any - locator to remove reference
- **returns**: Any - removed component reference.

#### remove_all
Removes all component references that match the specified locator.

> remove_all(locator: Any): List[Any]
- **locator**: Any - the locator to remove references by.
- **returns**: List[Any] - list, containing all removed references.
