---
type: docs
title: "TypeReflector"
linkTitle: "TypeReflector"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
description: >
    Helper class that allows you to examine the type of an object, and create instancies of objects based on their type.


---

### Description

The TypeReflector class allows you to examine the type of an object, and create instancies of objects based on their type.

Important points

- This class has symmetric implementation across all languages supported by the Pip.Services toolkit and used to support dynamic data processing.
- Because all languages have different casing and case sensitivity rules, the TypeReflector class treats all type names as case insensitive.



### Static methods

#### createInstance

Creates an instance of an object type specified by its name
and library where it is defined.

See [getType](#gettype)
See [createInstanceByType](#createinstancebytype)

> `public static` Object createInstance(String name, String library, Object... args) throws Exception 

- **name**: String - an object type name.
- **library**: String - a library (module) where object type is defined.
- **args**: Object... - arguments for the object constructor.
- **returns**: Object - the created object instance.


#### createInstanceByType
Creates an instance of an object type.

> `public static` Object createInstanceByType(Class<?> type, Object... args) throws Exception

- **type**: Class<?> - object type (factory function) to create.
- **args**: Object... - arguments for the object constructor.
- **returns**: Object - created object's instance.

#### createInstanceByDescriptor
Creates an instance of an object type specified by a type descriptor.

> `public static` Object createInstanceByDescriptor([TypeDescriptor](../type_descriptor) type, Object... args) throws Exception

- **descriptor**: [TypeDescriptor](../type_descriptor) - type descriptor that points to an object type
- **args**: Object... - arguments for the object constructor.
- **returns**: Object - created object instance.

#### createInstanceByType
Creates an instance of an object's type.

> `public static` Object createInstanceByType(Class<?> type, Object... args) throws Exception

- **type**: Class<?> - object type (factory function) to create.
- **args**: Object... - arguments for the object's constructor.
- **returns**: Object - created object instance.


#### getType
Gets an object's type by its name and library where it is defined.

> `public static` Class<?> getType(String name, String library) 

- **name**: String - object type name.
- **library**: String - library where the type is defined.
- **returns**: Class<?> - object type or null is the type wasn't found.

#### getTypeByDescriptor
Gets an object's type by type descriptor.

> `public static` Class<?> getTypeByDescriptor([TypeDescriptor](../type_descriptor) type)

- **descriptor**: [TypeDescriptor](../type_descriptor) - type descriptor that points to an object type.
- **returns**: Class<?> - object type or null is the type wasn't found.

#### isPrimitive
Checks if a value has a primitive type.

Primitive types are: numbers, strings, booleans, date and time.
Complex (non-primitive types are): objects, maps and arrays.  
See [TypeConverter.toTypeCode](../../convert/type_converter/#totypecode), [TypeCode](../../convert/type_code)

> `public static` boolean isPrimitive(Object value)

- **value**: Object - value to check
- **returns**:boolean - true if the value has primitive type and false if value type is complex.

### Examples

```java
{
  TypeDescriptor descriptor = new TypeDescriptor("MyObject", "mylibrary");
  TypeReflector.getTypeByDescriptor(descriptor);
  MyObject myObj = TypeReflector.createInstanceByDescriptor(descriptor);
 
  TypeDescriptor.isPrimitive(myObj);        // Result: false
  TypeDescriptor.isPrimitive(123);                // Result: true
  }

```

### See also
- #### [TypeDescriptor](../type_descriptor)
