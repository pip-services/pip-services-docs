---
type: docs
title: "ObjectReader"
linkTitle: "ObjectReader"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Helper class that allows you to examine the properties of an object (property instrospection) and to dynamically read them.


---

### Description

The ObjectReader class allows you to examine the properties of an object (property instrospection) and to dynamically read them.

Important points

- In contrast to [PropertyReflector](../property_reflector) which only introspects regular objects, this ObjectReader is also able to handle maps and arrays.
- For maps, properties are key-pairs identified by string keys.
- For arrays, properties are elements identified by integer index.
- This class has a symmetric implementation across all languages supported by the Pip.Services toolkit and it is used to support dynamic data processing.
- Because all languages have different casing and case sensitivity rules, this ObjectReader treats all property names as case insensitive.

### Static methods

#### GetProperties
Get values of all properties in specified object
and returns them as a map.

The object can be a user defined object, map or array.
Returned properties correspondently are object properties,
map key-pairs or array elements with their indexes.

> `public static` Dictionary\<string, object\> GetProperties(object obj)

- **obj**: object - an object to get properties from.
- **returns**: Dictionary\<string, object\> - a map, containing the names of the object's properties and their values.

#### GetProperty
Gets value of object property specified by its name.

The object can be a user defined object, map or array.
The property name correspondently must be object property,
map key or array index.

> `public static` object GetProperty(object obj, string name)

- **obj**: object - an object to read property from.
- **name**: string - a name of the property to get.
- **returns**: object - the property value or null if property doesn't exist or introspection failed.

#### GetPropertyNames
Gets names of all properties implemented in specified object.
 
The object can be a user defined object, map or array.
Returned property name correspondently are object properties,
map keys or array indexes.

> `public static` List\<string\> GetPropertyNames(object obj)

- **obj**: object - an objec to introspect.
- **returns**: List\<string\> - a list with property names.

#### GetValue
Gets a real object value.
If object is a wrapper, it unwraps the value behind it. 
Otherwise it returns the same object value.

> `public static` object GetValue(object obj)

- **obj**: object - an object to unwrap..
- **returns**: object - an actual (unwrapped) object value. 

#### HasProperty
Checks if object has a property with specified name.

The object can be a user defined object, map or array.
The property name correspondently must be object property,
map key or array index.

> `public static` bool HasProperty(object obj, string name)

- **obj**: object - an object to introspect.
- **name**: string - a name of the property to check.
- **returns**: bool - true if the object has the property and false if it doesn't.

### Examples

```cs
var myObj = new MyObject();
var properties = ObjectReader.GetPropertyNames();
ObjectReader.HasProperty(myObj, "myProperty");

var value = PropertyReflector.GetProperty(myObj, "myProperty");
var myMap = new Dictionary<string, object>(){
    {"key1", 123},
    {"key2", "ABC"};
};

ObjectReader.HasProperty(myMap, "key1");
var value = ObjectReader.getProperty(myMap, "key1");

int[] myArray = new int[] { 1, 2, 3 };
ObjectReader.HasProperty(myArrat, "0");
var value = ObjectReader.GetProperty(myArray, "0");

```

### See also
- #### [PropertyReflector](../property_reflector)
