---
type: docs
title: "TypeDescriptor"
linkTitle: "TypeDescriptor"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    The TypeDescriptor class stores a reference to a type represented by the type name and library (module) where the type is defined.
    
---

### Description

The TypeDescriptor class stores a reference to a type represented by the type name and library (module) where the type is defined.

Important points

- This class has symmetric implementation across all languages supported by the Pip.Services toolkit and it is used to support dynamic data processing.

### Constructors
Creates a new instance of the type descriptor and sets its values.

> `public` TypeDescriptor(string name, string library)

- **name**: string - name of the object type.
- **library**: string - library or module where this object type is implemented.


Creates a new instance of the type descriptor.

> `public` TypeDescriptor()


### Properties

#### Name
Name of the object type.

> `public` string Name { get; }

#### Library
Gets the name of the library or module where the object type is defined.

> `public` string Library { get; }



### Instance methods

#### Equals
Compares this descriptor to a value.
If the value is also a [TypeDescriptor]() it compares their name and library fields.
Otherwise this method returns false.

> `public override` bool Equals(object value)

- **value**: object - value to compare.
- **returns**: bool - true if value is identical TypeDescriptor and false otherwise.

#### GetHashCode
Gets the Hash code

> `public override` int GetHashCode()

- **returns**: int - Hash code


#### ToString
Gets a string representation of the object.
The result has format *name[,library]*

> `public override` string ToString()

- **returns**: string - string representation of the object.

### Static methods

#### FromString
Parses a string to get descriptor fields and returns them as a Descriptor.
The string must have format the *name[,library]*  
Throws a [ConfigException](../../errors/config_exception) if the descriptor string is of a wrong format.

> `public static` [TypeDescriptor]() FromString(string value)

- **value**: string - string to parse.
- **returns**: [TypeDescriptor]() - newly created Descriptor.
