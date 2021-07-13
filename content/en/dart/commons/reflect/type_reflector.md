---
type: docs
title: "TypeReflector"
linkTitle: "TypeReflector"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Helper class that allows you to examine the type of an object, and create instancies of objects based on their type.


---

### Description

The TypeReflector class allows you to examine the type of an object, and create instancies of objects based on their type.

Important points

- This class has symmetric implementation across all languages supported by the Pip.Services toolkit and used to support dynamic data processing.
- Because all languages have different casing and case sensitivity rules, the TypeReflector class treats all type names as case insensitive.



### Static methods

#### createInstanceByType
Creates an instance of an object type.

> `static` dynamic createInstanceByType(Type type, List args)

- **type**: Type - object type (factory function) to create.
- **args**: List - arguments for the object constructor.
- **returns**: dynamic - created object's instance.

#### createInstanceByDescriptor
Creates an instance of an object type specified by a type descriptor.

> `static` dynamic createInstanceByDescriptor([TypeDescriptor](../type_descriptor) descriptor, List args)

- **descriptor**: [TypeDescriptor](../type_descriptor) - type descriptor that points to an object type
- **args**: List - arguments for the object constructor.
- **returns**: dynamic - created object instance.

#### createInstanceByType
Creates an instance of an object's type.

> `static` dynamic createInstanceByType(Type type, List args)

- **type**: Type - object type (factory function) to create.
- **args**: List - arguments for the object's constructor.
- **returns**: dynamic - created object instance.


#### getType
Gets an object's type by its name and library where it is defined.

> `static` Type getType(String name, [String library])

- **name**: String - object type name.
- **library**: String - library where the type is defined.
- **returns**: Type - object type or null is the type wasn't found.

#### getTypeByDescriptor
Gets an object's type by type descriptor.

> `static` Type getTypeByDescriptor([TypeDescriptor](../type_descriptor) descriptor) 

- **descriptor**: [TypeDescriptor](../type_descriptor) - type descriptor that points to an object type.
- **returns**: Type - object type or null is the type wasn't found.

#### isPrimitive
Checks if a value has a primitive type.

Primitive types are: numbers, strings, booleans, date and time.
Complex (non-primitive types are): objects, maps and arrays.  
See [TypeConverter.toTypeCode](../../convert/type_converter/#totypecode), [TypeCode](../../convert/type_code)

> `static` bool isPrimitive(value)

- **value**: dynamic - value to check
- **returns**:bool - true if the value has primitive type and false if value type is complex.

### Examples

```dart
var descriptor =  TypeDescriptor('MyObject', 'mylibrary');
Typeeflector.getTypeByDescriptor(descriptor);
var myObj = TypeReflector.createInstanceByDescriptor(descriptor);

TypeDescriptor.isPrimitive(myObject); 		    // Result: false
TypeDescriptor.isPrimitive(123);				// Result: true

```

### See also
- #### [TypeDescriptor](../type_descriptor)
