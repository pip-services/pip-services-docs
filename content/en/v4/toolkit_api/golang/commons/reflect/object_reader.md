---
type: docs
title: "ObjectReader"
linkTitle: "ObjectReader"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: >
    Helper class that allows you to examine the properties of an object (property instrospection) and to dynamically read them.


---

### Description

The ObjectReader class allows you to examine the properties of an object (property instrospection) and to dynamically read them.

Important points

- In contrast to [PropertyReflector](../property_reflector) which only introspects regular objects, this ObjectReader is also able to handle maps and arrays.
- For maps, properties are key-pairs identified by string keys.
- For arrays, properties are elements identified by an integer index.
- This class has a symmetric implementation across all languages supported by the Pip.Services toolkit and it is used to support dynamic data processing.
- Because all languages have different casing and case sensitivity rules, this ObjectReader treats all property names as case insensitive.

### Methods

#### GetProperties
Get values of all properties in a specified object
and returns them as a map.

The object can be a user defined object, map or array.
Returned properties correspondently are object properties,
map key-pairs or array elements with their indexes.

> GetProperties(obj any) map[string]any

- **obj**: any - object to get properties from.
- **returns**: map[string]any - map, containing the names of the object's properties and their values.

#### GetProperty
Gets value of object property specified by its name.

The object can be a user defined object, map or array.
The property name correspondently must be an object property,
map key or array index.

> GetProperty(obj any, name string) any

- **obj**: any - object to read a property from.
- **name**: string - name of the property to get.
- **returns**: any - property value or nil if property doesn't exist or introspection failed.

#### GetPropertyNames
Gets the names of all properties implemented in a specified object.
 
The object can be a user defined object, map or array.
Returned property name correspondently are object properties,
map keys or array indexes.

> GetPropertyNames(obj any) []string

- **obj**: any - objec to introspect.
- **returns**: []string - list with property names.

#### GetValue
Gets a real object value.
If object is a wrapper, it unwraps the value behind it. 
Otherwise it returns the same object value.

> GetValue(obj any) any

- **obj**: any - object to unwrap..
- **returns**: any - actual (unwrapped) object value. 

#### HasProperty
Checks if object has a property with a specified name.

The object can be a user defined object, map or array.
The property name correspondently must be an object property,
map key or array index.

> HasProperty(obj any, name string) bool

- **obj**: any - object to introspect.
- **name**: string - name of the property to check.
- **returns**: bool - true if the object has the property and false if it doesn't.

### Examples

```go
myObj := MyObject{}

properties := ObjectReader.GetPropertyNames()
ObjectReader.HasProperty(myObj, "myProperty")
value := PropertyReflector.GetProperty(myObj, "myProperty")

myMap := { key1: 123, key2: "ABC" }
ObjectReader.HasProperty(myMap, "key1")
value := ObjectReader.GetProperty(myMap, "key1")

myArray := [1, 2, 3]
ObjectReader.HasProperty(myArrat, "0")
value := ObjectReader.GetProperty(myArray, "0")

```

### See also
- #### [PropertyReflector](../property_reflector)

