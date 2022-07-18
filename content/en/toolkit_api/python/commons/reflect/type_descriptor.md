---
type: docs
title: "TypeDescriptor"
linkTitle: "TypeDescriptor"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    The TypeDescriptor class stores a reference to a type represented by the type name and library (module) where the type is defined.
    
---

### Description

The TypeDescriptor class stores a reference to a type represented by the type name and library (module) where the type is defined.

**Important points**

- This class has symmetric implementation across all languages supported by the Pip.Services toolkit and it is used to support dynamic data processing.

### Constructors
Creates a new instance of the type descriptor and sets its values.

> TypeDescriptor(name: str, library: str)

- **name**: str - name of the object type.
- **library**: str - library or module where this object type is implemented.


### Instance methods

#### equals
Compares this descriptor to a value.
If the value is also a [TypeDescriptor](), it compares their name and library fields.
Otherwise this method returns false.

> equals(value: Any): bool

- **value**: Any - value to compare.
- **returns**: bool - true if value is identical TypeDescriptor and false otherwise.

#### get_library
Gets the name of the library or module where the object type is defined.

> get_library(): str

- **returns**: str - name of the library or module.


#### get_name
Gets the name of the object type.

> get_name(): str

- **returns**: str - name of the object type.


#### to_string
Gets a string representation of the object.
The result has format *name[,library]*

> to_string(): str

- **returns**: str - string representation of the object.

### Static methods

#### from_string
Parses a string to get descriptor fields and returns them as a Descriptor.
The string must have format *name[,library]*  
Throws a [ConfigException](../../errors/config_exception) if the descriptor string has the wrong format.

> `static` from_string(value: str): [TypeDescriptor]()

- **value**: str - string to parse.
- **returns**: [TypeDescriptor]() - newly created Descriptor.
