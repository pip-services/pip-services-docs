---
type: docs
title: "PropertyReflector"
linkTitle: "PropertyReflector"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
description: >
    Helper class that allows you to examine an object's properties and to dynamically get and set their values.
---

### Description

The PropertyReflector class allows you to examine an object's properties and to dynamically get and set their values.

Important points

- This class has symmetric implementation across all languages supported by the Pip.Services toolkit and it is used to support dynamic data processing.
- Because all languages have different casing and case sensitivity rules, the PropertyReflector class treats all property names as case insensitive.

### Static methods

#### getProperties
Gets the values of all properties in specified object
and returns them as a map.

> `public static` Map<String, Object> getProperties(Object obj)

- **obj**: Object - object to get properties from.
- **returns**: Map<String, Object> - map containing the names of the object's properties and their values.


#### getProperty
Gets the value of an object's property specified by its name.

> `public static` Object getProperty(Object obj, String name)

- **obj**: Object - object to read the property from.
- **name**: String - name of the property to get.
- **returns**: Object - property value or null if property doesn't exist or introspection failed.

#### getPropertyNames
Gets names of all properties implemented in a specified object.

> `public static` List<String> getPropertyNames(Object obj)

- **obj**: Object - objec to introspect.
- **returns**: List<String> - list with property names.

#### hasProperty
Checks if an object has a property with a specified name.

> `public static` boolean hasProperty(Object obj, String name)

- **obj**: Object - object to introspect.
- **name**: String - name of the property to check.
- **returns**: boolean - true if the object has the property and false if it doesn't.

#### setProperties
Sets the values of some (all) object properties.
 
If some properties do not exist or introspection fails, 
they are just silently skipped and no errors thrown.

> `public static` void setProperties(Object obj, Map<String, Object> values)

- **obj**: Object - object to write properties to.
- **values**: Map<String, Object> - map containing property names and their values.


#### setProperty
Sets value of an object's property specified by its name.

If the property does not exist or introspection fails, 
this method doesn't do anything and doesn't any throw errors.

> `public static` void setProperty(Object obj, String name, Object value)

- **obj**: Object - object to write a property to.
- **name**: String - name of the property to set.
- **value**: Object - new value for the property to set.

### Examples

```java
{
  MyObject myObj = new MyObject();
 
  List<String> properties = PropertyReflector.getPropertyNames();
  PropertyReflector.hasProperty(myObj, "myProperty");
  Object value = PropertyReflector.getProperty(myObj, "myProperty");
  PropertyReflector.setProperty(myObj, "myProperty", 123);
  }

```
