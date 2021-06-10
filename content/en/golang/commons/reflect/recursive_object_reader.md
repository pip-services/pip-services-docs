---
type: docs
title: "RecursiveObjectReader"
linkTitle: "RecursiveObjectReader"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Helper class that allows you to examine the properties of an object (property instrospection) and to dynamically read them recursively using "dot" notation.

---

### Description

The RecursiveObjectReader class allows you to examine the properties of an object (property instrospection) and to dynamically read them recursively using "dot" notation (e.g property.property.method).


Important points

- It is similar to [ObjectReader](../object_reader) but reads properties recursively through the entire object graph. 
- Nested property names are defined using dot notation as "object.subobject.property".


### Methods

#### GetProperties
Get values of all properties in specified object and its subobjects
and returns them as a map.

The object can be a user defined object, map or array.
Returned properties correspondently are object properties,
map key-pairs or array elements with their indexes.

> (c *TRecursiveObjectReader) GetProperties(obj interface{}) map[string]interface{}

- **obj**: interface{} - an object to get properties from.
- **returns**: map[string]interface{} - a map, containing the names of the object's properties and their values.

#### GetProperty
Recursively gets value of object or its subobjects property specified by its name.
 
The object can be a user defined object, map or array.
The property name correspondently must be object property,
map key or array index.

> (c *TRecursiveObjectReader) GetProperty(obj interface{}, name string) interface{}

- **obj**: interface{} - an object to read property from.
- **name**: string - a name of the property to get.
- **returns**: interface{} - the property value or nil if property doesn't exist or introspection failed.

#### GetPropertyNames
Recursively gets names of all properties implemented in specified object and its subobjects.

The object can be a user defined object, map or array.
Returned property name correspondently are object properties,
map keys or array indexes.

> (c *TRecursiveObjectReader) GetPropertyNames(obj interface{}) []string

- **obj**: interface{} - an objec to introspect.
- **returns**: []string - a list with property names.

#### HasProperty

> (c *TRecursiveObjectReader) HasProperty(obj interface{}, name string) bool

- **obj**: interface{} - an object to introspect. 
- **name**: string - a name of the property to check.
- **returns**: bool - true if the object has the property and false if it doesn't.


### See also
- #### [PropertyReflector](../property_reflector)
- #### [ObjectReader](../object_reader)
