---
type: docs
title: "IReferences"
linkTitle: "IReferences"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Interface to manage references stored in a map.

---

### Description

The IReferences interface can be used to manage references stored in a map, and which can be passed to other components to establish dependencies between them.

Generally speaking, an IReferences object is a simple map, where keys are locators and values are component references. Thus, it allows you to add, remove and find components    by their locators. Locators can be any values like integers, strings or component types. 

Important points

- Together with [IReferenceable](../ireferenceable) and [IUnreferenceable](../iunreferenceable) interfaces it implements a Locator pattern that is used by PipServices toolkit for Inversion of Control to assign external dependencies to components. 
- Generally, the PipServices toolkit uses [Descriptor](../descriptor) as locators that match according to the following fields: group, type, kind, name and version.
 
### Instance methods

#### find
Gets all component references that match specified locator.  
Throws a [ReferenceException](../reference_exception) when required is set to true but no references found.

> find(locator: Any, required: bool): List[Any]

- **locator**: Any - the locator to find a reference by.
- **required**: bool - forces to raise an exception if no reference is found.
- **returns**:List[Any] - a list with matching component references.

#### get_all
Gets all component references registered in this reference map.

> get_all(): List[Any]

- **returns**: List[Any] - a list with component references.

#### get_all_locators
Gets locators for all registered component references in this reference map.

> get_all_locators(): List[Any]

- **returns**: List[Any] - a list with component locators.

#### get_one_optional
Gets an optional component reference that matches specified locator.

> get_one_optional(locator: Any): Any

- **locator**: Any - the locator to find references by.
- **returns**: Any - a matching component reference or null if nothing was found.

#### get_one_required
Gets a required component reference that matches specified locator.  
Throws a [ReferenceException](../reference_exception) when no references found.

> get_one_required(locator: Any): Any

- **locator**: Any - the locator to find a reference by.
- **returns**: Any - a matching component reference.

#### get_optional
Gets all component references that match specified locator.

> get_optional(locator: Any): List[Any]

- **locator**: Any - the locator to find references by.	 
- **returns**: List[Any] - a list with matching component references or empty list if nothing was found.

#### get_required
Gets all component references that match specified locator.
At least one component reference must be present.
If it doesn't the method throws an error.  
Throws a [ReferenceException](../reference_exception) when no references found.

> get_required(locator: Any): List[Any]

- **locator**: Any - the locator to find references by.
- **returns**: List[Any] - a list with matching component references.


#### put
Puts a new reference into this reference map.

> put(locator: Any, component: Any)

- **locator**: Any - a locator to find the reference by.
- **component**: Any - a component reference to be added.

#### remove
Removes a previously added reference that matches specified locator.
If many references match the locator, it removes only the first one.
When all references shall be removed, use [removeAll](#removeall) method instead.

> remove(locator: Any): Any

- **locator**: Any - a locator to remove reference
- **returns**: Any - the removed component reference.


#### remove
Removes all component references that match the specified locator. 

> removeAll(locator: Any): List[Any]

- **locator**: Any - the locator to remove references by.
- **returns**: List[Any] - a list, containing all removed references.

### Examples

```python
class MyController(IReferences):
    _persistence = None

    def set_references(self, references):
        self._persistence = references.get_one_required(Descriptor("mygroup", "persistence", "*", "*", "1.0"))

persistence = MyMongoDbPersistence()

references = References.from_tuples(
        Descriptor("mygroup", "persistence", "mongodb", "default", "1.0"), persistence,
        Descriptor("mygroup", "controller", "default", "default", "1.0"), controller
    )

controller.set_references(references)
```


### See also
- #### [Descriptor](../descriptor)
- #### [References](../references)
