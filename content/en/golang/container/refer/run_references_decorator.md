---
type: docs
title: "RunReferencesDecorator"
linkTitle: "RunReferencesDecorator"
gitUrl: "https://github.com/pip-services3-go/pip-services3-container-go"
description: >
    References decorator that automatically opens to newly added components
    that implement the [IOpenable](../../../commons/run/iopenable) interface and closes removed components
    that implement the [IClosable](../../../commons/run/iclosable) interface.
---

**Implements:** [ReferencesDecorator](../references_decorator)


### Description

The RunReferencesDecorator class allows you to create a references decorator that automatically opens to newly added components that implement the [IOpenable](../../../commons/run/iopenable) interface and closes removed components that implement the [IClosable](../../../commons/run/iclosable) interface.

### Constructors

#### NewRunReferencesDecorator
Creates a new instance of the decorator.

> NewRunReferencesDecorator(nextReferences [IReferences](../../../commons/refer/ireferences), topReferences [IReferences](../../../commons/refer/ireferences)) [*RunReferencesDecorator]()

- **nextReferences**: [IReferences](../../../commons/refer/ireferences) - next references or decorator in the chain.
- **topReferences**: [IReferences](../../../commons/refer/ireferences) - decorator at the top of the chain.


### Fields

<span class="hide-title-link">

#### opened
Flag of the component state
> opened: bool = false

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

> (c [*ManagedReferences]()) Open(correlationId string) error
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - return error if not opened

#### Put
Puts a new reference into the reference map.

> (c [*RunReferencesDecorator]()) Put(locator interface{}, component interface{})
- **locator**: interface{} - locator to find the reference by.
- **reference**: interface{} - component reference to be added.


#### Remove
Removes a previously added component that matches the specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use the **RemoveAll** method instead.

> (c [*RunReferencesDecorator]()) Remove(locator interface{}) interface{}
- **locator**: interface{} - locator to remove component
- **returns**: interface{} - removed component.


#### RemoveAll
Removes all component references that match the specified locator.

> (c [*RunReferencesDecorator]()) RemoveAll(locator interface{}) []interface{}
- **locator**: interface{} - locator to remove references by.
- **returns**: []interface{} - list containing all removed references.

### See also
- #### [IReferences](../../../commons/refer/ireferences)
