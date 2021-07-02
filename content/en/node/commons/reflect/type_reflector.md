---
type: docs
title: "TypeReflector"
linkTitle: "TypeReflector"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
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

> `public static` createInstanceByType(type: any, ...args: any[]): any

- **type**: any - object type (factory function) to create.
- **args**: any[] - arguments for the object constructor.
- **returns**: any - created object's instance.

#### createInstanceByDescriptor
Creates an instance of an object type specified by a type descriptor.

> `public static` createInstanceByDescriptor(descriptor: [TypeDescriptor](../type_descriptor), ...args: any[]): any

- **descriptor**: [TypeDescriptor](../type_descriptor) - type descriptor that points to an object type
- **args**: any[] - arguments for the object constructor.
- **returns**: any - created object instance.

#### createInstanceByType
Creates an instance of an object's type.

> `public static` createInstanceByType(type: any, ...args: any[]): any

- **type**: any - object type (factory function) to create.
- **args**: any[] - arguments for the object's constructor.
- **returns**: any - created object instance.


#### getType
Gets an object's type by its name and library where it is defined.

> `public static` getType(name: string, library: string): any 

- **name**: string - object type name.
- **library**: string - library where the type is defined.
- **returns**: any - object type or null is the type wasn't found.

#### getTypeByDescriptor
Gets an object's type by type descriptor.

> `public static` getTypeByDescriptor(descriptor: [TypeDescriptor](../type_descriptor)): any 

- **descriptor**: [TypeDescriptor](../type_descriptor) - type descriptor that points to an object type.
- **returns**: any - object type or null is the type wasn't found.

#### isPrimitive
Checks if a value has a primitive type.

Primitive types are: numbers, strings, booleans, date and time.
Complex (non-primitive types are): objects, maps and arrays.  
See [TypeConverter.toTypeCode](../../convert/type_converter/#totypecode), [TypeCode](../../convert/type_code)

> `public static` isPrimitive(value: any): boolean 

- **value**: any - value to check
- **returns**:boolean - true if the value has primitive type and false if value type is complex.

### Examples

```typescript
let descriptor = new TypeDescriptor("MyObject", "mylibrary");
Typeeflector.getTypeByDescriptor(descriptor);
let myObj = TypeReflector.createInstanceByDescriptor(descriptor);

TypeDescriptor.isPrimitive(myObject);   // Result: false
TypeDescriptor.isPrimitive(123);        // Result: true

```

### See also
- #### [TypeDescriptor](../type_descriptor)
