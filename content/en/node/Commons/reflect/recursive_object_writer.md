---
type: docs
title: "RecursiveObjectWriter"
linkTitle: "RecursiveObjectWriter"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Helper class to perform property introspection and dynamic writing.
 
    It is similar to [ObjectWriter](../object_writer) but writes properties recursively
    through the entire object graph. Nested property names are defined
    using dot notation as "object.subobject.property"
---

See also [PropertyReflector](../property_reflector), [ObjectWriter](../object_writer)

### Methods

#### copyProperties
Copies content of one object to another object
by recursively reading all properties from source object
and then recursively writing them to destination object.

> `public static` copyProperties(dest: any, src: any): void

- **dest**: any - a destination object to write properties to.
- **src**: any - a source object to read properties from


#### setProperties
Recursively sets values of some (all) object and its subobjects properties.

The object can be a user defined object, map or array.
Property values correspondently are object properties,
map key-pairs or array elements with their indexes.
 
If some properties do not exist or introspection fails
they are just silently skipped and no errors thrown.

> `public static` setProperties(obj: any, values: any): void

- **obj**: any - an object to write properties to. 
- **values**: any - a map, containing property names and their values.


#### setProperty
Recursively sets value of object and its subobjects property specified by its name.

The object can be a user defined object, map or array.
The property name correspondently must be object property,
map key or array index.

If the property does not exist or introspection fails
this method doesn't do anything and doesn't any throw errors.

> `public static` setProperty(obj: any, name: string, value: any): void

- **obj**: any - an object to write property to.
- **name**: string - a name of the property to set.
- **value**: any - a new value for the property to set.



### See also
- #### [PropertyReflector](../property_reflector)
- #### [ObjectWriter](../object_writer)