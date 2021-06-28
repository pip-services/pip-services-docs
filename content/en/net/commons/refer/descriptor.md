---
type: docs
title: "Descriptor"
linkTitle: "Descriptor"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Component locator based on group, type, kind, name and version of the component.
---

### Description
The Descriptor class provides you with a component locator. This locator is often used in the PipServices toolkit. It locates components using the following fields:

- **Group:** package or just named group of components, like "pip-services". 
- **Type:** logical component type that defines it's contract, like "persistence" .
- **Kind:** physical implementation type, like "mongodb".  
- **Name:** unique component name, like "default".  
- **Version:** version of the component contract, like "1.0".  

Important points

- The locator matching can be done by all or only a few selected fields. 
- The fields that shall be excluded from the matching must be set to *"*"* or *null*.
- This approach allows to implement many interesting scenarios. For instance:
    - Locate all loggers (match by type and version)  
    - Locate persistence components for a microservice (match by group and type)  
    - Locate specific component by its name (match by name) 

### Constructors
Creates a new instance of the descriptor.

> `public` Descriptor(string group, string type, string kind, string name, string version)

- **group**: string - logical component group
- **type**: string - logical component type or contract
- **kind**: string - component implementation type
- **name**: string - unique component name
- **version**: string - component implementation version


### Properties

#### Group
Gets the component's logical group.
> `public` string Group [ get, private set ]

#### Type
> `public` string Type [ get, private set ]

#### Kind
Gets the component's implementation type.
> `public` string Kind [ get, private set ]


#### Name
Gets the unique component's name.
> `public` string Name [ get, private set ]


#### Version
Gets the component's implementation version.
> `public` string Version [ get, private set ]



### Instance methods

#### Equals
Compares this descriptor to a value.
If value is a Descriptor, it tries to match them;
otherwise, the method returns false.

> `public override` bool Equals(object obj)

- **obj**: object - value to match against this descriptor.
- **returns**: bool - true if the value is matching descriptor and false otherwise.

#### ExactMatch
Matches this descriptor to another descriptor by all fields.
No exceptions are made.

> `public` bool ExactMatch([Descriptor]() descriptor)

- **descriptor**: [Descriptor]() - descriptor to match this one against.
- **returns**: bool - true if the descriptors match and false otherwise. 

#### GetHashCode
Gets a Hash code

> `public override` int GetHashCode()

- **returns**: int - Hash code

#### IsComplete
Checks whether all descriptor fields are set.
If descriptor has at least one "*" or null field, it is considered "incomplete",

> `public` bool IsComplete()

- **returns**: bool - true if all descriptor fields are defined and false otherwise.


#### Match
Partially matches this descriptor to another descriptor.
Fields that contain "*" or null are excluded from the match.

> `public` bool Match([Descriptor]() descriptor)

- **descriptor**: [Descriptor]() descriptor to match this one against.
- **returns**: bool - true if the descriptors match and false otherwise 

#### ToString
Gets a string representation of the object.
The result is a colon-separated list of the descriptor's fields as
*"mygroup:connector:aws:default:1.0"*

> `public override` string ToString()

- **returns**: string - string representation of the object.

### Static methods

#### FromString
Parses a colon-separated list of descriptor fields and returns them as a Descriptor.  
Throws a [ConfigException](../../errors/config_exception) if the descriptor string is of a wrong format.

> `public static` [Descriptor]() FromString(string value)

- **value**: string - colon-separated descriptor fields used to initialize Descriptor.
- **returns**: [Descriptor]() - newly created Descriptor.

### Examples

```cs
var locator1 = new Descriptor("mygroup", "connector", "aws", "default", "1.0");
var locator2 = Descriptor.fromString("mygroup:connector:*:*:1.0");

locator1.match(locator2);       // Result: true
locator1.equal(locator2);       // Result: true
locator1.exactMatch(locator2);  // Result: false

```
