---
type: docs
title: "LinkReferencesDecorator"
linkTitle: "LinkReferencesDecorator"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-container-dotnet"
description: >
    References decorator that automatically sets references to newly added components
    that implement the [IReferenceable](../../../commons/refer/ireferenceable) interface, and unsets references from removed components
    that implement [IUnreferenceable](../../../commons/refer/iunreferenceable) interface.
---

**Inherits:** [ReferencesDecorator](../references_decorator), [IOpenable](../../../commons/run/iopenable)


### Description

The LinkReferencesDecorator class allows you to create a references decorator that automatically sets references to newly added components that implement the [IReferenceable](../../../commons/refer/ireferenceable) interface, and unsets references from removed components that implement the [IUnreferenceable](../../../commons/refer/iunreferenceable) interface.

### Constructors
Creates a new instance of the decorator.

> `public` LinkReferencesDecorator([IReferences](../../../commons/refer/ireferences) baseReferences = null, [IReferences](../../../commons/refer/ireferences) parentReferences = null)

- **baseReferences**: [IReferences](../../../commons/refer/ireferences) - next references or decorator in the chain.
- **parentReferences**: [IReferences](../../../commons/refer/ireferences) - decorator at the top of the chain.

### Instance methods

#### Close
Closes the component and frees used resources.

> `public` Task CloseAsync(string correlationId)
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### IsOpen
Checks if the component is open.

> `public` bool IsOpen()
- **returns**: bool - true if the component is open and false otherwise.

#### Open
Opens the component.

> `public` Task OpenAsync(string correlationId)
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### Put
Puts a new reference into the reference map.

> `public override` void Put(object locator, object component)
- **locator**: object - locator to find the reference by.
- **component**: object - component's reference to be added.


#### Remove
Removes a previously added reference that matches the specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use the **RemoveAll** method instead.

> `public override` object Remove(object locator)
- **locator**: object - locator to remove reference
- **returns**: object - removed component reference.

#### RemoveAll
Removes all component references that match the specified locator.

> `public override` List\<object\> RemoveAll(object locator)
- **locator**: object - locator to remove references by.
- **returns**: List\<object\> - list, containing all removed references.
