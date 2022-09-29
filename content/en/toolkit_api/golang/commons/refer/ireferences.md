---
type: docs
title: "IReferences"
linkTitle: "IReferences"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    Interface to manage references stored in a map.

---

### Description

The IReferences interface can be used to manage references stored in a map, and which can be passed to other components to establish dependencies between them.

Generally speaking, an IReferences object is a simple map, where keys are locators and values are component references. Thus, it allows you to add, remove and find components    by their locators. Locators can be any values like integers, strings or component types. 

Important points

- Together with [IReferenceable](../ireferenceable) and [IUnreferenceable](../iunreferenceable) interfaces it implements a Locator pattern that is used by PipServices toolkit for Inversion of Control to assign external dependencies to components. 
- Generally, the PipServices toolkit uses [Descriptor](../descriptor) as locators that match according to the following fields: group, type, kind, name and version.
 
### Methods

#### Find
Gets all component references that match a specified locator.  
Throws a [ReferenceError](../reference_error) when required is set to true but no references found.

> Find(locator any, required bool) ([]any, error)

- **locator**: any - locator to find a reference by.
- **required**: bool - forces to raise an exception if no reference is found.
- **returns**: ([]any, error) - list with matching component references.

#### GetAll
Gets all component references registered in this reference map.

> GetAll() []any

- **returns**: []any - list with component references.

#### GetAllLocators
Gets locators for all registered component references in this reference map.

> GetAllLocators() []any

- **returns**: []any - list with component locators.

#### GetOneOptional
Gets an optional component reference that matches specified locator.

> GetOneOptional(locator any) any

- **locator**: any - locator to find references by.
- **returns**: any - matching component reference or nil if nothing was found.

#### GetOneRequired
Gets a required component reference that matches a specified locator.  
Throws a [ReferenceError](../reference_error) when no references found.

> GetOneRequired(locator any) (any, error)

- **locator**: any - locator to find a reference by.
- **returns**: (any, error) - matching component reference.

#### GetOptional
Gets all component references that match specified locator.

> GetOptional(locator any) []any

- **locator**: any - locator to find references by.	 
- **returns**: []any - list with matching component references or empty list if nothing was found.

#### GetRequired
Gets all component references that match a specified locator.
At least one component reference must be present.
If it doesn't the method throws an error.  
Throws a [ReferenceError](../reference_error) when no references found.

> GetRequired(locator any) ([]any, error)

- **locator**: ([]any, error) - locator to find references by.
- **returns**: any - list with matching component references.


#### Put
Puts a new reference into this reference map.

> Put(ctx context.Context, locator any, component any)

- **ctx**: context.Context - operation context.
- **locator**: any - locator to find the reference by.
- **component**: any - component reference to be added.

#### Remove
Removes a previously added reference that matches a specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use [removeAll](#removeall) method instead.

> Remove(ctx context.Context, locator any) any

- **ctx**: context.Context - operation context.
- **locator**: any - locator to remove reference
- **returns**: any - removed component reference.


#### RemoveAll
Removes all component references that match the specified locator. 

> RemoveAll(ctx context.Context, locator any) []any

- **ctx**: context.Context - operation context.
- **locator**: any - locator to remove references by.
- **returns**: []any - list, containing all removed references.


### See also
- #### [Descriptor](../descriptor)
- #### [References](../references)
