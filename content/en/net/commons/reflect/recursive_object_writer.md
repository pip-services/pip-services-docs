---
type: docs
title: "RecursiveObjectWriter"
linkTitle: "RecursiveObjectWriter"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Helper class that allows you to dynamically set the properties of an object recursively using "dot" notation.
 
---

### Description

The RecursiveObjectWriter class allows you to dynamically set the properties of an object and to copy them to another object recursively using dot notation.

Important points

- It is similar to [ObjectWriter](../object_writer) but writes properties recursively through the entire object graph. 
- Nested property names are defined using dot notation as "object.subobject.property"

### Static methods

#### CopyProperties
Copies the content of one object to another object
by recursively reading all properties from source object
and then recursively writing them to the destination object.

> `public static` void CopyProperties(object dest, object src)

- **dest**: object - destination object to write properties to.
- **src**: object - source object to read properties from


#### SetProperties
Recursively sets values of some (all) object's and its subobjects' properties.

The object can be a user a defined object, a map or an array.
Property values correspondently are object properties,
map key-pairs or array elements with their indexes.
 
If some properties do not exist or introspection fails
they are just silently skipped and no errors thrown.

> `public static` void SetProperties(object obj, IDictionary\<string, object\> values)

- **obj**: object - object to write properties to. 
- **values**: IDictionary\<string, object\> - map containing property names and their values.


#### SetProperty
Recursively sets the value of an object's and its subobjects' property specified by its name.

The object can be a user a defined object, a map or an array.
The property name correspondently must be an object's property,
a map key or an array index.

If the property does not exist or introspection fails
this method doesn't do anything and doesn't any throw errors.

> `public static` void SetProperty(object obj, string name, object value)

- **obj**: object - object to write property to.
- **name**: string - name of the property to set.
- **value**: object - new value for the property to set.



### See also
- #### [PropertyReflector](../property_reflector)
- #### [ObjectWriter](../object_writer)
