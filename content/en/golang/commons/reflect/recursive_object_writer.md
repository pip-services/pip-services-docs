---
type: docs
title: "RecursiveObjectWriter"
linkTitle: "RecursiveObjectWriter"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Helper class that allows you to dynamically set the properties of an object recursively using "dot" notation.
 
---

### Description

The RecursiveObjectWriter class allows you to dynamically set the properties of an object and to copy them to another object recursively using dot notation.

Important points

- It is similar to [ObjectWriter](../object_writer) but writes properties recursively through the entire object graph. 
- Nested property names are defined using dot notation as "object.subobject.property"

### Methods

#### CopyProperties
Copies content of one object to another object
by recursively reading all properties from source object
and then recursively writing them to destination object.

> (c *TRecursiveObjectWriter) CopyProperties(dest interface{}, src interface{})

- **dest**: interface{} - a destination object to write properties to.
- **src**: interface{} - a source object to read properties from


#### SetProperties
Recursively sets values of some (all) object and its subobjects properties.

The object can be a user defined object, map or array.
Property values correspondently are object properties,
map key-pairs or array elements with their indexes.
 
If some properties do not exist or introspection fails
they are just silently skipped and no errors thrown.

> (c *TRecursiveObjectWriter) SetProperties(obj interface{}, values map[string]interface{})

- **obj**: interface{} - an object to write properties to. 
- **values**: map[string]interface{} - a map, containing property names and their values.


#### SetProperty
Recursively sets value of object and its subobjects property specified by its name.

The object can be a user defined object, map or array.
The property name correspondently must be object property,
map key or array index.

If the property does not exist or introspection fails
this method doesn't do anything and doesn't any throw errors.

> (c *TRecursiveObjectWriter) SetProperty(obj interface{}, name string, value interface{})

- **obj**: interface{} - an object to write property to.
- **name**: string - a name of the property to set.
- **value**: interface{} - a new value for the property to set.



### See also
- #### [PropertyReflector](../property_reflector)
- #### [ObjectWriter](../object_writer)
