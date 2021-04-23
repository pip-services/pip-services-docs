---
type: docs
title: "TypeReflector"
linkTitle: "TypeReflector"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Helper class to perform object type introspection and object instantiation.

    This class has symmetric implementation across all languages supported
    by Pip.Services toolkit and used to support dynamic data processing.

    Because all languages have different casing and case sensitivity rules,
    this TypeReflector treats all type names as case insensitive.
---

See also [TypeDescriptor](../type_descriptor)

**Example:**

```typescript
let descriptor = new TypeDescriptor("MyObject", "mylibrary");
Typeeflector.getTypeByDescriptor(descriptor);
let myObj = TypeReflector.createInstanceByDescriptor(descriptor);

TypeDescriptor.isPrimitive(myObject);   // Result: false
TypeDescriptor.isPrimitive(123);        // Result: true

```


### Methods

#### createInstanceByType
Creates an instance of an object type.

> `public static` createInstanceByType(type: any, ...args: any[]): any

- **type**: any - an object type (factory function) to create.
- **args**: any[] - arguments for the object constructor.
- **returns**: any - the created object instance.

#### createInstanceByDescriptor
Creates an instance of an object type specified by type descriptor.

> `public static` createInstanceByDescriptor(descriptor: [TypeDescriptor](../type_descriptor), ...args: any[]): any

- **descriptor**: [TypeDescriptor](../type_descriptor) - a type descriptor that points to an object type
- **args**: any[] - arguments for the object constructor.
- **returns**: any - the created object instance.

#### createInstanceByType
Creates an instance of an object type.

> `public static` createInstanceByType(type: any, ...args: any[]): any

- **type**: any - an object type (factory function) to create.
- **args**: any[] - arguments for the object constructor.
- **returns**: any - the created object instance.


#### getType
Gets object type by its name and library where it is defined.

> `public static` getType(name: string, library: string): any 

- **name**: string - an object type name.
- **library**: string - a library where the type is defined
- **returns**: any - the object type or null is the type wasn't found.

#### getTypeByDescriptor
Gets object type by type descriptor.

> `public static` getTypeByDescriptor(descriptor: [TypeDescriptor](../type_descriptor)): any 

- **descriptor**: [TypeDescriptor](../type_descriptor) - a type descriptor that points to an object type
- **returns**: any - the object type or null is the type wasn't found.

#### isPrimitive
Checks if value has primitive type.

Primitive types are: numbers, strings, booleans, date and time.
Complex (non-primitive types are): objects, maps and arrays.  
See [TypeConverter.toTypeCode](../../convert/type_converter/#totypecode), [TypeCode](../../convert/type_code)

> `public static` isPrimitive(value: any): boolean 

- **value**: any - a value to check
- **returns**:boolean - true if the value has primitive type and false if value type is complex.

### See also
- #### [TypeDescriptor](../type_descriptor)
