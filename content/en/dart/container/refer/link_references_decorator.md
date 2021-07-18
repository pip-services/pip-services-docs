---
type: docs
title: "LinkReferencesDecorator"
linkTitle: "LinkReferencesDecorator"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-container-dart"
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

> LinkReferencesDecorator([IReferences](../../../commons/refer/ireferences) nextReferences, [IReferences](../../../commons/refer/ireferences) topReferences)

- **nextReferences**: [IReferences](../../../commons/refer/ireferences) - next references or decorator in the chain.
- **topReferences**: [IReferences](../../../commons/refer/ireferences) - decorator at the top of the chain.

### Instance methods

#### close
Closes the component and frees used resources.

`@override`
> Future close(String correlationId)
- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.

#### isOpen
Checks if the component is open.

`@override`
> bool isOpen()
- **returns**: bool - True if the component is open and False otherwise.

#### open
Opens the component.

`@override`
> Future open(String correlationId)
- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.

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
- **locator**: dynamic - the locator to remove references by.
- **returns**: List - list, containing all removed references.
