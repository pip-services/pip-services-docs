---
type: docs
title: "TypeDescriptor"
linkTitle: "TypeDescriptor"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: >
    The TypeDescriptor class stores a reference to a type represented by the type name and library (module) where the type is defined.
    
---

### Description

The TypeDescriptor class stores a reference to a type represented by the type name and library (module) where the type is defined.

Important points

- This class has symmetric implementation across all languages supported by the Pip.Services toolkit and it is used to support dynamic data processing.

### Constructors

#### NewTypeDescriptor
Creates a new instance of the type descriptor and sets its values.

> NewTypeDescriptor(name string, pkg string) [*TypeDescriptor]()

- **name**: string - name of the object type.
- **pkg**: string - library or module where this object type is implemented.


### Methods

#### Equals
Compares this descriptor to a value.
If the value is also a [TypeDescriptor]() it compares their name and library fields.
Otherwise this method returns false.

> (c [*TypeDescriptor]()) Equals(obj any) bool

- **obj**: any - value to compare.
- **returns**: bool - true if value is identical TypeDescriptor and false otherwise.

#### Package
Gets the name of the library or module where the object type is defined.

> (c [*TypeDescriptor]()) Package() string

- **returns**: string - name of the library or module.


#### Name
Get the name of the object type.

> (c [*TypeDescriptor]()) Name() string

- **returns**: string - name of the object type.


#### ParseTypeDescriptorFromString
Parses a string to get descriptor fields and returns them as a Descriptor.
The string must have format *name[,library]*  
Throws a [ConfigError](../../errors/config_error) if the descriptor string is of a wrong format.

> ParseTypeDescriptorFromString(value string) ([*TypeDescriptor](), error)

- **value**: string - a string to parse.
- **returns**: ([*TypeDescriptor](), error) - a newly created Descriptor.

#### String
Gets a string representation of the object.
The result has format *name[,package]*

> (c [*TypeDescriptor]()) String() string

- **returns**: string - string representation of the object.

