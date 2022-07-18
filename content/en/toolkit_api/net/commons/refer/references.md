---
type: docs
title: "References"
linkTitle: "References"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    An implementation of [IReferences](../ireferences) that allows you to store and locate a component's references.
---

**Inherits**: [IReferences](../ireferences)

### Description

The References class allows you to store and locate a component's references.

### Constructors
Creates a new instance of the References class and initializes it with references.

> `public` References(object[] tuples)

- **tuples**: object[] - (optional) list of values where odd elements are locators and the following even elements are component references.

### Fields
<span class="hide-title-link">

#### _references
 A list of values where odd elements are locators and the following even elements are component references.
> `protected` **_references**: List<[Reference](../reference)>

</span>

### Instance methods

#### Clear
Clears this instance.

> `public` void Clear()

#### Find
Gets all component references that match a specified locator.
Throws a [ReferenceException](../reference_exception) when required is set to true but no references were found.
**T** - class type

> `public virtual` List\<object\> Find(object locator, bool required)

- **locator**: object - locator used to find a reference by.
- **required**: bool - if set to true, it forces to raise an exception if no reference is found.
- **returns**: List\<object\> - list with matching component references.


#### Find
Gets all component references that match a specified locator and matching to the specified type.
Throws a [ReferenceException](../reference_exception) when required is set to true but no references were found.
**T** - class type

> `public virtual` List\<T\> Find\<T\>(object locator, bool required)

- **locator**: object - locator used to find a reference by.
- **required**: bool - if set to true, it forces to raise an exception if no reference is found.
- **returns**: List\<T\> - list with matching component references.

#### GetAll
Gets all component's references registered in this reference map.

> `public virtual` List\<object\> GetAll()

- **returns**: List\<object\> - list with the component's references.

#### GetAllLocators
Gets locators for all registered component's references in this reference map.

> `public virtual` List\<object\> GetAllLocators()

- **returns**: List\<object\> - list with component locators.

#### GetOneOptional
Gets an optional component's reference that matches a specified locator.

> `public virtual` object GetOneOptional(object locator)

- **locator**: object - locator used to find references by.
- **returns**: object - matching component reference or null if nothing was found.


#### GetOneOptional
Gets an optional component's reference that matches a specified locator and matching to the specified type.
**T** - the class type

> `public virtual` T GetOneOptional\<T\>(object locator)

- **locator**: object - locator used to find references by.
- **returns**: T - matching component reference or null if nothing was found.

#### GetOneRequired
Gets a required component's reference that matches a specified locator.
throws a [ReferenceException](../reference_exception) when no references found.

> `public virtual` object GetOneRequired(object locator)

- **locator**: object - locator used to find a reference by.	 
- **returns**: object - matching component reference.

#### GetOneRequired
Gets a required component's reference that matches a specified locator and matching to the specified type. 
throws a [ReferenceException](../reference_exception) when no references found.

> `public virtual` T GetOneRequired\<T\>(object locator)

- **locator**: object - locator used to find a reference by.	 
- **returns**: T - matching component reference.

#### GetOptional
Gets all component's references that match specified locator.

> `public virtual` List\<object\> GetOptional(object locator)

- **locator**: object - locator used to find references by.	 
- **returns**: List\<object\> - list with matching component references or empty list if nothing was found.

#### GetOptional
Gets all component's references that match specified locator and matching to the specified type.
**T** - class type

> `public virtual` List\<T\> GetOptional\<T\>(object locator)

- **locator**: object - locator used to find references by.	 
- **returns**: List\<T\> - list with matching component references or empty list if nothing was found.

#### GetRequired
Gets all component references that match a specified locator. 
At least one component's reference must be present.
If it doesn't, the method throws an error.
Throws a [ReferenceException](../reference_exception) when no references were found.

> `public virtual` List\<object\> GetRequired(object locator)

- **locator**: object - locator used to find references by.
- **returns**: List\<object\> - list with matching component references.


#### GetRequired
Gets all component's references that match specified locator. 
At least one component's reference must be present and matching to the specified type.
If it doesn't, the method throws an error.
Throws a [ReferenceException](../reference_exception) when no references were found.
**T** - the class type

> `public virtual` List\<T\> GetRequired\<T\>(object locator)

- **locator**: object - locator used to find references by.
- **returns**: List\<T\> - list with matching component references.

#### Put
Puts a new reference into this reference map.

> `public virtual` void Put(object locator, object component)

- **locator**: object  - locator used to find the reference by.
- **component**: object  - component's reference to be added.


#### Remove
Removes a previously added reference that matches a specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use [RemoveAll](#removeall) method instead.

> `public virtual` object Remove(object locator)

- **locator**: object  - locator used to remove a reference
- **returns**: object  - removed component's reference.

#### removeAll
Removes all component references that match the specified locator. 

> `public virtual` List\<object\> removeAll(object locator)

- **locator**: object  - locator used to remove references by.
- **returns**: List\<object\> - list containing all removed references.

### Static methods

#### FromTuples
Creates a new References from a list of key-value pairs called tuples.

> `public static` [References](../references) FromTuples(params object[] tuples)

- **tuples**: object[] - list of values where odd elements are locators and the following even elements are component references.
- **returns**: [References](../references) - newly created References object.

### Examples

```cs

public class MyController: IReferenceable 
{
    public IMyPersistence _persistence;
    ...    
    public void SetReferences(IReferences references)
    {
        this._persistence = references.getOneRequired<IMyPersistence>(
        new Descriptor("mygroup", "persistence", "*", "*", "1.0") );
    }
    ...
}
var persistence = new MyMongoDbPersistence();
var controller = new MyController();
var references = References.FromTuples(
new Descriptor("mygroup", "persistence", "mongodb", "default", "1.0"), persistence,
new Descriptor("mygroup", "controller", "default", "default", "1.0"), controller);
controller.SetReferences(references);

```

### See also
- #### [IReferences](../ireferences)
