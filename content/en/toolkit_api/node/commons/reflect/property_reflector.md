---
type: docs
title: "PropertyReflector"
linkTitle: "PropertyReflector"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
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

> `public static` getProperties(obj: any): any

- **obj**: any - object to get properties from.
- **returns**: any - map containing the names of the object's properties and their values.


#### getProperty
Gets the value of an object's property specified by its name.

> `public static` getProperty(obj: any, name: string): any

- **obj**: any - object to read the property from.
- **name**: string - name of the property to get.
- **returns**: any - property value or null if property doesn't exist or introspection failed.

#### getPropertyNames
Gets names of all properties implemented in a specified object.

> `public static` getPropertyNames(obj: any): string[]

- **obj**: any - objec to introspect.
- **returns**: string[] - list with property names.

#### hasProperty
Checks if an object has a property with a specified name.

> `public static` hasProperty(obj: any, name: string): boolean

- **obj**: any - object to introspect.
- **name**: string - name of the property to check.
- **returns**: boolean - true if the object has the property and false if it doesn't.

#### setProperties
Sets the values of some (all) object properties.
 
If some properties do not exist or introspection fails, 
they are just silently skipped and no errors thrown.

> `public static` setProperties(obj: any, values: any): void

- **obj**: any - object to write properties to.
- **values**: any - map containing property names and their values.


#### setProperty
Sets value of an object's property specified by its name.

If the property does not exist or introspection fails, 
this method doesn't do anything and doesn't any throw errors.

> `public static` setProperty(obj: any, name: string, value: any): void

- **obj**: any - object to write a property to.
- **name**: string - name of the property to set.
- **value**: any - new value for the property to set.

### Examples

```typescript
let myObj = new MyObject();
   
let properties = PropertyReflector.getPropertyNames();
PropertyReflector.hasProperty(myObj, "myProperty");

let value = PropertyReflector.getProperty(myObj, "myProperty");
PropertyReflector.setProperty(myObj, "myProperty", 123);

```
