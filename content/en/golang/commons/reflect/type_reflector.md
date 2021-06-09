---
type: docs
title: "TypeReflector"
linkTitle: "TypeReflector"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Helper class that allows you to examine the type of an object, and create instancies of objects based on their type.


---

### Description

The TypeReflector class allows you to examine the type of an object, and create instancies of objects based on their type.

Important points

- This class has symmetric implementation across all languages supported by Pip.Services toolkit and used to support dynamic data processing.
- Because all languages have different casing and case sensitivity rules, the TypeReflector class treats all type names as case insensitive.



### Methods

#### CreateInstanceByType
Creates an instance of an object type.

> (c *TTypeReflector) CreateInstanceByType(typ refl.Type, args ...interface{}) (interface{}, error)

- **typ**: refl.Type - an object type (factory function) to create.
- **args**: ...interface{} - arguments for the object constructor.
- **returns**: (interface{}, error) - the created object instance.

#### CreateInstanceByDescriptor
Creates an instance of an object type specified by type descriptor.

> (c *TTypeReflector) CreateInstanceByDescriptor(typ [*TypeDescriptor](../type_descriptor), args ...interface{}) (interface{}, error)

- **typ**: [*TypeDescriptor](../type_descriptor) - a type descriptor that points to an object type
- **args**: ...interface{} - arguments for the object constructor.
- **returns**: (interface{}, error) - the created object instance.

#### CreateInstanceByType
Creates an instance of an object type.

> (c *TTypeReflector) CreateInstanceByType(typ refl.Type, args ...interface{}) (interface{}, error)

- **type**: refl.Type - an object type (factory function) to create.
- **args**: ...interface{} - arguments for the object constructor.
- **returns**: (interface{}, error) - the created object instance.


#### GetType
Gets object type by its name and library where it is defined.

> (c *TTypeReflector) GetType(name string, pkg string) refl.Type

- **name**: string - an object type name.
- **pkg**: string - a library where the type is defined
- **returns**: refl.Type - the object type or null is the type wasn't found.

#### GetTypeByDescriptor
Gets object type by type descriptor.

> (c *TTypeReflector) GetTypeByDescriptor(typ [*TypeDescriptor](../type_descriptor)) refl.Type

- **typ**: [*TypeDescriptor](../type_descriptor) - a type descriptor that points to an object type
- **returns**: refl.Type - the object type or null is the type wasn't found.

#### IsPrimitive!
**TODO: is not implemented for this language yet**

Checks if value has primitive type.

Primitive types are: numbers, strings, booleans, date and time.
Complex (non-primitive types are): objects, maps and arrays.  
See [TypeConverter.ToTypeCode](../../convert/type_converter/#totypecode), [TypeCode](../../convert/type_code)

> `public static` isPrimitive(value: any): boolean 

- **value**: any - a value to check
- **returns**:boolean - true if the value has primitive type and false if value type is complex.

### Examples

```go
descriptor := NewTypeDescriptor("MyObject", "mylibrary");
TypeReflector.GetTypeByDescriptor(descriptor);
myObj = TypeReflector.CreateInstanceByDescriptor(descriptor);

```

### See also
- #### [TypeDescriptor](../type_descriptor)
