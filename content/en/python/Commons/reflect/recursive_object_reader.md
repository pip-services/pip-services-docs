---
type: docs
title: "RecursiveObjectReader"
linkTitle: "RecursiveObjectReader"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Helper class to perform property introspection and dynamic reading.

    It is similar to [ObjectReader](../object_reader) but reads properties recursively
    through the entire object graph. Nested property names are defined
    using dot notation as "object.subobject.property"
---

See also [ObjectReader](../object_reader), [PropertyReflector](../property_reflector)

### Methods

#### get_properties
Get values of all properties in specified object and its subobjects
and returns them as a map.

The object can be a user defined object, map or array.
Returned properties correspondently are object properties,
map key-pairs or array elements with their indexes.

> `static` get_properties(obj: Any): Any

- **obj**: Any - an object to get properties from.
- **returns**: Any - a map, containing the names of the object's properties and their values.

#### get_property
Recursively gets value of object or its subobjects property specified by its name.
 
The object can be a user defined object, map or array.
The property name correspondently must be object property,
map key or array index.

> `static` get_property(obj: Any, name: str): Any

- **obj**: Any - an object to read property from.
- **name**: str - a name of the property to get.
- **returns**: Any - the property value or null if property doesn't exist or introspection failed.

#### get_property_names
Recursively gets names of all properties implemented in specified object and its subobjects.

The object can be a user defined object, map or array.
Returned property name correspondently are object properties,
map keys or array indexes.

> `static` get_property_names(obj: Any): List[str]

- **obj**: Any - an objec to introspect.
- **returns**: List[str] - a list with property names.

#### has_property

> `static` has_property(obj: Any, name: str): bool

- **obj**: Any - an object to introspect. 
- **name**: str - a name of the property to check.
- **returns**: bool - true if the object has the property and false if it doesn't.


### See also
- #### [PropertyReflector](../property_reflector)
- #### [ObjectReader](../object_reader)