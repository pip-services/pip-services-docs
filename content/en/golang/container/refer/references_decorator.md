---
type: docs
title: "ReferencesDecorator"
linkTitle: "ReferencesDecorator"
gitUrl: "https://github.com/pip-services3-go/pip-services3-container-go"
description: >
    Chainable decorator for IReferences that allows to inject additional capabilities
    such as automatic component creation, automatic registration and opening.
---

**Implements:** [IReferences](../../../commons/refer/ireferences)

### Description

The ReferencesDecorator class allows you to create chainable decorators for IReferences that allow to inject addtional capabilities, such as automatic component creation, automatic registration and opening.

### Constructors

#### NewReferencesDecorator
Creates a new instance of the decorator.

> NewReferencesDecorator(nextReferences [IReferences](../../../commons/refer/ireferences), topReferences [IReferences](../../../commons/refer/ireferences)) [*ReferencesDecorator]()

- **nextReferences**: [IReferences](../../../commons/refer/ireferences) - next references or decorator in the chain.
- **topReferences**: [IReferences](../../../commons/refer/ireferences) - decorator at the top of the chain.


### Fields

<span class="hide-title-link">

#### NextReferences
Next references or decorator in the chain.
> **NextReferences**: [IReferences](../../../commons/refer/ireferences)

#### TopReferences
Decorator at the top of the chain.
> **TopReferences**: [IReferences](../../../commons/refer/ireferences)

</span>


### Methods

#### Find
Gets all component references that match the specified locator.
Throws a [ReferenceException](../../../commons/refer/reference_exception) when required is set to True but no references were found.

> (c [*ReferencesDecorator]()) Find(locator interface{}, required bool) ([]interface{}, error)
- **locator**: interface{} - locator to find a reference by.
- **required**: bool - if True, it forces to raise an exception when no reference is found.
- **returns**: ([]interface{}, error) -  list with matching component references.

#### GetAll
Gets all component references registered in this reference map.

> (c [*ReferencesDecorator]()) GetAll() []interface{}
- **returns**: []interface{} - list with component references.

#### GetAllLocators
Gets locators for all registered component references in the reference map.

> (c [*ReferencesDecorator]()) GetAllLocators() []interface{}
- **returns**: []interface{} - list with component locators.

#### GetOneOptional
Gets an optional component reference that matches the specified locator.

> (c [*ReferencesDecorator]()) GetOneOptional(locator interface{}) interface{}
- **locator**: interface{} - locator to find references by.
- **returns**: interface{} - matching component reference or nil if nothing was found.


#### GetOneRequired
Gets a required component reference that matches the specified locator.
Throws a [ReferenceException](../../../commons/refer/reference_exception) when no references were found.

> (c [*ReferencesDecorator]()) GetOneRequired(locator interface{}) (interface{}, error)
- **locator**: interface{} - locator to find a reference by.
- **returns**: (interface{}, error) - matching component reference.


#### GetOptional
Gets all component references that match the specified locator.

> (c [*ReferencesDecorator]()) GetOptional(locator interface{}) []interface{}
- **locator**: interface{} - locator to find references by.
- **returns**: []interface{} - list with matching component references or empty list if nothing was found.


#### GetRequired
Gets all component references that match the specified locator.
At least one component reference must be present.
Throws a [ReferenceException](../../../commons/refer/reference_exception) when no references were found.

> (c [*ReferencesDecorator]()) GetRequired(locator interface{}) ([]interface{}, error)
- **locator**: interface{} - locator to find references by.
- **returns**: ([]interface{}, error) - list with matching component references.


#### Put
Puts a new reference into the reference map.

> (c [*ReferencesDecorator]()) Put(locator interface{}, component interface{})
- **locator**: interface{} - locator to find the reference by.
- **reference**: interface{} - component reference to be added.


#### Remove
Removes a previously added component that matches the specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use **RemoveAll** method instead.

> (c [*ReferencesDecorator]()) Remove(locator interface{}) interface{}
- **locator**: interface{} - locator to remove component
- **returns**: interface{} - removed component.


#### RemoveAll
Removes all component references that match the specified locator.

> (c [*ReferencesDecorator]()) RemoveAll(locator interface{}) []interface{}
- **locator**: interface{} - locator to remove references by.
- **returns**: []interface{} - list containing all removed references.

### See also
- #### [IReferences](../../../commons/refer/ireferences)
