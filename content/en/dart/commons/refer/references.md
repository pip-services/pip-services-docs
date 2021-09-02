---
type: docs
title: "References"
linkTitle: "References"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    An implementation of [IReferences](../ireferences) that allows you to store and locate component references.
---

**Implements**: [IReferences](../ireferences)

### Description

The References class allows you to store and locate component references.

### Constructors
Creates a new instance of References and initializes it with references.

> References([List tuples])

- **tuples**: List - (optional) list of values where odd elements are locators and the following even elements are component references.

### Fields
<span class="hide-title-link">

#### _references
A list of values where odd elements are locators and the following even elements are component references.
> `final` **_references** = <[Reference](../reference)>[]

</span>

### Instance methods

#### find
Gets all component references that match a specified locator.  
Throws a [ReferenceException](../reference_exception) when required is set to true but no references were found.

`@override`
> List\<T\> find\<T\>(locator, bool required)

- **locator**: dynamic - locator to find a reference by.
- **required**: bool - forces to raise an exception if no reference is found.
- **returns**: List\<T\> - list with matching component references.

#### getAll
Gets all component references registered in this reference map.

`@override`
> List getAll()

- **returns**: List - list with component references.

#### getAllLocators
Gets locators for all registered component references in this reference map.

`@override`
> List getAllLocators()

- **returns**: List - list with component locators.

#### getOneOptional
Gets an optional component reference that matches a specified locator.

`@override`
> T getOneOptional\<T\>(locator)

- **locator**: dynamic - locator to find references by.
- **returns**: T - matching component reference or null if nothing was found.

#### getOneRequired
Gets a required component reference that matches specified locator.  
Throws a [ReferenceException](../reference_exception) when no references were found.

`@override`
> T getOneRequired\<T\>(locator)

- **locator**: dynamic - locator to find a reference by.	 
- **returns**: T - matching component reference.

#### getOptional
Gets all component references that match a specified locator.

`@override`
> List\<T\> getOptional\<T\>(locator)

- **locator**: dynamic - locator to find references by.	 
- **returns**: List\<T\> - list with matching component references or empty list if nothing was found.

#### getRequired
Gets all component references that match a specified locator.
At least one component reference must be present.
If it doesn't, the method throws an error.
Throws a [ReferenceException](../reference_exception) when no were references found.

> List\<T\> getRequired\<T\>(locator)

- **locator**: dynamic - locator to find references by.
- **returns**: List\<T\> - list with matching component references.

#### put
Puts a new reference into this reference map.

> void put(locator, component)

- **locator**: dynamic - locator to find the reference by.
- **component**: dynamic - component reference to be added.


#### remove
Removes a previously added reference that matches a specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use [removeAll](#removeall) method instead.

> dynamic remove(locator)

- **locator**: dynamic - locator to remove reference
- **returns**: dynamic - removed component reference.

#### removeAll
Removes all component references that match a specified locator. 

> List removeAll(locator)

- **locator**: dynamic - locator to remove references by.
- **returns**: List - list containing all removed references.

### Static methods

#### fromTuples
Creates a new References object from a list of key-value pairs called tuples.

> `static` [References](../references) fromTuples(List tuples)

- **tuples**: List - list of values where odd elements are locators and the following even elements are component references
- **returns**: [References](../references) - newly created References.

### Examples

```dart

class MyController implements IReferenceable {
    IMyPersistence persistence;
    ...
    void setReferences(IReferences references) {
        persistence = references.getOneRequired<IMyPersistence>(
             Descriptor('mygroup', 'persistence', '*', '*', '1.0')
        );
    }
    ...
}
var persistence =  MyMongoDbPersistence();
var controller =  MyController();
var references = References.fromTuples([
     Descriptor('mygroup', 'persistence', 'mongodb', 'default', '1.0'), persistence,
     Descriptor('mygroup', 'controller', 'default', 'default', '1.0'), controller
]);
controller.setReferences(references);

```

### See also
- #### [IReferences](../ireferences)
