---
type: docs
title: "LinkReferencesDecorator"
linkTitle: "LinkReferencesDecorator"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-container-node"
description: >
    References decorator that automatically sets references to newly added components
    that implement [IReferenceable interface](../../../components/refer/ireferenceable), and unsets references from removed components
    that implement [IUnreferenceable interface](../../../components/refer/iunreferenceable).
---

**Extends:** [ReferencesDecorator](../references_decorator)

**Implements:** [IOpenable](../../../components/run/iopenable)

### Description

The LinkReferencesDecorator class allows you to create a references decorator that automatically sets references to newly added components that implement the [IReferenceable](../../../components/refer/ireferenceable) interface, and unsets references from removed components that implement the [IUnreferenceable](../../../commons/refer/iunreferenceable) interface.

### Constructors
Creates a new instance of the decorator.

> `public` constructor(nextReferences: [IReferences](../../../components/refer/ireferences), topReferences: [IReferences](../../../components/refer/ireferences))

- **nextReferences**: [IReferences](../../../components/refer/ireferences) - next references or decorator in the chain.
- **topReferences**: [IReferences](../../../components/refer/ireferences) - decorator at the top of the chain.

### Instance methods

#### close
Closes the component and frees used resources.

> `public` close(context: [IContext](../../../components/context/icontext)): Promise\<void\>
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean
- **returns**: boolean - True if the component is open and False otherwise.

#### open
Opens the component.

> `public` open(context: [IContext](../../../components/context/icontext)): Promise\<void\>
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

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
