---
type: docs
title: "ReferencesDecorator"
linkTitle: "ReferencesDecorator"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-container-dotnet"
description: >
    Chainable decorator for IReferences that allows to inject additional capabilities
    such as automatic component creation, automatic registration and opening.
---

**Inherits:** [IReferences](../../../commons/refer/ireferences)

### Description

The ReferencesDecorator class allows you to create chainable decorators for IReferences that allow to inject addtional capabilities, such as automatic component creation, automatic registration and opening.

### Constructors
Creates a new instance of the decorator.

> `public` ReferencesDecorator([IReferences](../../../commons/refer/ireferences) baseReferences = null, [IReferences](../../../commons/refer/ireferences) parentReferences = null)

- **baseReferences**: [IReferences](../../../commons/refer/ireferences) - next references or decorator in the chain.
- **parentReferences**: [IReferences](../../../commons/refer/ireferences) - decorator at the top of the chain.

### Properties


#### BaseReferences
Next references or decorator in the chain.
> `public` [IReferences](../../../commons/refer/ireferences) BaseReferences [ get, set ]

#### ParentReferences
Decorator at the top of the chain.
> `public` [IReferences](../../../commons/refer/ireferences) ParentReferences [ get, set ]



### Instance methods

#### Find
Gets all component references that match the specified locator.
Throws a [ReferenceException](../../../commons/refer/reference_exception) when required is set to True but no references were found.

> `public virtual` List\<object\> Find(object locator, bool required)
- **locator**: object - locator to find a reference by.
- **required**: bool - if True, it forces to raise an exception when no reference is found.
- **returns**: List\<object\> -  list with matching component references.

#### GetAll
Gets all component references registered in this reference map.

> `public virtual` List\<object\> GetAll()
- **returns**: List\<object\> - list with component references.

#### GetAllLocators
Gets locators for all registered component references in the reference map.

> `public virtual` List\<object\> GetAllLocators()
- **returns**: List\<object\> - list with component locators.

#### GetOneOptional
Gets an optional component reference that matches the specified locator.

> `public virtual` object GetOneOptional(object locator)
- **locator**: object - locator to find references by.
- **returns**: object - matching component reference or null if nothing was found.

> `public virtual` T GetOneOptional\<T\>(object locator)
- **locator**: object - the locator to find references by.
- **returns**: T - a matching component reference or null if nothing was found.


#### GetOneRequired
Gets a required component reference that matches the specified locator.
Throws a [ReferenceException](../../../commons/refer/reference_exception) when no references were found.

> `public virtual` object GetOneRequired(object locator)
- **locator**: object - locator to find a reference by.
- **returns**: object - matching component reference.

Gets a required component reference that matches specified locator.

> `public virtual` T GetOneRequired\<T\>(object locator)

- **locator**: object - the locator to find a reference by.
- **returns**: T - matching component reference.


#### GetOptional
Gets all component references that match the specified locator.

> `public virtual` List\<object\> GetOptional(object locator)
- **locator**: List\<object\> - locator to find references by.
- **returns**: object - list with matching component references or empty list if nothing was found.


#### GetRequired
Gets all component references that match the specified locator.
At least one component reference must be present.
Throws a [ReferenceException](../../../commons/refer/reference_exception) when no references were found.

> `public virtual` List\<object\> GetRequired(object locator)
- **locator**: object - locator to find references by.
- **returns**: List\<object\> - list with matching component references.


#### Put
Puts a new reference into the reference map.

> `public virtual` void Put(object locator, object component)
- **locator**: object - locator to find the reference by.
- **reference**: object - component reference to be added.


#### Remove
Removes a previously added component that matches the specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use **RemoveAll** method instead.

> `public virtual` object Remove(object locator)
- **locator**: object - locator to remove component
- **returns**: object - removed component.


#### removeAll
Removes all component references that match the specified locator.

> `public virtual` List\<object\> RemoveAll(object locator)
- **locator**: object - locator to remove references by.
- **returns**: List\<object\> - list containing all removed references.

### See also
- #### [IReferences](../../../commons/refer/ireferences)
