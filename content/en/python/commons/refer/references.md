---
type: docs
title: "References"
linkTitle: "References"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    An implementation of [IReferences](../ireferences) that allows you to store and locate component references.
---

**Implements**: [IReferences](../ireferences)

### Description

The References class allows you to store and locate component references.

### Constructors

Creates a new instance of references and initializes it with references.

> References(tuples: Sequence[Any] = None)

- **tuples**: Sequence[Any] - (optional) a list of values where odd elements are locators and the following even elements are component references

### Fields
<span class="hide-title-link">

#### _references
 A list of values where odd elements are locators and the following even elements are component references.
> _references: List[[Reference](../reference)]

</span>

### Instance methods

#### find
Gets all component references that match specified locator.  
Throws a [ReferenceException](../reference_exception) when required is set to true but no references found.

> find(locator: Any, required: bool): List[Any]

- **locator**: Any - the locator to find a reference by.
- **required**: bool - forces to raise an exception if no reference is found.
- **returns**: List[Any] - a list with matching component references.

#### get_all
Gets all component references registered in this reference map.

> get_all(): List[Any]

- **returns**: List[Any] - a list with component references.

#### get_all_locators
Gets locators for all registered component references in this reference map.

> get_all_locators(): List[Any]

- **returns**: List[Any] - a list with component locators.

#### get_one_optional
Gets an optional component reference that matches a specified locator.

> get_one_optional(locator: Any): Any

- **locator**: Any - the locator to find references by.
- **returns**: Any - a matching component reference or None if nothing was found.

#### get_one_required
Gets a required component reference that matches specified locator.  
throws a [ReferenceException](../reference_exception) when no references found.

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

#### remove_all
Removes all component references that match the specified locator. 

> remove_all(locator: Any): List[Any]

- **locator**: Any - the locator to remove references by.
- **returns**: List[Any] - a list, containing all removed references.

### Static methods

#### from_tuples
Creates a new References from a list of key-value pairs called tuples.

> `static` from_tuples(*tuples: Any): [References](../references)

- **tuples**: Any - a list of values where odd elements are locators and the following even elements are component references
- **returns**: [References](../references) - a newly created References.

### Examples

```python
class MyController(IReferenceable):
    _persistence = None

    def set_references(self, references):
        self._persistence = references.getOneRequired(Descriptor("mygroup", "persistence", "*", "*", "1.0"))

persistence = MyMongoDbPersistence()

references = References.from_tuples(
        Descriptor("mygroup", "persistence", "mongodb", "default", "1.0"), persistence,
        Descriptor("mygroup", "controller", "default", "default", "1.0"), controller
    )

controller.set_references(references)

```

### See also
- #### [IReferences](../ireferences)
