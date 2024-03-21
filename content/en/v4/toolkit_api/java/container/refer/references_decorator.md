---
type: docs
title: "ReferencesDecorator"
linkTitle: "ReferencesDecorator"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-container-java"
description: >
    Chainable decorator for IReferences that allows to inject additional capabilities
    such as automatic component creation, automatic registration and opening.
---

**Implements:** [IReferences](../../../components/refer/ireferences)

### Description

The ReferencesDecorator class allows you to create chainable decorators for IReferences that allow to inject addtional capabilities, such as automatic component creation, automatic registration and opening.

### Constructors
Creates a new instance of the decorator.

> `public` ReferencesDecorator([IReferences](../../../components/refer/ireferences) nextReferences, [IReferences](../../../components/refer/ireferences) topReferences)

- **nextReferences**: [IReferences](../../../components/refer/ireferences) - next references or decorator in the chain.
- **topReferences**: [IReferences](../../../components/refer/ireferences) - decorator at the top of the chain.

### Fields

<span class="hide-title-link">

#### nextReferences
Next references or decorator in the chain.
> `private` [IReferences](../../../components/refer/ireferences) **_nextReferences**

#### topReferences
Decorator at the top of the chain.
> `public` **topReferences**: [IReferences](../../../components/refer/ireferences)

</span>


### Instance methods

#### find
Gets all component references that match the specified locator.
Throws a [ReferenceException](../../../components/refer/reference_exception) when required is set to True but no references were found.

> `public` List<Object> find(Object locator, boolean required) throws ReferenceException
- **locator**: Object - locator to find a reference by.
- **required**: boolean - if True, it forces to raise an exception when no reference is found.
- **returns**: List<Object> -  list with matching component references.

#### getAll
Gets all component references registered in this reference map.

> `public` List<Object> getAll()
- **returns**: List<Object> - list with component references.

#### getAllLocators
Gets locators for all registered component references in the reference map.

> `public` List<Object> getAllLocators()
- **returns**: List<Object> - list with component locators.

#### getOneOptional
Gets an optional component reference that matches the specified locator.

> `public` Object getOneOptional(Object locator)
- **locator**: Object - locator to find references by.
- **returns**: Object - matching component reference or null if nothing was found.


#### getOneRequired
Gets a required component reference that matches the specified locator.
Throws a [ReferenceException](../../../components/refer/reference_exception) when no references were found.

> `public` Object getOneRequired(Object locator) throws ReferenceException
- **locator**: Object - locator to find a reference by.
- **returns**: Object - matching component reference.


#### getOptional
Gets all component references that match the specified locator.

> `public` List<Object> getOptional(Object locator)
- **locator**: Object - locator to find references by.
- **returns**: List<Object> - list with matching component references or empty list if nothing was found.


#### getRequired
Gets all component references that match the specified locator.
At least one component reference must be present.
Throws a [ReferenceException](../../../components/refer/reference_exception) when no references were found.

> `public` List<Object> getRequired(Object locator) throws ReferenceException
- **locator**: Object - locator to find references by.
- **returns**: List<Object> - list with matching component references.


#### put
Puts a new reference into the reference map.

> `public` void put(Object locator, Object component) throws ApplicationException
- **locator**: Object - locator to find the reference by.
- **reference**: Object - component reference to be added.


#### remove
Removes a previously added component that matches the specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use **removeAll** method instead.

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
