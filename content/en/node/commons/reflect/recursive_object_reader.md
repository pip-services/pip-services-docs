---
type: docs
title: "RecursiveObjectReader"
linkTitle: "RecursiveObjectReader"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Helper class to perform property introspection and dynamic reading.

    It is similar to [ObjectReader](../object_reader) but reads properties recursively
    through the entire object graph. Nested property names are defined
    using dot notation as "object.subobject.property"
---

See also [ObjectReader](../object_reader), [PropertyReflector](../property_reflector)

### Methods

#### getProperties
Get values of all properties in specified object and its subobjects
and returns them as a map.

The object can be a user defined object, map or array.
Returned properties correspondently are object properties,
map key-pairs or array elements with their indexes.

> `public static` getProperties(obj: any): any

- **obj**: any - an object to get properties from.
- **returns**: any - a map, containing the names of the object's properties and their values.

#### getProperty
Recursively gets value of object or its subobjects property specified by its name.
 
The object can be a user defined object, map or array.
The property name correspondently must be object property,
map key or array index.

> `public static` getProperty(obj: any, name: string): any

- **obj**: any - an object to read property from.
- **name**: string - a name of the property to get.
- **returns**: any - the property value or null if property doesn't exist or introspection failed.

#### getPropertyNames
Recursively gets names of all properties implemented in specified object and its subobjects.

The object can be a user defined object, map or array.
Returned property name correspondently are object properties,
map keys or array indexes.

> `public static` getPropertyNames(obj: any): string[]

- **obj**: any - an objec to introspect.
- **returns**: string[] - a list with property names.

#### hasProperty

> `public static` hasProperty(obj: any, name: string): boolean

- **obj**: any - an object to introspect. 
- **name**: string - a name of the property to check.
- **returns**: boolean - true if the object has the property and false if it doesn't.


### See also
- #### [PropertyReflector](../property_reflector)
- #### [ObjectReader](../object_reader)