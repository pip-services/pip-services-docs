---
type: docs
title: "LinkReferencesDecorator"
linkTitle: "LinkReferencesDecorator"
gitUrl: "https://github.com/pip-services3-go/pip-services3-container-go"
description: >
    References decorator that automatically sets references to newly added components
    that implement [IReferenceable interface](../../../commons/refer/ireferenceable), and unsets references from removed components
    that implement [IUnreferenceable interface](../../../commons/refer/iunreferenceable).
---

**Implements:** [ReferencesDecorator](../references_decorator)


### Description

The LinkReferencesDecorator class allows you to create a references decorator that automatically sets references to newly added components that implement the [IReferenceable](../../../commons/refer/ireferenceable) interface, and unsets references from removed components that implement the [IUnreferenceable](../../../commons/refer/iunreferenceable) interface.

### Constructors

#### NewLinkReferencesDecorator
Creates a new instance of the decorator.

> NewLinkReferencesDecorator(nextReferences [IReferences](../../../commons/refer/ireferences), topReferences [IReferences](../../../commons/refer/ireferences)) *LinkReferencesDecorator

- **nextReferences**: [IReferences](../../../commons/refer/ireferences) - next references or decorator in the chain.
- **topReferences**: [IReferences](../../../commons/refer/ireferences) - decorator at the top of the chain.

### Methods

#### Close
Closes the component and frees used resources.

> (c [*LinkReferencesDecorator]()) Close(correlationId string) error
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - returns error if not closed

#### IsOpen
Checks if the component is open.

> (c [*LinkReferencesDecorator]()) IsOpen() bool
- **returns**: bool - True if the component is open and False otherwise.

#### Open
Opens the component.

> (c [*LinkReferencesDecorator]()) Open(correlationId string) error 
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - returns error if not opened

#### Put
Puts a new reference into the reference map.

> (c [*LinkReferencesDecorator]()) Put(locator interface{}, component interface{})
- **locator**: interface{} - locator to find the reference by.
- **component**: interface{} - component's reference to be added.


#### Remove
Removes a previously added reference that matches the specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use **RemoveAll** method instead.

> (c [*LinkReferencesDecorator]()) Remove(locator interface{}) interface{}
- **locator**: interface{} - locator to remove reference
- **returns**: interface{} - removed component reference.

#### RemoveAll
Removes all component references that match the specified locator.

> (c [*LinkReferencesDecorator]()) RemoveAll(locator interface{}) []interface{}
- **locator**: interface{} - the locator to remove references by.
- **returns**: []interface{} - list, containing all removed references.
