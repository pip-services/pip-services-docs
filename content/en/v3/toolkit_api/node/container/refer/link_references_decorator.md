---
type: docs
title: "LinkReferencesDecorator"
linkTitle: "LinkReferencesDecorator"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-container-nodex"
description: >
    References decorator that automatically sets references to newly added components
    that implement [IReferenceable interface](../../../commons/refer/ireferenceable), and unsets references from removed components
    that implement [IUnreferenceable interface](../../../commons/refer/iunreferenceable).
---

**Extends:** [ReferencesDecorator](../references_decorator)

**Implements:** [IOpenable](../../../commons/run/iopenable)

### Description

The LinkReferencesDecorator class allows you to create a references decorator that automatically sets references to newly added components that implement the [IReferenceable](../../../commons/refer/ireferenceable) interface, and unsets references from removed components that implement the [IUnreferenceable](../../../commons/refer/iunreferenceable) interface.

### Constructors
Creates a new instance of the decorator.

> `public` constructor(nextReferences: [IReferences](../../../commons/refer/ireferences), topReferences: [IReferences](../../../commons/refer/ireferences))

- **nextReferences**: [IReferences](../../../commons/refer/ireferences) - next references or decorator in the chain.
- **topReferences**: [IReferences](../../../commons/refer/ireferences) - decorator at the top of the chain.

### Instance methods

#### close
Closes the component and frees used resources.

> `public` close(correlationId: string): Promise\<void\>
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean
- **returns**: boolean - True if the component is open and False otherwise.

#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### put
Puts a new reference into the reference map.

> `public` put(locator: any, component: any)
- **locator**: any - locator to find the reference by.
- **component**: any - component's reference to be added.


#### remove
Removes a previously added reference that matches the specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use **removeAll** method instead.

> `public` remove(locator: any): any
- **locator**: any - locator to remove reference
- **returns**: any - removed component reference.

#### removeAll
Removes all component references that match the specified locator.

> `public` removeAll(locator: any): any[]
- **locator**: any - the locator to remove references by.
- **returns**: any[] - list, containing all removed references.
