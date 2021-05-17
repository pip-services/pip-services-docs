---
type: docs
title: "RecursiveObjectWriter"
linkTitle: "RecursiveObjectWriter"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Helper class that allows you to dynamically set the properties of an object recursively using "dot" notation.
 
---

### Description

The RecursiveObjectWriter class allows you to dynamically set the properties of an object and to copy them to another object recursively using dot notation.

Important points

- It is similar to [ObjectWriter](../object_writer) but writes properties recursively through the entire object graph. 
- Nested property names are defined using dot notation as "object.subobject.property"

### Static methods

#### copy_properties
Copies content of one object to another object
by recursively reading all properties from source object
and then recursively writing them to destination object.

> `static` copy_properties(dest: Any, src: Any)

- **dest**: Any - a destination object to write properties to.
- **src**: Any - a source object to read properties from


#### set_properties
Recursively sets values of some (all) object and its subobjects properties.

The object can be a user defined object, map or array.
Property values correspondently are object properties,
map key-pairs or array elements with their indexes.
 
If some properties do not exist or introspection fails,
they are just silently skipped and no errors thrown.

> `static` set_properties(obj: Any, values: Any)

- **obj**: Any - an object to write properties to. 
- **values**: Any - a map, containing property names and their values.


#### set_property
Recursively sets value of object and its subobjects property specified by its name.

The object can be a user defined object, map or array.
The property name correspondently must be object property,
map key or array index.

If the property does not exist or introspection fails
this method doesn't do anything and doesn't throw any errors.

> `static` setProperty(obj: Any, name: str, value: Any)

- **obj**: Any - an object to write property to.
- **name**: str - name of the property to set.
- **value**: Any - new value for the property to set.



### See also
- #### [PropertyReflector](../property_reflector)
- #### [ObjectWriter](../object_writer)
