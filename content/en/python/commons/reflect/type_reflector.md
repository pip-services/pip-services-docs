---
type: docs
title: "TypeReflector"
linkTitle: "TypeReflector"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Helper class to perform object type introspection and object instantiation.

    This class has symmetric implementation across all languages supported
    by Pip.Services toolkit and used to support dynamic data processing.

    Because all languages have different casing and case sensitivity rules,
    this TypeReflector treats all type names as case insensitive.
---

See also [TypeDescriptor](../type_descriptor)

**Example:**

```python

descriptor = TypeDescriptor("MyObject", "mylibrary")
Typeeflector.get_type_by_descriptor(descriptor)
myObj = TypeReflector.create_instance_by_descriptor(descriptor)
TypeDescriptor.is_primitive(myObject)           # Result: false
TypeDescriptor.is_primitive(123)                # Result: true

```


### Methods

#### create_instance_by_type
Creates an instance of an object type.

> `static` create_instance_by_type(obj_type: Any, *args: Any): Any

- **type**: Any - an object type (factory function) to create.
- **args**: Any - arguments for the object constructor.
- **returns**: Any - the created object instance.

#### create_instance_by_descriptor
Creates an instance of an object type specified by type descriptor.

> `static` create_instance_by_descriptor(descriptor: [TypeDescriptor](../type_descriptor), *args: Any): Any

- **descriptor**: [TypeDescriptor](../type_descriptor) - a type descriptor that points to an object type
- **args**: Any - arguments for the object constructor.
- **returns**: Any - the created object instance.

#### create_instance_by_type
Creates an instance of an object type.

> `static` create_instance_by_type(obj_type: Any, *args: Any): Any:

- **type**: Any - an object type (factory function) to create.
- **args**: Any - arguments for the object constructor.
- **returns**: Any - the created object instance.


#### get_type
Gets object type by its name and library where it is defined.

> `static` get_type(name: str, library: str): Any 

- **name**: str - an object type name.
- **library**: str - a library where the type is defined
- **returns**: Any - the object type or null is the type wasn't found.

#### get_type_by_descriptor
Gets object type by type descriptor.

> `static` get_type_by_descriptor(descriptor: [TypeDescriptor](../type_descriptor)): Any 

- **descriptor**: [TypeDescriptor](../type_descriptor) - a type descriptor that points to an object type
- **returns**: Any - the object type or null is the type wasn't found.

#### is_primitive
Checks if value has primitive type.

Primitive types are: numbers, strings, booleans, date and time.
Complex (non-primitive types are): objects, maps and arrays.  
See [TypeConverter.to_type_code](../../convert/type_converter/#to_type_code), [TypeCode](../../convert/type_code)

> `static` is_primitive(value: Any): bool

- **value**: Any - a value to check
- **returns**: bool - true if the value has primitive type and false if value type is complex.

### See also
- #### [TypeDescriptor](../type_descriptor)
