---
type: docs
title: "TypeDescriptor"
linkTitle: "TypeDescriptor"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
description: >
    The TypeDescriptor class stores a reference to a type represented by the type name and library (module) where the type is defined.
    
---

### Description

The TypeDescriptor class stores a reference to a type represented by the type name and library (module) where the type is defined.

Important points

- This class has symmetric implementation across all languages supported by the Pip.Services toolkit and it is used to support dynamic data processing.

### Constructors
Creates a new instance of the type descriptor and sets its values.

> `public` TypeDescriptor(String name, String library)

- **name**: String - name of the object type.
- **library**: String - library or module where this object type is implemented.


### Instance methods

#### equals
Compares this descriptor to a value.
If the value is also a [TypeDescriptor](), it compares their name and library fields.
Otherwise this method returns false.

> `public` boolean equals(Object obj)

- **value**: Object - value to compare.
- **returns**: boolean - true if value is identical to the TypeDescriptor and false otherwise.

#### getLibrary
Gets the name of the library or module where the object type is defined.

> `public` String getLibrary()

- **returns**: String - name of the library or module.


#### getName
Gets the name of the object type.

> `public` String getName()

- **returns**: String - name of the object type.


#### toString
Gets a string representation of the object.
The result has format *name[,library]*

> `public` String toString()

- **returns**: String - string representation of the object.

### Static methods

#### fromString
Parses a string to get descriptor fields and returns them as a Descriptor.
The string must have the format *name[,library]*.   
Throws a [ConfigException](../../errors/config_exception) if the descriptor string is of a wrong format.

> `public static` [TypeDescriptor]() fromString(String value) throws ConfigException

- **value**: String - string to parse.
- **returns**: [TypeDescriptor]() - newly created Descriptor.
