---
type: docs
title: "IReferences"
linkTitle: "IReferences"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Interface to manage references stored in a map.

---

### Description

The IReferences interface can be used to manage references stored in a map, and which can be passed to other components to establish dependencies between them.

Generally speaking, an IReferences object is a simple map, where keys are locators and values are component references. Thus, it allows you to add, remove and find components    by their locators. Locators can be any values like integers, strings or component types. 

Important points

- Together with the [IReferenceable](../ireferenceable) and [IUnreferenceable](../iunreferenceable) interfaces, it implements a Locator pattern that is used by the PipServices toolkit for Inversion of Control to assign external dependencies to components. 
- Generally, the PipServices toolkit uses [Descriptor](../descriptor) as locators that match according to the following fields: group, type, kind, name and version.
 
### Instance methods

#### Find
Gets all component references that match a specified locator. 
Throws a [ReferenceException](../reference_exception) when required is set to true but no references were found.

> List\<object\> Find(object locator, bool required)

- **locator**: object - locator to find a reference by.
- **required**: bool - forces to raise an exception if no reference is found.
- **returns**: List\<object\> - list with matching component references.

#### Find
Gets all component references that match a specified locator and matching to the specified type.
Throws a [ReferenceException](../reference_exception) when required is set to true but no references were found.
**T** - the class type.

> List\<T\> Find\<T\>(object locator, bool required)

- **locator**: object - locator used to find a reference by.
- **required**: bool - forces to raise an exception if no reference is found.
- **returns**: List\<T\> - list with matching component references.

#### GetAll
Gets all component references registered in this reference map.

> List\<object\> GetAll()

- **returns**: List\<object\> - list with component references.

#### GetAllLocators
Gets locators for all registered component references in this reference map.

> List\<object\> GetAllLocators()

- **returns**: List\<object\> - list with component locators.

#### GetOneOptional
Gets an optional component reference that matches a specified locator.

> object GetOneOptional(object locator)

- **locator**: object - locator used to find references by.
- **returns**: object - matching component reference or null if nothing was found.


#### GetOneOptional
Gets an optional component reference that matches a specified locator and matching to the specified type.

> T GetOneOptional\<T\>(object locator)

- **locator**: object - locator used to find references by.
- **returns**: T - matching component reference or null if nothing was found.


#### GetOneRequired
Gets a required component reference that matches a specified locator.  
Throws a [ReferenceException](../reference_exception) when no references were found.

> object GetOneRequired(object locator)

- **locator**: object  - locator to find a reference by.
- **returns**: object  - matching component reference.


#### GetOneRequired
Gets a required component reference that matches a specified locator and matching to the specified type.
Throws a [ReferenceException](../reference_exception) when no references were found.
**T** - class type

> T GetOneRequired\<T\>(object locator)

- **locator**: object - locator used to find a reference by.
- **returns**: T - matching component reference.


#### GetOptional
Gets all component references that match a specified locator.

> List\<object\> GetOptional(object locator)

- **locator**: object - locator used to find references by.	 
- **returns**: List\<object\> - list with matching component references or empty list if nothing was found.


#### GetOptional
Gets all component references that match a specified locator and matching to the specified type.
**T** - class type

> List\<T\> GetOptional\<T\>(object locator)

- **locator**: object - locator used to find references by.	 
- **returns**: List\<T\> - list with matching component references or empty list if nothing was found.


#### GetRequired
Gets all component references that match a specified locator. 
At least one component reference must be present.
If it doesn't, the method throws an error. 
Throws a [ReferenceException](../reference_exception) when no references were found.

> List\<object\> GetRequired(object locator)

- **locator**: object - locator used to find references by.
- **returns**: List\<object\>- list with matching component references.


#### GetRequired
Gets all component references that match a specified locator. 
At least one component reference must be present and matching to the specified type.
Throws a [ReferenceException](../reference_exception) when no references were found.
**T** - class type

> List\<T\> GetRequired\<T\>(object locator)

- **locator**: object - locator used to find references by.
- **returns**: List\<T\> - list with matching component references.


#### Put
Puts a new reference into this reference map.

> void Put(object locator, object component)

- **locator**: object - locator used to find the reference by.
- **component**: object - component reference to be added.

#### Remove
Removes a previously added reference that matches a specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use [removeAll](#removeall) method instead.

> object Remove(object locator)

- **locator**: object - locator used to remove reference
- **returns**: object - removed component reference.


#### RemoveAll
Removes all component references that match the specified locator. 

> List\<object\> RemoveAll(object locator)

- **locator**: object - locator used to remove references by.
- **returns**: List\<object\> - list containing all the removed references.

### Examples

```cs
public class MyController: IReferenceable 
{
    public IMyPersistence _persistence;
    ...    
    public void SetReferences(IReferences references)
    {
        this._persistence = references.getOneRequired<IMyPersistence>(
        new Descriptor("mygroup", "persistence", "*", "*", "1.0")
        );
    }
    ...
}
var persistence = new MyMongoDbPersistence();
var controller = new MyController();
var references = References.FromTuples(
new Descriptor("mygroup", "persistence", "mongodb", "default", "1.0"), persistence,
new Descriptor("mygroup", "controller", "default", "default", "1.0"), controller );
controller.SetReferences(references);

```


### See also
- #### [Descriptor](../descriptor)
- #### [References](../references)
