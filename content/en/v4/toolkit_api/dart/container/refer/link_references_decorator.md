---
type: docs
title: "LinkReferencesDecorator"
linkTitle: "LinkReferencesDecorator"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-container-dart"
description: >
    References decorator that automatically sets references to newly added components
    that implement the [IReferenceable](../../../components/refer/ireferenceable) interface, and unsets references from removed components
    that implement [IUnreferenceable](../../../components/refer/iunreferenceable) interface.
---

**Extends:** [ReferencesDecorator](../references_decorator)

**Implements:** [IOpenable](../../../components/run/iopenable)

### Description

The LinkReferencesDecorator class allows you to create a references decorator that automatically sets references to newly added components that implement the [IReferenceable](../../../components/refer/ireferenceable) interface, and unsets references from removed components that implement the [IUnreferenceable](../../../components/refer/iunreferenceable) interface.

### Constructors
Creates a new instance of the decorator.

> LinkReferencesDecorator([IReferences](../../../components/refer/ireferences) nextReferences, [IReferences](../../../components/refer/ireferences) topReferences)

- **nextReferences**: [IReferences](../../../components/refer/ireferences) - next references or decorator in the chain.
- **topReferences**: [IReferences](../../../components/refer/ireferences) - decorator at the top of the chain.

### Instance methods

#### close
Closes the component and frees used resources.

`@override`
> Future close(IContext? context)
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### isOpen
Checks if the component is open.

`@override`
> bool isOpen()
- **returns**: bool - True if the component is open and False otherwise.

#### open
Opens the component.

`@override`
> Future open(IContext? context)
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### put
Puts a new reference into the reference map.

`@override`
> dynamic put(locator, component)
- **locator**: dynamic - locator to find the reference by.
- **component**: dynamic - component's reference to be added.


#### remove
Removes a previously added reference that matches the specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use **removeAll** method instead.

`@override`
> dynamic remove(locator)
- **locator**: dynamic - locator to remove reference
- **returns**: dynamic - removed component reference.

#### removeAll
Removes all component references that match the specified locator.

`@override`
> List removeAll(locator)
- **locator**: dynamic - locator to remove references by.
- **returns**: List - list, containing all removed references.
