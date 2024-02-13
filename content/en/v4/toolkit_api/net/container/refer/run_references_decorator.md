---
type: docs
title: "RunReferencesDecorator"
linkTitle: "RunReferencesDecorator"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-container-dotnet"
description: >
    References decorator that automatically opens newly added components
    that implement the [IOpenable](../../../components/run/iopenable) interface and closes removed components
    that implement the [IClosable](../../../components/run/iclosable) interface.
---

**Inherits:** [ReferencesDecorator](../references_decorator), [IOpenable](../../../components/run/iopenable)

### Description

The RunReferencesDecorator class allows you to create a references decorator that automatically opens newly added components that implement the [IOpenable](../../../components/run/iopenable) interface and closes removed components that implement the [IClosable](../../../components/run/iclosable) interface.

### Constructors
Creates a new instance of the decorator.

> `public` RunReferencesDecorator([IReferences](../../../components/refer/ireferences) baseReferences = null, [IReferences](../../../components/refer/ireferences) parentReferences = null)

- **baseReferences**: [IReferences](../../../components/refer/ireferences) - next references or decorator in the chain.
- **parentReferences**: [IReferences](../../../components/refer/ireferences) - decorator at the top of the chain.


### Instance methods

#### Put
Puts a new reference into the reference map.

> `public override` void Put(object locator, object component)
- **locator**: object - locator to find the reference by.
- **reference**: object - component reference to be added.


#### Remove
Removes a previously added component that matches the specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use the **RemoveAll** method instead.

> `public override` object Remove(object locator)
- **locator**: object - locator to remove component
- **returns**: object - removed component.


#### RemoveAll
Removes all component references that match the specified locator.

> `public override` List\<object\> RemoveAll(object locator)
- **locator**: object - locator to remove references by.
- **returns**: List\<object\> - list containing all removed references.

### See also
- #### [IReferences](../../../components/refer/ireferences)

