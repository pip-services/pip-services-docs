---
type: docs
title: "PropertyReflector"
linkTitle: "PropertyReflector"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Helper class that allows you to examine an object's properties and to dynamically get and set their values.
---

### Description

The PropertyReflector class allows you to examine an object's properties and to dynamically get and set their values.

Important points

- This class has symmetric implementation across all languages supported by the Pip.Services toolkit and it is used to support dynamic data processing.
- Because all languages have different casing and case sensitivity rules, the PropertyReflector class treats all property names as case insensitive.

### Static methods

#### GetProperties
Get values of all properties in specified object
and returns them as a map.

> `public static` Dictionary\<string, object\> GetProperties(object obj)

- **obj**: object - an object to get properties from.
- **returns**: Dictionary\<string, object\> - a map, containing the names of the object's properties and their values.


#### GetProperty
Gets value of object property specified by its name.

> `public static` object GetProperty(object obj, string name)

- **obj**: object - an object to read property from.
- **name**: string - a name of the property to get.
- **returns**: object - the property value or null if property doesn't exist or introspection failed.

#### GetPropertyNames
Gets names of all properties implemented in specified object.

> `public static` List\<string\> GetPropertyNames(object obj)

- **obj**: object - an objec to introspect.
- **returns**: List\<string\> - a list with property names.

#### HasProperty
Checks if object has a property with specified name.

> `public static` bool HasProperty(object obj, string name)

- **obj**: object - an object to introspect.
- **name**: string - a name of the property to check.
- **returns**: bool - true if the object has the property and false if it doesn't.

#### SetProperties
Sets values of some (all) object properties.
 
If some properties do not exist or introspection fails
they are just silently skipped and no errors thrown.

> `public static` void SetProperties(object obj, Dictionary\<string, object\> values)

- **obj**: object - an object to write properties to.
- **values**: Dictionary\<string, object\> - a map, containing property names and their values.


#### SetProperty
Sets value of object property specified by its name.

If the property does not exist or introspection fails
this method doesn't do anything and doesn't any throw errors.

> `public static` void SetProperty(object obj, string name, object value)

- **obj**: object - an object to write property to.
- **name**: string - a name of the property to set.
- **value**: object - a new value for the property to set.

### Examples

```cs
var myObj = new MyObject();
var properties = PropertyReflector.GetPropertyNames();

PropertyReflector.HasProperty(myObj, "myProperty");
var value = PropertyReflector.GetProperty(myObj, "myProperty");
PropertyReflector.SetProperty(myObj, "myProperty", 123);

```
