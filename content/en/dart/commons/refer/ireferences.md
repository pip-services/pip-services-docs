---
type: docs
title: "IReferences"
linkTitle: "IReferences"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Interface to manage references stored in a map.

---

### Description

The IReferences interface can be used to manage references stored in a map, and which can be passed to other components to establish dependencies between them.

Generally speaking, an IReferences object is a simple map, where keys are locators and values are component references. Thus, it allows you to add, remove and find components    by their locators. Locators can be any values like integers, strings or component types. 

**Important points**

- Together with [IReferenceable](../ireferenceable) and [IUnreferenceable](../iunreferenceable) interfaces, it implements a Locator pattern that is used by PipServices toolkit for Inversion of Control to assign external dependencies to components. 
- Generally, the PipServices toolkit uses [Descriptor](../descriptor) as locators that match according to the following fields: group, type, kind, name and version.
 
### Instance methods

#### find
Gets all component references that match a specified locator.  
Throws a [ReferenceException](../reference_exception) when required is set to true but no references found.

> List\<T\> find\<T\>(locator, bool required)

- **locator**: dynamic - the locator to find a reference by.
- **required**: bool - forces to raise an exception if no reference is found.
- **returns**: List\<T\> - list with matching component references.

#### getAll
Gets all component references registered in this reference map.

> List getAll()

- **returns**: List - list with component references.

#### getAllLocators
Gets locators for all registered component references in this reference map.

> List getAllLocators()

- **returns**: List - list with component locators.

#### getOneOptional
Gets an optional component reference that matches specified locator.

> T getOneOptional\<T\>(locator)

- **locator**: dynamic - locator to find references by.
- **returns**: T - matching component reference or null if nothing was found.

#### getOneRequired
Gets a required component reference that matches a specified locator.  
Throws a [ReferenceException](../reference_exception) when no references found.

> T getOneRequired\<T\>(locator)

- **locator**: dynamic - locator to find a reference by.
- **returns**: T - matching component reference.

#### getOptional
Gets all component references that match a specified locator.

> List\<T\> getOptional\<T\>(locator)

- **locator**: dynamic - locator to find references by.	 
- **returns**: List\<T\> - list with matching component references or empty list if nothing was found.

#### getRequired
Gets all component references that match a specified locator.
At least one component reference must be present.
If it doesn't, the method throws an error.  
Throws a [ReferenceException](../reference_exception) when no references found.

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
When all references shall be removed, use the [removeAll](#removeall) method instead.

> dynamic remove(locator)

- **locator**: dynamic - locator to remove reference
- **returns**: dynamic - removed component reference.


#### removeAll
Removes all component references that match the specified locator. 

> List removeAll(locator)

- **locator**: dynamic - locator to remove references by.
- **returns**: List - list, containing all removed references.

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
- #### [Descriptor](../descriptor)
- #### [References](../references)
