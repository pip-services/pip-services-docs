---
type: docs
title: "ObjectReader"
linkTitle: "ObjectReader"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Helper class that allows you to examine the properties of an object (property instrospection) and to dynamically read them.


---

### Description

The ObjectReader class allows you to examine the properties of an object (property instrospection) and to dynamically read them.

Important points

- In contrast to [PropertyReflector](../property_reflector) which only introspects regular objects, this ObjectReader is also able to handle maps and arrays.
- For maps, properties are key-pairs identified by string keys.
- For arrays, properties are elements identified by integer index.
- This class has a symmetric implementation across all languages supported by the Pip.Services toolkit and it is used to support dynamic data processing.
- Because all languages have different casing and case sensitivity rules, this ObjectReader treats all property names as case insensitive.

### Static methods

#### get_properties
Get values of all properties in specified object
and returns them as a map.

The object can be a user defined object, map or array.
Returned properties correspondently are object properties,
map key-pairs or array elements with their indexes.

> `static` get_properties(obj: Any): Any

- **obj**: Any - an object to get properties from.
- **returns**: Any - a map, containing the names of the object's properties and their values.

#### get_property
Gets value of object property specified by its name.

The object can be a user defined object, map or array.
The property name correspondently must be object property,
map key or array index.

> `static` get_property(obj: Any, name: str): Any

- **obj**: Any - an object to read property from.
- **name**: str - a name of the property to get.
- **returns**: Any - the property value or None if property doesn't exist or introspection failed.

#### get_property_names
Gets names of all properties implemented in specified object.
 
The object can be a user defined object, map or array.
Returned property name correspondently are object properties,
map keys or array indexes.

> `static` get_property_names(obj: Any): List[str]

- **obj**: Any - an objec to introspect.
- **returns**: List[str] - a list with property names.

#### get_value
Gets a real object value.
If object is a wrapper, it unwraps the value behind it. 
Otherwise it returns the same object value.

> `static` get_value(obj: Any): Any

- **obj**: Any - an object to unwrap..
- **returns**: Any - an actual (unwrapped) object value. 

#### has_property
Checks if object has a property with specified name.

The object can be a user defined object, map or array.
The property name correspondently must be object property,
map key or array index.

> `static` has_property(obj: Any, name: str): bool

- **obj**: Any - an object to introspect.
- **name**: str - a name of the property to check.
- **returns**: bool - true if the object has the property and false if it doesn't.

### Examples

```python

mybj = MyObject()
properties = ObjectReader.get_property_names()
ObjectReader.has_property(myObj, "myProperty")
args = PropertyReflector.get_property(myObj, "myProperty")

myMap = { key1: 123, key2: "ABC" }
ObjectReader.has_property(myMap, "key1")
args = ObjectReader.get_property(myMap, "key1")

myArray = [1, 2, 3]
ObjectReader.has_property(myArrat, "0")
args = ObjectReader.get_property(myArray, "0")

```

### See also
- #### [PropertyReflector](../property_reflector)
