---
type: docs
title: "PropertyReflector"
linkTitle: "PropertyReflector"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
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
Get values of all properties in a specified object
and returns them as a map.

> GetProperties(obj any) map[string]any

- **obj**: any - object to get properties from.
- **returns**: map[string]any - map, containing the names of the object's properties and their values.


#### GetProperty
Gets the value of an object's property specified by its name.

> GetProperty(obj any, name string) any

- **obj**: any - object to read property from.
- **name**: string - name of the property to get.
- **returns**: any - property value or nil if property doesn't exist or introspection failed.

#### GetPropertyNames
Gets the names of all properties implemented in a specified object.

> GetPropertyNames(obj any) []string

- **obj**:anyany - object to introspect.
- **returns**: []string - list with property names.

#### HasProperty
Checks if an object has a property with a specified name.

> HasProperty(obj any, name string) bool

- **obj**: any - object to introspect.
- **name**: string - name of the property to check.
- **returns**: bool - true if the object has the property and false if it doesn't.

#### SetProperties
Sets values of some (all) object properties.
 
If some properties do not exist or introspection fails
they are just silently skipped and no errors thrown.

> SetProperties(obj any, values map[string]any)

- **obj**: any - object to write properties to.
- **values**: map[string]any - map, containing property names and their values.


#### SetProperty
Sets the value of an object's property specified by its name.

If the property does not exist or introspection fails
this method doesn't do anything and doesn't throw any errors.

> SetProperty(obj any, name string, value any)

- **obj**: any - object to write property to.
- **name**: string - name of the property to set.
- **value**: any - new value for the property to set.

### Examples

```go
myObj := MyObject{}

properties := PropertyReflector.GetPropertyNames()
PropertyReflector.HasProperty(myObj, "myProperty")
value := PropertyReflector.GetProperty(myObj, "myProperty")
PropertyReflector.SetProperty(myObj, "myProperty", 123)

```

