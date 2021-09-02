---
type: docs
title: "RecursiveObjectWriter"
linkTitle: "RecursiveObjectWriter"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Helper class that allows you to dynamically set the properties of an object recursively using "dot" notation.
 
---

### Description

The RecursiveObjectWriter class allows you to dynamically set the properties of an object and to copy them to another object recursively using dot notation.

**Important points**

- It is similar to [ObjectWriter](../object_writer) but writes properties recursively through the entire object graph. 
- Nested property names are defined using dot notation as "object.subobject.property"

### Static methods

#### copyProperties
Copies content of one object to another object
by recursively reading all properties from a source object
and then recursively writing them to a destination object.

> `static` void copyProperties(dest, src)

- **dest**: dynamic - destination object to write properties to.
- **src**: dynamic - source object to read properties from


#### setProperties
Recursively sets values of some (all) object and its subobjects properties.

The object can be a user defined object, map or array.
Property values correspondently are object's properties,
map key-pairs or array elements with their indexes.
 
If some properties do not exist or introspection fails, 
they are just silently skipped and no errors thrown.

> `static` void setProperties(obj, Map\<String, dynamic\> values)

- **obj**: dynamic - object to write properties to. 
- **values**: Map\<String, dynamic\> - map containing property names and their values.


#### setProperty
Recursively sets the value of an object's and its subobjects' property specified by its name.

The object can be a user defined object, map or array.
The property name correspondently must be object's property,
map key or array index.

If the property does not exist or introspection fails,
this method doesn't do anything and doesn't throw any errors.

> `static` void setProperty(obj, String name, value)

- **obj**: dynamic - object to write property to.
- **name**: String - name of the property to set.
- **value**: dynamic - new value for the property to set.



### See also
- #### [PropertyReflector](../property_reflector)
- #### [ObjectWriter](../object_writer)
