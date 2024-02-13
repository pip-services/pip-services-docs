---
type: docs
title: "ObjectWriter"
linkTitle: "ObjectWriter"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: >
    Helper class that allows you to dynamically set the properties of an object. 

---

### Description

The ObjectWriter class allows you to dynamically set the properties of an object. 

Important points

- In contrast to [PropertyReflector](../property_reflector) which only introspects regular objects, the ObjectWriter class is also able to handle maps and arrays.
- For maps, properties are key-pairs identified by string keys,
- For arrays, properties are elements identified by integer index.
- This class has symmetric implementation across all languages supported by the Pip.Services toolkit and it is used to support dynamic data processing.
- Because all languages have different casing and case sensitivity rules, the ObjectWriter class treats all property names as case insensitive.

### Methods

#### SetProperties
Sets values of some (all) object properties.

The object can be a user defined object, map or array.
Property values correspondently are object properties,
map key-pairs or array elements with their indexes.

If some properties do not exist or introspection fails
they are just silently skipped and no errors thrown.

> (c *TObjectWriter) SetProperties(obj any, values map[string]any)

- **obj**: any - object to write properties to.
- **values**: map[string]any - map, containing property names and their values.

#### SetProperty
Sets value of an object property specified by its name.
 
The object can be a user defined object, map or array.
The property name correspondently must be an object property,
map key or array index.

If the property does not exist or introspection fails
this method doesn't do anything and doesn't any throw errors.

> (c *TObjectWriter) SetProperty(obj any, name string, value any)

- **obj**: any - object to write property to.
- **name**: string - name of the property to set.
- **value**: any - new value for the property to set.

### Examples

```go
myObj := MyObject{}
ObjectWriter.SetProperty(myObj, "myProperty", 123)

myMap := { key1: 123, key2: "ABC" }
ObjectWriter.SetProperty(myMap, "key1", "XYZ")

myArray := [1, 2, 3]
ObjectWriter.SetProperty(myArray, "0", 123)

```

### See also
- #### [PropertyReflector](../property_reflector)




