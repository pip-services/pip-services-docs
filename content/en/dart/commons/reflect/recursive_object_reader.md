---
type: docs
title: "RecursiveObjectReader"
linkTitle: "RecursiveObjectReader"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Helper class that allows you to examine the properties of an object (property instrospection) and to dynamically read them recursively using "dot" notation.

---

### Description

The RecursiveObjectReader class allows you to examine the properties of an object (property instrospection) and to dynamically read them recursively using "dot" notation (e.g property.property.method).


Important points

- It is similar to [ObjectReader](../object_reader) but reads properties recursively through the entire object graph. 
- Nested property names are defined using dot notation as "object.subobject.property".


### Static methods

#### getProperties
Gets the values of all properties in a specified object and its subobjects
and returns them as a map.

The object can be a user defined object, map or array.
Returned properties correspondently are object's properties,
map key-pairs or array elements with their indexes.

> `static` Map\<String, dynamic\> getProperties(obj)

- **obj**: dynamic - object to get properties from.
- **returns**: Map\<String, dynamic\> - map containing the names of the object's properties and their values.

#### getProperty
Recursively gets the value of an object's or its subobjects' property specified by its name.
 
The object can be a user defined object, map or array.
The property name correspondently must be an object's property,
map key or array index.

> `static` dynamic getProperty(obj, String name)

- **obj**: dynamic - object to read the property from.
- **name**: String - name of the property to get.
- **returns**: dynamic - property value or null if the property doesn't exist or introspection failed.

#### getPropertyNames
Recursively gets the names of all properties implemented in a specified object and its subobjects.

The object can be a user defined object, map or array.
Returned property name correspondently are object's properties,
map keys or array indexes.

> `static` List\<String\> getPropertyNames(obj)

- **obj**: dynamic - objec to introspect.
- **returns**: List\<String\> - list with property names.

#### hasProperty

> `static` bool hasProperty(obj, String name)

- **obj**: dynamic - object to introspect. 
- **name**: String - name of the property to check.
- **returns**: bool - true if the object has the property and false if it doesn't.


### See also
- #### [PropertyReflector](../property_reflector)
- #### [ObjectReader](../object_reader)
