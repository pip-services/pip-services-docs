---
type: docs
title: "Descriptor"
linkTitle: "Descriptor"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Component locator based on group, type, kind, name and version of the component.
---

### Description
The Descriptor class provides you with a component locator. This locator is often used in the PipServices toolkit. It locates components using the following fields:

- **Group:** a package or just named group of components, like "pip-services". 
- **Type:** logical component type that defines it's contract, like "persistence" .
- **Kind:** physical implementation type, like "mongodb".  
- **Name:** unique component name, like "default".  
- **Version:** version of the component contract, like "1.0".  

Important points

- The locator matching can be done by all or only few selected fields. 
- The fields that shall be excluded from the matching must be set to *"*"* or *nil*.
- This approach allows to implement many interesting scenarios. For instance:
    - Locate all loggers (match by type and version)  
    - Locate persistence components for a microservice (match by group and type)  
    - Locate specific component by its name (match by name) 

### Constructors

#### NewDescriptor
Creates a new instance of the descriptor.

> NewDescriptor(group string, typ string, kind string, name string, version string) [*Descriptor]()

- **group**: string - logical component group
- **typ**: string - logical component type or contract
- **kind**: string - component implementation type
- **name**: string - unique component name
- **version**: string - component implementation version


### Methods

#### Equals
Compares this descriptor to a value.
If value is a Descriptor it tries to match them,
otherwise the method returns false.

> (c [*Descriptor]()) Equals(value interface{}) bool

- **value**: interface{} - value to match against this descriptor.
- **returns**: bool - true if the value is matching descriptor and false otherwise.

#### ExactMatch
Matches this descriptor to another descriptor by all fields.
No exceptions are made.

> (c [*Descriptor]()) ExactMatch(descriptor [*Descriptor]()) bool

- **descriptor**: [*Descriptor]() - descriptor to match this one against.
- **returns**: bool - true if descriptors match and false otherwise. 


#### Group
Gets the component's logical group.

> (c [*Descriptor]()) Group() string

- **returns**: string - component's logical group

#### Kind
Gets the component's implementation type.

> (c [*Descriptor]()) Kind() string

- **returns**: string - component's implementation type.
    

#### Name
Gets the unique component's name.

> (c [*Descriptor]()) Name() string

- **returns**: string - unique component's name.

#### Version
Gets the component's implementation version.

> (c [*Descriptor]()) Version() string

- **returns**: string - component's implementation version.

#### IsComplete
Checks whether all descriptor fields are set.
If descriptor has at least one "*" or nil field it is considered "incomplete",

> (c [*Descriptor]()) IsComplete() bool

- **returns**: bool - true if all descriptor fields are defined and false otherwise.

#### Match
Partially matches this descriptor to another descriptor.
Fields that contain "*" or nil are excluded from the match.

> (c [*Descriptor]()) Match(descriptor [*Descriptor]()) bool

- **descriptor**: [*Descriptor]() descriptor to match this one against.
- **returns**: bool - true if descriptors match and false otherwise


#### ParseDescriptorFromString
Parses colon-separated list of descriptor fields and returns them as a Descriptor.  
Throws a [ConfigError](../../errors/config_error) if the descriptor string is of a wrong format.

> ParseDescriptorFromString(value string) ([*Descriptor](), error)

- **value**: string - colon-separated descriptor fields to initialize Descriptor.
- **returns**: [*Descriptor]() - newly created Descriptor.


#### String
Gets a string representation of the object.
The result is a colon-separated list of descriptor fields as
*"mygroup:connector:aws:default:1.0"*

> (c [*Descriptor]()) String() string

- **returns**: string - string representation of the object.


### Examples

```go
locator1 := NewDescriptor("mygroup", "connector", "aws", "default", "1.0");
locator2 := NewDescriptorFromString("mygroup:connector:*:*:1.0");
 
locator1.Match(locator2);        // Result: true
locator1.Equal(locator2);        // Result: true
locator1.ExactMatch(locator2);    // Result: false

```
