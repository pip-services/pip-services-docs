---
type: docs
title: "References"
linkTitle: "References"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-components-java"
description: >
    An implementation of [IReferences](../ireferences) that allows you to store and locate component references.
---

**Implements**: [IReferences](../ireferences)

### Description

The References class allows you to store and locate component references.

### Constructors
Creates a new instance of References and initializes it with references.

> `public` References(Object[] tuples)

- **tuples**: Object[] - (optional) list of values where odd elements are locators and the following even elements are component references.

### Fields
<span class="hide-title-link">

#### _references
 A list of values where odd elements are locators and the following even elements are component references.
> `protected` List<[Reference](../reference)> **_references** = new ArrayList<>()

</span>

### Instance methods

#### find
Gets all component references that match a specified locator.  
Throws a [ReferenceException](../reference_exception) when required is set to true but no references were found.

> `public` List<Object> find(Object locator, boolean required) throws ReferenceException

- **locator**: Object - locator to find a reference by.
- **required**: boolean - forces to raise an exception if no reference is found.
- **returns**: List<Object> - list with matching component references.

#### getAll
Gets all component references registered in this reference map.

> `public` List<Object> getAll()

- **returns**: List<Object> - list with component references.

#### getAllLocators
Gets locators for all registered component references in this reference map.

> `public` List<Object> getAllLocators()

- **returns**: List<Object> - list with component locators.

#### getOneOptional
Gets an optional component reference that matches a specified locator.

> `public` <T> T getOneOptional(Class<T> type, Object locator)

- **type**: the Class type that defined the type of the result.
- **locator**: Object - locator to find references by.
- **returns**: Object - matching component reference or null if nothing was found.

#### getOneRequired
Gets a required component reference that matches specified locator.  
throws a [ReferenceException](../reference_exception) when no references found.

> `public` <T> T getOneRequired(Class<T> type, Object locator) throws ReferenceException

- **type**: the Class type that defined the type of the result.
- **locator**: Object - locator to find a reference by.	 
- **returns**: T - matching component reference.

#### getOptional
Gets all component references that match a specified locator.

> `public` List<Object> getOptional(Object locator)

- **locator**: Object - locator to find references by.	 
- **returns**: List<Object> - list with matching component references or empty list if nothing was found.

#### getRequired
Gets all component references that match a specified locator.
At least one component reference must be present.
If it doesn't the method throws an error.
Throws a [ReferenceException](../reference_exception) when no references found.

> `public` Object getOneRequired(Object locator) throws ReferenceException

- **locator**: Object - locator to find references by.
- **returns**: Object - list with matching component references.

#### put
Puts a new reference into this reference map.

> `public` void put(Object locator, Object component) throws NullPointerException

- **locator**: Object - locator to find the reference by.
- **component**: Object - component reference to be added.


#### remove
Removes a previously added reference that matches specified locator.
If mObject references match the locator, it removes only the first one.
When all references shall be removed, use [removeAll](#removeall) method instead.

> `public` Object remove(Object locator)

- **locator**: Object - locator to remove reference
- **returns**: Object - removed component reference.

#### removeAll
Removes all component references that match the specified locator. 

> `public` List<Object> removeAll(Object locator)

- **locator**: Object - locator to remove references by.
- **returns**: List<Object> - list containing all removed references.

### Static methods

#### fromTuples
Creates a new References from a list of key-value pairs called tuples.

> `public static` [References](../references) fromTuples(Object... tuples) throws ReferenceException

- **tuples**: Object... - list of values where odd elements are locators and the following even elements are component references
- **returns**: [References](../references) - newly created References.

### Examples

```java

{
   public class MyController implements IReferenceable {
      public IMyPersistence _persistence;
      ...
      public void setReferences(IReferences references) {
        this._persistence = (IMyPersistence)references.getOneRequired(
          new Descriptor("mygroup", "persistence", "*", "*", "1.0")
        );
      }
      ...
   }
 
   MyMongoDbPersistence persistence = new MyMongoDbPersistence();
 
   MyController controller = new MyController();
 
   References references = References.fromTuples(
     new Descriptor("mygroup", "persistence", "mongodb", "default", "1.0"), persistence,
     new Descriptor("mygroup", "controller", "default", "default", "1.0"), controller
   );
   controller.setReferences(references);
   }

```

### See also
- #### [IReferences](../ireferences)
