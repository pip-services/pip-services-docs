---
type: docs
title: "TypeReflector"
linkTitle: "TypeReflector"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Helper class that allows you to examine the type of an object and create instancies of objects based on their type.


---

### Description

The TypeReflector class allows you to examine the type of an object and create instancies of objects based on their type.

Important points

- This class has symmetric implementation across all languages supported by the Pip.Services toolkit and used to support dynamic data processing.
- Because all languages have different casing and case sensitivity rules, the TypeReflector class treats all type names as case insensitive.



### Static methods

#### CreateInstance
Creates an instance of an object type specified by its name and library where it is defined.

> `public static` object CreateInstance(string name, string library, params object[] args)

- **name**: string - object type name.
- **library**: string - library (module) where the object type is defined.
- **args**: object[] - arguments for the object constructor.
- **returns**: object - created object instance.

#### CreateInstance
Creates an instance of an object type specified by its name.

> `public static` object CreateInstance(string name, params object[] args)

- **name**: string - object type name.
- **args**: object[] - arguments for the object's constructor.
- **returns**: object - created object's instance.

#### CreateInstanceByDescriptor
Creates an instance of an object type specified by a type descriptor.

> `public static` object CreateInstanceByDescriptor([TypeDescriptor](../type_descriptor) descriptor, params object[] args)

- **descriptor**: [TypeDescriptor](../type_descriptor) - type descriptor that points to an object type
- **args**: object[] - arguments for the object's constructor.
- **returns**: object - created object instance.

#### CreateInstanceByType
Creates an instance of an object type.

> `public static` object CreateInstanceByType(Type type, params object[] args)

- **type**: Type - object type (factory function) to create.
- **args**: object[] - arguments for the object's constructor.
- **returns**: object - created object's instance.


#### GetType
Gets an object's type by its name and library where it is defined.

> `public static` Type GetType(string name, string library) 

- **name**: string - object's type name.
- **library**: string - library where the type is defined
- **returns**: Type - the object type or null is the type wasn't found.

#### GetType
Gets an object's type by its name and library where it is defined.

> `public static` Type GetType(string name, string library) 

- **name**: string - object type name.
- **library**: string - library where the type is defined
- **returns**: Type - object type or null is the type wasn't found.

#### GetTypeByDescriptor
Gets an object type by  its type descriptor.

> `public static` Type GetTypeByDescriptor([TypeDescriptor](../type_descriptor) descriptor) 

- **descriptor**: [TypeDescriptor](../type_descriptor) - type descriptor that points to an object type
- **returns**: Type - object type or null is the type wasn't found.

#### IsPrimitive

Checks if value has a primitive type.

Primitive types are: numbers, strings, booleans, date and time.
Complex (non-primitive types are): objects, maps and arrays.  
See [TypeConverter.ToTypeCode](../../convert/type_converter/#totypecode), [TypeCode](../../convert/type_code)

> `public static` bool IsPrimitive(object value) 

- **value**: object - value to check
- **returns**: bool - true if the value has primitive type and false if value type is complex.

### Examples

```cs
var descriptor = new TypeDescriptor("MyObject", "mylibrary");
TypeReflector.GetTypeByDescriptor(descriptor);
var myObj = TypeReflector.CreateInstanceByDescriptor(descriptor);

TypeDescriptor.IsPrimitive(myObject);   // Result: false
TypeDescriptor.IsPrimitive(123);        // Result: true

```

### See also
- #### [TypeDescriptor](../type_descriptor)
