---
type: docs
title: "IReferences"
linkTitle: "IReferences"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
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
Gets all component references that match specified locator.  
Throws a [ReferenceError](../reference_error) when required is set to true but no references found.

> Find(locator interface{}, required bool) ([]interface{}, error)

- **locator**: interface{} - the locator to find a reference by.
- **required**: bool - forces to raise an exception if no reference is found.
- **returns**: ([]interface{}, error) - a list with matching component references.

#### GetAll
Gets all component references registered in this reference map.

> GetAll() []interface{}

- **returns**: []interface{} - a list with component references.

#### GetAllLocators
Gets locators for all registered component references in this reference map.

> GetAllLocators() []interface{}

- **returns**: []interface{} - a list with component locators.

#### GetOneOptional
Gets an optional component reference that matches specified locator.

> GetOneOptional(locator interface{}) interface{}

- **locator**: interface{} - the locator to find references by.
- **returns**: interface{} - a matching component reference or nil if nothing was found.

#### GetOneRequired
Gets a required component reference that matches specified locator.  
Throws a [ReferenceError](../reference_error) when no references found.

> GetOneRequired(locator interface{}) (interface{}, error)

- **locator**: interface{} - the locator to find a reference by.
- **returns**: (interface{}, error) - a matching component reference.

#### GetOptional
Gets all component references that match specified locator.

> GetOptional(locator interface{}) []interface{}

- **locator**: interface{} - the locator to find references by.	 
- **returns**: []interface{} - a list with matching component references or empty list if nothing was found.

#### GetRequired
Gets all component references that match specified locator.
At least one component reference must be present.
If it doesn't the method throws an error.  
Throws a [ReferenceError](../reference_error) when no references found.

> GetRequired(locator interface{}) ([]interface{}, error)

- **locator**: ([]interface{}, error) - the locator to find references by.
- **returns**: interface{} - a list with matching component references.


#### Put
Puts a new reference into this reference map.

> Put(locator interface{}, component interface{})

- **locator**: interface{} - a locator to find the reference by.
- **component**: interface{} - a component reference to be added.

#### Remove
Removes a previously added reference that matches specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use [removeAll](#removeall) method instead.

> Remove(locator interface{}) interface{}

- **locator**: interface{} - a locator to remove reference
- **returns**: interface{} - the removed component reference.


#### RemoveAll
Removes all component references that match the specified locator. 

> RemoveAll(locator interface{}) []interface{}

- **locator**: interface{} - the locator to remove references by.
- **returns**: []interface{} - a list, containing all removed references.

### Examples

```go
TODO: add example

```


### See also
- #### [Descriptor](../descriptor)
- #### [References](../references)
