---
type: docs
title: "ReferencesDecorator"
linkTitle: "ReferencesDecorator"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-container-go"
description: >
    Chainable decorator for IReferences that allows to inject additional capabilities
    such as automatic component creation, automatic registration and opening.
---

**Implements:** [IReferences](../../../components/refer/ireferences/)

### Description

The ReferencesDecorator class allows you to create chainable decorators for IReferences that allow to inject addtional capabilities, such as automatic component creation, automatic registration and opening.

### Constructors

#### NewReferencesDecorator
Creates a new instance of the decorator.

> NewReferencesDecorator(nextReferences [IReferences](../../../components/refer/ireferences/), topReferences [IReferences](../../../components/refer/ireferences/)) [*ReferencesDecorator]()

- **nextReferences**: [IReferences](../../../components/refer/ireferences/) - next references or decorator in the chain.
- **topReferences**: [IReferences](../../../components/refer/ireferences/) - decorator at the top of the chain.


### Fields

<span class="hide-title-link">

#### NextReferences
Next references or decorator in the chain.
> **NextReferences**: [IReferences](../../../components/refer/ireferences/)

#### TopReferences
Decorator at the top of the chain.
> **TopReferences**: [IReferences](../../../components/refer/ireferences/)

</span>


### Methods

#### Find
Gets all component references that match the specified locator.
Throws a [ReferenceError](../../../components/refer/reference_error) when required is set to True but no references were found.

> (c [*ReferencesDecorator]()) Find(locator any, required bool) ([]any, error)
- **locator**: any - locator to find a reference by.
- **required**: bool - if True, it forces to raise an exception when no reference is found.
- **returns**: ([]any, error) -  list with matching component references.

#### GetAll
Gets all component references registered in this reference map.

> (c [*ReferencesDecorator]()) GetAll() []any
- **returns**: []any - list with component references.

#### GetAllLocators
Gets locators for all registered component references in the reference map.

> (c [*ReferencesDecorator]()) GetAllLocators() []any
- **returns**: []any - list with component locators.

#### GetOneOptional
Gets an optional component reference that matches the specified locator.

> (c [*ReferencesDecorator]()) GetOneOptional(locator any) any
- **locator**: any - locator to find references by.
- **returns**: any - matching component reference or nil if nothing was found.


#### GetOneRequired
Gets a required component reference that matches the specified locator.
Throws a [ReferenceError](../../../components/refer/reference_error) when no references were found.

> (c [*ReferencesDecorator]()) GetOneRequired(locator any) (any, error)
- **locator**: any - locator to find a reference by.
- **returns**: (any, error) - matching component reference.


#### GetOptional
Gets all component references that match the specified locator.

> (c [*ReferencesDecorator]()) GetOptional(locator any) []any
- **locator**: any - locator to find references by.
- **returns**: []any - list with matching component references or empty list if nothing was found.


#### GetRequired
Gets all component references that match the specified locator.
At least one component reference must be present.
Throws a [ReferenceError](../../../components/refer/reference_error) when no references were found.

> (c [*ReferencesDecorator]()) GetRequired(locator any) ([]any, error)
- **locator**: any - locator to find references by.
- **returns**: ([]any, error) - list with matching component references.


#### Put
Puts a new reference into the reference map.

> (c [*ReferencesDecorator]()) Put(ctx context.Context, locator any, component any)

- **ctx**: context.Context - operation cotext.
- **locator**: any - locator to find the reference by.
- **reference**: any - component reference to be added.


#### Remove
Removes a previously added component that matches the specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use **RemoveAll** method instead.

> (c [*ReferencesDecorator]()) Remove(ctx context.Context, locator any) any

- **ctx**: context.Context - operation cotext.
- **locator**: any - locator to remove component
- **returns**: any - removed component.


#### RemoveAll
Removes all component references that match the specified locator.

> (c [*ReferencesDecorator]()) RemoveAll(ctx context.Context, locator any) []any

- **ctx**: context.Context - operation cotext.
- **locator**: any - locator to remove references by.
- **returns**: []any - list containing all removed references.

### See also
- #### [IReferences](../../../components/refer/ireferences)

