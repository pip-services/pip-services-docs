---
type: docs
title: "ObjectWriter"
linkTitle: "ObjectWriter"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Helper class that allows you to dynamically set the properties of an object. 

---

### Description

The ObjectWriter class allows you to dynamically set the properties of an object. 

Important points

- In contrast to [PropertyReflector](../property_reflector) which only introspects regular objects, the ObjectWriter class is also able to handle maps and arrays.
- For maps, properties are key-pairs identified by string keys,
- For arrays, properties are elements identified by integer indexes.
- This class has symmetric implementation across all languages supported by the Pip.Services toolkit and it is used to support dynamic data processing.
- Because all languages have different casing and case sensitivity rules, the ObjectWriter class treats all property names as case insensitive.

### Static methods

#### setProperties
Sets values of some (all) object properties.

The object can be a user defined object, map or array.
Property values correspondently are object properties,
map key-pairs or array elements with their indexes.

If some properties do not exist or introspection fails, 
they are just silently skipped and no errors thrown.

> `static` void setProperties(obj, Map\<String, dynamic\> values)

- **obj**: dynamic - object to write properties to.
- **values**: Map\<String, dynamic\> - map containing property names and their values.

#### setProperty
Sets the value of an object's property specified by its name.
 
The object can be a user defined object, map or array.
The property name correspondently must be object property,
map key or array index.

If the property does not exist or introspection fails,
this method doesn't do anything and doesn't throw any errors.

> `static` void setProperty(obj, String name, value)

- **obj**: dynamic - object to write the property to.
- **name**: String - name of the property to set.
- **value**: dynamic - new value for the property to set.

### Examples

```dart
var myObj =  MyObject();

ObjectWriter.setProperty(myObj, 'myProperty', 123);

var myMap = { key1: 123, key2: 'ABC' };
ObjectWriter.setProperty(myMap, 'key1', 'XYZ');

var myArray = [1, 2, 3]
ObjectWriter.setProperty(myArray, '0', 123);

```

### See also
- #### [PropertyReflector](../property_reflector)



