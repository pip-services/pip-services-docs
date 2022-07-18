---
type: docs
title: "RecursiveObjectReader"
linkTitle: "RecursiveObjectReader"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
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

> `public static` getProperties(obj: any): any

- **obj**: any - object to get properties from.
- **returns**: any - map containing the names of the object's properties and their values.

#### getProperty
Recursively gets the value of an object's or its subobjects' property specified by its name.
 
The object can be a user defined object, map or array.
The property name correspondently must be an object's property,
map key or array index.

> `public static` getProperty(obj: any, name: string): any

- **obj**: any - object to read the property from.
- **name**: string - name of the property to get.
- **returns**: any - property value or null if the property doesn't exist or introspection failed.

#### getPropertyNames
Recursively gets the names of all properties implemented in a specified object and its subobjects.

The object can be a user defined object, map or array.
Returned property name correspondently are object's properties,
map keys or array indexes.

> `public static` getPropertyNames(obj: any): string[]

- **obj**: any - objec to introspect.
- **returns**: string[] - list with property names.

#### hasProperty

> `public static` hasProperty(obj: any, name: string): boolean

- **obj**: any - object to introspect. 
- **name**: string - name of the property to check.
- **returns**: boolean - true if the object has the property and false if it doesn't.


### See also
- #### [PropertyReflector](../property_reflector)
- #### [ObjectReader](../object_reader)
