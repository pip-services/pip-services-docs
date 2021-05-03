---
type: docs
title: "ObjectWriter"
linkTitle: "ObjectWriter"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Helper class that allows you to dynamically set the properties of an object. 

---

### Description

The ObjectWriter class allows you to dynamically set the properties of an object. 

Important points

- In contrast to [PropertyReflector](../property_reflector) which only introspects regular objects, the ObjectWriter class is also able to handle maps and arrays.
- For maps, properties are key-pairs identified by string keys,
- For arrays, properties are elements identified by integer index.
- This class has symmetric implementation across all languages supported by Pip.Services toolkit and it is used to support dynamic data processing.
- Because all languages have different casing and case sensitivity rules, the ObjectWriter class treats all property names as case insensitive.

### Static methods

#### set_properties
Sets values of some (all) object properties.

The object can be a user defined object, map or array.
Property values correspondently are object properties,
map key-pairs or array elements with their indexes.

If some properties do not exist or introspection fails
they are just silently skipped and no errors thrown.

> `static` set_properties(obj: Any, values: Any)

- **obj**: Any - an object to write properties to.
- **values**: Any - a map, containing property names and their values.

#### set_property
Sets value of object property specified by its name.
 
The object can be a user defined object, map or array.
The property name correspondently must be object property,
map key or array index.

If the property does not exist or introspection fails
this method doesn't do anything and doesn't any throw errors.

> `static` set_property(obj: Any, name: str, value: Any)

- **obj**: Any - an object to write property to.
- **name**: str - a name of the property to set.
- **value**: Any - a new value for the property to set.

### Examples

```python
myObj = MyObject()
ObjectWriter.set_property(myObj, "myProperty", 123)

myMap = { key1: 123, key2: "ABC" }
ObjectWriter.set_property(myMap, "key1", "XYZ")

myArray = [1, 2, 3]
ObjectWriter.set_property(myArray, "0", 123)

```

### See also
- #### [PropertyReflector](../property_reflector)



