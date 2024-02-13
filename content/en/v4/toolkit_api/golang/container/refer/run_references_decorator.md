---
type: docs
title: "RunReferencesDecorator"
linkTitle: "RunReferencesDecorator"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-container-go"
description: >
    References decorator that automatically opens to newly added components
    that implement the [IOpenable](../../../components/run/iopenable) interface and closes removed components
    that implement the [IClosable](../../../components/run/iclosable/) interface.
---

**Implements:** [ReferencesDecorator](../references_decorator)


### Description

The RunReferencesDecorator class allows you to create a references decorator that automatically opens to newly added components that implement the [IOpenable](../../../components/run/iopenable) interface and closes removed components that implement the [IClosable](../../../components/run/iclosable/) interface.

### Constructors

#### NewRunReferencesDecorator
Creates a new instance of the decorator.

> NewRunReferencesDecorator(nextReferences [IReferences](../../../components/refer/ireferences/), topReferences [IReferences](../../../components/refer/ireferences/)) [*RunReferencesDecorator]()

- **nextReferences**: [IReferences](../../../components/refer/ireferences/) - next references or decorator in the chain.
- **topReferences**: [IReferences](../../../components/refer/ireferences/) - decorator at the top of the chain.


### Fields

<span class="hide-title-link">

#### opened
Flag of the component state
> **opened**: bool = false

</span>

### Methods

#### Close
Closes the component and frees used resources.

> (c [*ManagedReferences]()) Close(correlationId string) error
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **retunrs**: error - returns error if not closed

#### IsOpen
Checks if the component is open.

> (c [*ManagedReferences]()) IsOpen() bool
- **returns**: bool - True if the component is open and False otherwise.

#### Open
Opens the component.

> (c [*ManagedReferences]()) Open(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation cotext.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - return error if not opened

#### Put
Puts a new reference into the reference map.

> (c [*RunReferencesDecorator]()) Put(ctx context.Context, locator any, component any)

- **ctx**: context.Context - operation cotext.
- **locator**: any - locator to find the reference by.
- **reference**: any - component reference to be added.


#### Remove
Removes a previously added component that matches the specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use the **RemoveAll** method instead.

> (c [*RunReferencesDecorator]()) Remove(ctx context.Context, locator any) any

- **ctx**: context.Context - operation cotext.
- **locator**: any - locator to remove component
- **returns**: any - removed component.


#### RemoveAll
Removes all component references that match the specified locator.

> (c [*RunReferencesDecorator]()) RemoveAll(ctx context.Context, locator any) []any

- **ctx**: context.Context - operation cotext.
- **locator**: any - locator to remove references by.
- **returns**: []any - list containing all removed references.

### See also
- #### [IReferences](../../../components/refer/ireferences/)

