---
type: docs
title: "PropertyReflector"
linkTitle: "PropertyReflector"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Helper class that allows you to examine an object's properties and to dynamically get and set their values.
---

### Description

The PropertyReflector class allows you to examine an object's properties and to dynamically get and set their values.

**Important points**

- This class has symmetric implementation across all languages supported by the Pip.Services toolkit and it is used to support dynamic data processing.
- Because all languages have different casing and case sensitivity rules, the PropertyReflector class treats all property names as case insensitive.

### Static methods

#### getProperties
Gets the values of all properties in specified object
and returns them as a map.

> `static` Map\<String, dynamic\> getProperties(obj)

- **obj**: dynamic - object to get properties from.
- **returns**: Map\<String, dynamic\> - map containing the names of the object's properties and their values.


#### getProperty
Gets the value of an object's property specified by its name.

> `static` dynamic getProperty(obj, String name)

- **obj**: dynamic - object to read the property from.
- **name**: String - name of the property to get.
- **returns**: dynamic - property value or null if property doesn't exist or introspection failed.

#### getPropertyNames
Gets names of all properties implemented in a specified object.

> `static` List\<String\> getPropertyNames(obj)

- **obj**: dynamic - objec to introspect.
- **returns**: List\<String\> - list with property names.

#### hasProperty
Checks if an object has a property with a specified name.

> `static` bool hasProperty(obj, String name) 

- **obj**: dynamic - object to introspect.
- **name**: String - name of the property to check.
- **returns**: bool - true if the object has the property and false if it doesn't.

#### setProperties
Sets the values of some (all) object properties.
 
If some properties do not exist or introspection fails, 
they are just silently skipped and no errors thrown.

> `static` void setProperties(obj, Map\<String, dynamic\> values)

- **obj**: dynamic - object to write properties to.
- **values**: Map\<String, dynamic\> - map containing property names and their values.


#### setProperty
Sets value of an object's property specified by its name.

If the property does not exist or introspection fails, 
this method doesn't do anything and doesn't throw any errors.

> `static` void setProperty(obj, String name, value)

- **obj**: dynamic - object to write a property to.
- **name**: String - name of the property to set.
- **value**: dynamic - new value for the property to set.

### Examples

```dart
var myObj =  MyObject();

var properties = PropertyReflector.getPropertyNames();
PropertyReflector.hasProperty(myObj, 'myProperty');

var value = PropertyReflector.getProperty(myObj, 'myProperty');
PropertyReflector.setProperty(myObj, 'myProperty', 123);

```
