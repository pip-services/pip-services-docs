---
type: docs
title: "Descriptor"
linkTitle: "Descriptor"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-components-go"
description: >
    Component locator based on group, type, kind, name and version of the component.
---

### Description
The Descriptor class provides you with a component locator. This locator is often used in the PipServices toolkit. It locates components using the following fields:

- **Group:** package or named group of components, like "pip-services". 
- **Type:** logical component type that defines it's contract, like "persistence" .
- **Kind:** physical implementation type, like "mongodb".  
- **Name:** unique component name, like "default".  
- **Version:** version of the component contract, like "1.0".  

Important points

- The locator matching can be done by all or only few selected fields. 
- The fields that shall be excluded from the matching must be set to *"*"* or *null*.
- This approach allows to implement many interesting scenarios. For instance:
    - Locate all loggers (match by type and version)  
    - Locate persistence components for a microservice (match by group and type)  
    - Locate specific component by its name (match by name) 

### Constructors
Creates a new instance of the descriptor.

> `public` constructor(group: string, type: string, kind: string, name: string, version: string)

- **group**: string - logical component group
- **type**: string - logical component type or contract
- **kind**: string - component implementation type
- **name**: string - unique component name
- **version**: string - component implementation version


### Instance methods

#### equals
Compares this descriptor to a value.
If value is a Descriptor it tries to match them,
otherwise the method returns false.

> `public` equals(value: any): boolean

- **value**: any - value to match against this descriptor.
- **returns**: boolean - true if the value is matching descriptor and false otherwise.

#### exactMatch
Matches this descriptor to another descriptor by all fields.
No exceptions are made.

> `public` exactMatch(descriptor: [Descriptor]()): boolean

- **descriptor**: [Descriptor]() - descriptor to match this one against.
- **returns**: boolean - true if descriptors match and false otherwise. 


#### getGroup
Gets the component's logical group.

> `public` getGroup(): string

- **returns**: string - component's logical group

#### getKind
Gets the component's implementation type.

> `public` getKind(): string

- **returns**: string - component's implementation type.
    

#### getName
Gets the unique component's name.

> `public` getName(): string

- **returns**: string - unique component's name.


#### getType
Gets the component's logical type.

> `public` getType(): string

- **returns**: string - the component's logical type.

#### getVersion
Gets the component's implementation version.

> `public` getVersion(): string

- **returns**: string - component's implementation version.

#### isComplete
Checks whether all descriptor fields are set.
If descriptor has at least one "*" or null field it is considered "incomplete",

> `public` isComplete(): boolean

- **returns**: boolean - true if all descriptor fields are defined and false otherwise.

#### match
Partially matches this descriptor to another descriptor.
Fields that contain "*" or null are excluded from the match.

> `public` match(descriptor: [Descriptor]()): boolean

- **descriptor**: [Descriptor]() descriptor to match this one against.
- **returns**: boolean - true if descriptors match and false otherwise 

#### toString
Gets a string representation of the object.
The result is a colon-separated list of descriptor fields as
*"mygroup:connector:aws:default:1.0"*

> `public` toString(): string

- **returns**: string - string representation of the object.

### Static methods

#### fromString
Parses colon-separated list of descriptor fields and returns them as a Descriptor.  
Throws a [ConfigError](../../../commons/errors/config_error) if the descriptor string is of a wrong format.

> `public static` fromString(value: string): [Descriptor]()

- **value**: string - colon-separated descriptor fields to initialize Descriptor.
- **returns**: [Descriptor]() - newly created Descriptor.

### Examples

```go
locator1 := NewDescriptor("mygroup", "connector", "aws", "default", "1.0");
     locator2 := NewDescriptorFromString("mygroup:connector:*:*:1.0");

     locator1.Match(locator2);        // Result: true
     locator1.Equal(locator2);        // Result: true
     locator1.ExactMatch(locator2);    // Result: false
```

