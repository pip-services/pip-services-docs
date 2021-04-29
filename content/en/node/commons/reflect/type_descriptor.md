---
type: docs
title: "TypeDescriptor"
linkTitle: "TypeDescriptor"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Descriptor that points to specific object type by it's name
    and optional library (or module) where this type is defined.

    This class has symmetric implementation across all languages supported
    by Pip.Services toolkit and used to support dynamic data processing.
---

### Constructors
Creates a new instance of the type descriptor and sets its values.

> `public` constructor(name: string, library: string): [TypeDescriptor]()

- **name**: string - a name of the object type.
- **library**: string - a library or module where this object type is implemented.


### Methods

#### equals
Compares this descriptor to a value.
If the value is also a [TypeDescriptor]() it compares their name and library fields.
Otherwise this method returns false.

> `public` equals(value: any): boolean

- **value**: any - a value to compare.
- **returns**: boolean - true if value is identical TypeDescriptor and false otherwise.

#### getLibrary
Gets the name of the library or module where the object type is defined.

> `public` getLibrary(): string

- **returns**: string - the name of the library or module.


#### getName
Get the name of the object type.

> `public` getName(): string

- **returns**: string - the name of the object type.


#### toString
Gets a string representation of the object.
The result has format *name[,library]*

> `public` toString(): string

- **returns**: string - a string representation of the object.


#### fromString
Parses a string to get descriptor fields and returns them as a Descriptor.
The string must have format *name[,library]*  
Throws a [ConfigException](../../errors/config_exception) if the descriptor string is of a wrong format.

> `public static` fromString(value: string): [TypeDescriptor]()

- **value**: string - a string to parse.
- **returns**: [TypeDescriptor]() - a newly created Descriptor.
