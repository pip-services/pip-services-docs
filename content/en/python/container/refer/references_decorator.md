---
type: docs
title: "ReferencesDecorator"
linkTitle: "ReferencesDecorator"
gitUrl: "https://github.com/pip-services3-python/pip-services3-container-python"
description: >
    Chainable decorator for IReferences that allows to inject additional capabilities
    such as automatic component creation, automatic registration and opening.
---

**Implements:** [IReferences](../../../commons/refer/ireferences)

See also [IReferences](../../../commons/refer/ireferences)

### Constructors
Creates a new instance of the decorator.

> ReferencesDecorator(next_references: Optional[[IReferences](../../../commons/refer/ireferences)], top_references: Optional[[IReferences](../../../commons/refer/ireferences)])

- **next_references**: Optional[[IReferences](../../../commons/refer/ireferences)] - the next references or decorator in the chain.
- **top_references**: Optional[[IReferences](../../../commons/refer/ireferences)] - the decorator at the top of the chain.

### Fields

<span class="hide-title-link">

#### next_references
The next references or decorator in the chain.
> **next_references**: Optional[[IReferences](../../../commons/refer/ireferences)]

#### top_references
The decorator at the top of the chain.
> **top_references**: Optional[[IReferences](../../../commons/refer/ireferences)]

</span>


### Methods

#### find
Gets all component references that match specified locator.
Throws a [ReferenceException](../../../commons/refer/reference_exception) when required is set to true but no references found.

> find(locator: Any, required: bool): List[Any]
- **locator**: Any - the locator to find a reference by.
- **required**: bool - forces to raise an exception if no reference is found.
- **returns**: List[Any] -  a list with matching component references.

#### get_all
Gets all component references registered in this reference map.

> get_all(): List[Any]
- **returns**: List[Any] - a list with component references.

#### get_all_locators
Gets locators for all registered component references in this reference map.

> get_all_locators(): List[Any]
- **returns**: List[Any] - a list with component locators.

#### get_one_optional
Gets an optional component reference that matches specified locator.

> get_one_optional(locator: Any): Any
- **locator**: Any - the locator to find references by.
- **returns**: Any - a matching component reference or null if nothing was found.


#### get_one_required
Gets a required component reference that matches specified locator.
Throws a [ReferenceException](../../../commons/refer/reference_exception) when no references found.

> get_one_required(locator: Any): Any
- **locator**: Any - the locator to find a reference by.
- **returns**: Any - a matching component reference.


#### get_optional
Gets all component references that match specified locator.

> get_optional(locator: Any): List[Any]
- **locator**: Any - the locator to find references by.
- **returns**: List[Any] - a list with matching component references or empty list if nothing was found.


#### get_required
Gets all component references that match specified locator.
At least one component reference must be present. If it doesn't the method throws an error.
Throws a [ReferenceException](../../../commons/refer/reference_exception) when no references found.

> get_required(locator: Any): List[Any]
- **locator**: Any - the locator to find references by.
- **returns**: List[Any] - a list with matching component references.


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