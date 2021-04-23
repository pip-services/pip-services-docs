---
type: docs
title: "ObjectWriter"
linkTitle: "ObjectWriter"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Helper class to perform property introspection and dynamic writing.

    In contrast to [PropertyReflector](../property_reflector) which only introspects regular objects,
    this ObjectWriter is also able to handle maps and arrays.
    For maps properties are key-pairs identified by string keys,
    For arrays properties are elements identified by integer index.

    This class has symmetric implementation across all languages supported
    by Pip.Services toolkit and used to support dynamic data processing.

    Because all languages have different casing and case sensitivity rules,
    this ObjectWriter treats all property names as case insensitive.
---

See also [PropertyReflector](../property_reflector)

**Example:**

```typescript
let myObj = new MyObject();
  
ObjectWriter.setProperty(myObj, "myProperty", 123);
    
let myMap = { key1: 123, key2: "ABC" };
ObjectWriter.setProperty(myMap, "key1", "XYZ");
  
let myArray = [1, 2, 3]
ObjectWriter.setProperty(myArray, "0", 123);

```


### Methods

#### setProperties
Sets values of some (all) object properties.

The object can be a user defined object, map or array.
Property values correspondently are object properties,
map key-pairs or array elements with their indexes.

If some properties do not exist or introspection fails
they are just silently skipped and no errors thrown.

> `public static` setProperties(obj: any, values: any): void

- **obj**: any - an object to write properties to.
- **values**: any - a map, containing property names and their values.

#### setProperty
Sets value of object property specified by its name.
 
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



