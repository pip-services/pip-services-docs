---
type: docs
title: "ObjectReader"
linkTitle: "ObjectReader"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
description: >
    Helper class that allows you to examine the properties of an object (property instrospection) and to dynamically read them.


---

### Description

The ObjectReader class allows you to examine the properties of an object (property instrospection) and to dynamically read them.

Important points

- In contrast to [PropertyReflector](../property_reflector) which only introspects regular objects, this ObjectReader is also able to handle maps and arrays.
- For maps, properties are key-pairs identified by string keys.
- For arrays, properties are elements identified by integer indexes.
- This class has a symmetric implementation across all languages supported by the Pip.Services toolkit and it is used to support dynamic data processing.
- Because all languages have different casing and case sensitivity rules, this ObjectReader treats all property names as case insensitive.

### Static methods

#### getProperties
Get values of all properties in a specified object
and returns them as a map.

The object can be a user defined object, map or array.
Returned properties correspondently are object properties,
map key-pairs or array elements with their indexes.

> `public static` Map<String, Object> getProperties(Object obj)

- **obj**: Object - object to get properties from.
- **returns**: Map<String, Object> - map, containing the names of the object's properties and their values.

#### getProperty
Gets the value of an object's property specified by its name.

The object can be a user defined object, map or array.
The property name correspondently must be an object property,
map key or array index.

> `public static` Object getProperty(Object obj, String name)

- **obj**: Object - object to read property from.
- **name**: string - name of the property to get.
- **returns**: Object - property value or null if  the property doesn't exist or introspection failed.

#### getPropertyNames
Gets the names of all the properties implemented in a specified object.
 
The object can be a user defined object, map or array.
Returned property names correspondently are object properties,
map keys or array indexes.

> `public static` List<String> getPropertyNames(Object obj)

- **obj**: Object - object to introspect.
- **returns**: List<String> - list with property names.

#### getValue
Gets an object's value.
If object is a wrapper, it unwraps the value behind it. 
Otherwise it returns the same object value.

> `public static` Object getValue(Object obj)

- **obj**: Object - object to unwrap..
- **returns**: Object - actual (unwrapped) object value. 

#### hasProperty
Checks if an object has a property with a specified name.

The object can be a user defined object, map or array.
The property name correspondently must be an object property,
map key or array index.

> `public static` boolean hasProperty(Object obj, String name)

- **obj**: Object - object to introspect.
- **name**: String - name of the property to check.
- **returns**: boolean - true if the object has the property and false if it doesn't.

### Examples

```java
{
  MyObject myObj = new MyObject();
  
  List<String> properties = ObjectReader.getPropertyNames();
  ObjectReader.hasProperty(myObj, "myProperty");
  Object value = PropertyReflector.getProperty(myObj, "myProperty");
  
  Map<String, Object> myMap = new HashMap<String, Object>(){
   	{
   		put("key1", 123);
   		put("key2", "ABC");
   	}
  };
  ObjectReader.hasProperty(myMap, "key1");
  Object value = ObjectReader.getProperty(myMap, "key1");
  
  int[] myArray = new int[] {1, 2, 3};
  ObjectReader.hasProperty(myArrat, "0");
  Object value = ObjectReader.getProperty(myArray, "0");
  }

```

### See also
- #### [PropertyReflector](../property_reflector)
