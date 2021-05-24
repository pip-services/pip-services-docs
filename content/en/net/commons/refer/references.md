---
type: docs
title: "References"
linkTitle: "References"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    An implementation of [IReferences](../ireferences) that allows you to store and locate component references.
---

**Inherits**: [IReferences](../ireferences)

### Description

The References class allows you to store and locate component references.

### Constructors
Creates a new instance of references and initializes it with references.

> `public` References(object[] tuples)

- **tuples**: object[] - (optional) a list of values where odd elements are locators and the following even elements are component references

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
Gets all component references that match specified locator.
Throws a [ReferenceException](../reference_exception) when required is set to true but no references found.
**T** - the class type

> `public virtual` List\<object\> Find(object locator, bool required)

- **locator**: object - the locator to find a reference by.
- **required**: bool - forces to raise an exception if no reference is found.
- **returns**: List\<object\> - a list with matching component references.


#### Find
Gets all component references that match specified locator and matching to the specified type.
Throws a [ReferenceException](../reference_exception) when required is set to true but no references found.
**T** - the class type

> `public virtual` List\<T\> Find\<T\>(object locator, bool required)

- **locator**: object - the locator to find a reference by.
- **required**: bool - forces to raise an exception if no reference is found.
- **returns**: List\<T\> - a list with matching component references.

#### GetAll
Gets all component references registered in this reference map.

> `public virtual` List\<object\> GetAll()

- **returns**: List\<object\> - a list with component references.

#### GetAllLocators
Gets locators for all registered component references in this reference map.

> `public virtual` List\<object\> GetAllLocators()

- **returns**: List\<object\> - a list with component locators.

#### GetOneOptional
Gets an optional component reference that matches specified locator.

> `public virtual` object GetOneOptional(object locator)

- **locator**: object - the locator to find references by.
- **returns**: object - a matching component reference or null if nothing was found.


#### GetOneOptional
Gets an optional component reference that matches specified locator and matching to the specified type.
**T** - the class type

> `public virtual` T GetOneOptional\<T\>(object locator)

- **locator**: object - the locator to find references by.
- **returns**: T - a matching component reference or null if nothing was found.

#### GetOneRequired
Gets a required component reference that matches specified locator.
throws a [ReferenceException](../reference_exception) when no references found.

> `public virtual` object GetOneRequired(object locator)

- **locator**: object - the locator to find a reference by.	 
- **returns**: object - a matching component reference.

#### GetOneRequired
Gets a required component reference that matches specified locator and matching to the specified type. 
throws a [ReferenceException](../reference_exception) when no references found.

> `public virtual` T GetOneRequired\<T\>(object locator)

- **locator**: object - the locator to find a reference by.	 
- **returns**: T - a matching component reference.

#### GetOptional
Gets all component references that match specified locator.

> `public virtual` List\<object\> GetOptional(object locator)

- **locator**: object - the locator to find references by.	 
- **returns**: List\<object\> - a list with matching component references or empty list if nothing was found.

#### GetOptional
Gets all component references that match specified locator and matching to the specified type.
**T** - the class type

> `public virtual` List\<T\> GetOptional\<T\>(object locator)

- **locator**: object - the locator to find references by.	 
- **returns**: List\<T\> - a list with matching component references or empty list if nothing was found.

#### GetRequired
Gets all component references that match specified locator. 
At least one component reference must be present.
If it doesn't the method throws an error.
Throws a [ReferenceException](../reference_exception) when no references found.

> `public virtual` List\<object\> GetRequired(object locator)

- **locator**: object - the locator to find references by.
- **returns**: List\<object\> - a list with matching component references.0


#### GetRequired
Gets all component references that match specified locator. 
At least one component reference must be present and matching to the specified type.
If it doesn't the method throws an error.
Throws a [ReferenceException](../reference_exception) when no references found.
**T** - the class type

> `public virtual` List\<T\> GetRequired\<T\>(object locator)

- **locator**: object - the locator to find references by.
- **returns**: List\<T\> - a list with matching component references.

#### Put
Puts a new reference into this reference map.

> `public virtual` void Put(object locator, object component)

- **locator**: object  - a locator to find the reference by.
- **component**: object  - a component reference to be added.


#### Remove
Removes a previously added reference that matches specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use [RemoveAll](#removeall) method instead.

> `public virtual` object Remove(object locator)

- **locator**: object  - a locator to remove reference
- **returns**: object  - the removed component reference.

#### removeAll
Removes all component references that match the specified locator. 

> `public virtual` List\<object\> removeAll(object locator)

- **locator**: object  - the locator to remove references by.
- **returns**: List\<object\> - a list, containing all removed references.

### Static methods

#### FromTuples
Creates a new References from a list of key-value pairs called tuples.

> `public static` [References](../references) FromTuples(params object[] tuples)

- **tuples**: object[] - a list of values where odd elements are locators and the following even elements are component references
- **returns**: [References](../references) - a newly created References.

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
