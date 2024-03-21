---
type: docs
title: "RunReferencesDecorator"
linkTitle: "RunReferencesDecorator"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-container-java"
description: >
    References decorator that automatically opens to newly added components
    that implement the [IOpenable](../../../components/run/iopenable) interface and closes removed components
    that implement the [IClosable](../../../components/run/iclosable) interface.
---

**Extends:** [ReferencesDecorator](../references_decorator)

**Implements:** [IOpenable](../../../components/run/iopenable)

### Description

The RunReferencesDecorator class allows you to create a references decorator that automatically opens to newly added components that implement the [IOpenable](../../../components/run/iopenable) interface and closes removed components that implement the [IClosable](../../../components/run/iclosable) interface.

### Constructors
Creates a new instance of the decorator.

> `public` RunReferencesDecorator([IReferences](../../../components/refer/ireferences) nextReferences, [IReferences](../../../components/refer/ireferences) topReferences)

- **nextReferences**: [IReferences](../../../components/refer/ireferences) - next references or decorator in the chain.
- **topReferences**: [IReferences](../../../components/refer/ireferences) - decorator at the top of the chain.


### Fields

<span class="hide-title-link">

#### _opened
Flag of the component state
> `private` boolean **_opened** = false

</span>

### Instance methods
#### isOpen
Checks if the component is opened.

> `public` boolean isOpen()

#### open
Opens the component.

> `public` void open([IContext](../../../components/context/icontext) context) throws ApplicationException
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### close
Closes a component and frees used resources.

> `public` void close([IContext](../../../components/context/icontext) context) throws ApplicationException
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### put
Puts a new reference into the reference map.

> `public` void put(Object locator, Object component) throws ApplicationException
- **locator**: Object - locator to find the reference by.
- **reference**: Object - component reference to be added.


#### remove
Removes a previously added component that matches the specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use the **removeAll** method instead.

> `public` Object remove(Object locator) throws ApplicationException
- **locator**: Object - locator to remove component
- **returns**: Object - removed component.


#### removeAll
Removes all component references that match the specified locator.

> `public` List<Object> removeAll(Object locator) throws ApplicationException
- **locator**: Object - locator to remove references by.
- **returns**: List<Object> - list containing all removed references.

### See also
- #### [IReferences](../../../components/refer/ireferences)
