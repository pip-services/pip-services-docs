---
type: docs
title: "RunReferencesDecorator"
linkTitle: "RunReferencesDecorator"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-container-dart"
description: >
    References decorator that automatically opens newly added components
    that implement the [IOpenable](../../../components/run/iopenable) interface and closes removed components
    that implement the [IClosable](../../../components/run/iclosable) interface.
---

**Extends:** [ReferencesDecorator](../references_decorator)

**Implements:** [IOpenable](../../../components/run/iopenable)

### Description

The RunReferencesDecorator class allows you to create a references decorator that automatically opens newly added components that implement the [IOpenable](../../../components/run/iopenable) interface and closes removed components that implement the [IClosable](../../../components/run/iclosable) interface.

### Constructors
Creates a new instance of the decorator.

> RunReferencesDecorator([IReferences](../../../components/refer/ireferences) nextReferences, [IReferences](../../../components/refer/ireferences) topReferences)

- **nextReferences**: [IReferences](../../../components/refer/ireferences) - next references or decorator in the chain.
- **topReferences**: [IReferences](../../../components/refer/ireferences) - decorator at the top of the chain.


### Fields

<span class="hide-title-link">

#### opened
Flag of the component state
> **_opened**: bool = false

</span>

### Instance methods

#### put
Puts a new reference into the reference map.

`@override`
> void put(locator, component)
- **locator**: dynamic - locator to find the reference by.
- **reference**: dynamic - component reference to be added.


#### remove
Removes a previously added component that matches the specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use the **removeAll** method instead.

`@override`
> dynamic remove(locator)
- **locator**: dynamic - locator to remove component
- **returns**: dynamic - removed component.


#### removeAll
Removes all component references that match the specified locator.

`@override`
> List removeAll(locator)
- **locator**: dynamic - locator to remove references by.
- **returns**: List - list containing all removed references.

### See also
- #### [IReferences](../../../commons/refer/ireferences)
