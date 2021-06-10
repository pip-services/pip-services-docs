---
type: docs
title: "PropertyReflector"
linkTitle: "PropertyReflector"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Helper class that allows you to examine an object's properties and to dynamically get and set their values.
---

### Description

The PropertyReflector class allows you to examine an object's properties and to dynamically get and set their values.

Important points

- This class has symmetric implementation across all languages supported by the Pip.Services toolkit and it is used to support dynamic data processing.
- Because all languages have different casing and case sensitivity rules, the PropertyReflector class treats all property names as case insensitive.

### Methods

#### GetProperties
Get values of all properties in specified object
and returns them as a map.

> (c *TPropertyReflector) GetProperties(obj interface{}) map[string]interface{}

- **obj**: interface{} - an object to get properties from.
- **returns**: map[string]interface{} - a map, containing the names of the object's properties and their values.


#### GetProperty
Gets value of object property specified by its name.

> (c *TPropertyReflector) GetProperty(obj interface{}, name string) interface{}

- **obj**: interface{} - an object to read property from.
- **name**: string - a name of the property to get.
- **returns**: interface{} - the property value or nil if property doesn't exist or introspection failed.

#### GetPropertyNames
Gets names of all properties implemented in specified object.

> (c *TPropertyReflector) GetPropertyNames(obj interface{}) []string

- **obj**:interface{}any - an objec to introspect.
- **returns**: []string - a list with property names.

#### HasProperty
Checks if object has a property with specified name.

> (c *TPropertyReflector) HasProperty(obj interface{}, name string) bool

- **obj**: interface{} - an object to introspect.
- **name**: string - a name of the property to check.
- **returns**: bool - true if the object has the property and false if it doesn't.

#### SetProperties
Sets values of some (all) object properties.
 
If some properties do not exist or introspection fails
they are just silently skipped and no errors thrown.

> (c *TPropertyReflector) SetProperties(obj interface{}, values map[string]interface{})

- **obj**: interface{} - an object to write properties to.
- **values**: map[string]interface{} - a map, containing property names and their values.


#### SetProperty
Sets value of object property specified by its name.

If the property does not exist or introspection fails
this method doesn't do anything and doesn't any throw errors.

> (c *TPropertyReflector) SetProperty(obj interface{}, name string, value interface{})

- **obj**: interface{} - an object to write property to.
- **name**: string - a name of the property to set.
- **value**: interface{} - a new value for the property to set.

### Examples

```go
myObj := MyObject{}
 
properties := PropertyReflector.GetPropertyNames()
PropertyReflector.HasProperty(myObj, "myProperty")
value := PropertyReflector.GetProperty(myObj, "myProperty")
PropertyReflector.SetProperty(myObj, "myProperty", 123)

```
