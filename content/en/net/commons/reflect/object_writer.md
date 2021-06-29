---
type: docs
title: "ObjectWriter"
linkTitle: "ObjectWriter"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Helper class that allows you to dynamically set the properties of an object. 

---

### Description

The ObjectWriter class allows you to dynamically set the properties of an object. 

Important points

- In contrast to [PropertyReflector](../property_reflector) which only introspects regular objects, the ObjectWriter class is also able to handle maps and arrays.
- For maps, properties are key-pairs identified by string keys,
- For arrays, properties are elements identified by integer index.
- This class has symmetric implementation across all languages supported by the Pip.Services toolkit and it is used to support dynamic data processing.
- Because all languages have different casing and case sensitivity rules, the ObjectWriter class treats all property names as case insensitive.

### Static methods

#### SetProperties
Sets values of some (all) object properties.

The object can be a user a defined object, a map or an array.
Property values correspondently are object properties,
map key-pairs or array elements with their indexes.

If some properties do not exist or introspection fails
they are just silently skipped and no errors thrown.

> `public static` void SetProperties(object obj, IDictionary\<string, object\> values)

- **obj**: object - object to write properties to.
- **values**: IDictionary\<string, object\> - map containing property names and their values.

#### SetProperty
Sets the value of an object's property specified by its name.
 
The object can be a user a defined object, a map or an array.
The property name correspondently must be an object's property,
a map key or an array index.

If the property does not exist or introspection fails
this method doesn't do anything and doesn't any throw errors.

> `public static` void SetProperty(object obj, object string name, object value)

- **obj**: object - object to write property to.
- **name**: string - name of the property to set.
- **value**: object - new value for the property to set.

### Examples

```cs
var myObj = new MyObject();
ObjectWriter.SetProperty(myObj, "myProperty", 123);

var myMap = new Dictionary<string, object>(){
    {"key1", 123},
    {"key2", "ABC"}
};
ObjectWriter.SetProperty(myMap, "key1", "XYZ");

var myArray = new int[] { 1, 2, 3 };
ObjectWriter.SetProperty(myArray, "0", 123);

```

### See also
- #### [PropertyReflector](../property_reflector)



