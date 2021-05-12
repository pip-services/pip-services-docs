---
type: docs
title: "Descriptor"
linkTitle: "Descriptor"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Component locator based on group, type, kind, name and version of the component.
---

### Description
The Descriptor class provides you with a component locator. This locator is often used in the PipServices toolkit. It locates components using the following fields:

- **Group:** a package or just named group of components like "pip-services". 
- **Type:** logical component type that defines it's contract like "persistence" .
- **Kind:** physical implementation type like "mongodb".  
- **Name:** unique component name like "default".  
- **Version:** version of the component contract like "1.0".  

Important points

- The locator matching can be done by all or only few selected fields. 
- The fields that shall be excluded from the matching must be set to *"*"* or *None*.
- This approach allows to implement many interesting scenarios. For instance:
    - Locate all loggers (match by type and version)  
    - Locate persistence components for a microservice (match by group and type)  
    - Locate specific component by its name (match by name) 

### Constructors
Creates a new instance of the descriptor.

> Descriptor(group: Optional[str], type: Optional[str], kind: Optional[str], name: Optional[str], version: Optional[str])

- **group**: Optional[str] - a logical component group
- **type**: Optional[str] - a logical component type or contract
- **kind**: Optional[str] - a component implementation type
- **name**: Optional[str] - a unique component name
- **version**: Optional[str] - a component implementation version


### Instance methods

#### equals
Compares this descriptor to a value.
If value is a Descriptor it tries to match them,
otherwise the method returns false.

> equals(value: Any): bool

- **value**: Any - the value to match against this descriptor.
- **returns**: bool - true if the value is matching descriptor and false otherwise.

#### exact_match
Matches this descriptor to another descriptor by all fields.
No exceptions are made.

> exact_match(descriptor: [Descriptor]()): bool

- **descriptor**: [Descriptor]() - the descriptor to match this one against.
- **returns**: bool - true if descriptors match and false otherwise. 


#### get_group
Gets the component's logical group.

> get_group(): str

- **returns**: str - the component's logical group

#### get_kind
Gets the component's implementation type.

> get_kind(): str

- **returns**: str - the component's implementation type.
    

#### get_name
Gets the unique component's name.

> get_name(): str

- **returns**: str - the unique component's name.

#### get_version
Gets the component's implementation version.

> get_version(): str

- **returns**: str - the component's implementation version.

#### is_complete
Checks whether all descriptor fields are set.
If descriptor has at least one "*" or None field it is considered "incomplete",

> is_complete(): bool

- **returns**: bool - true if all descriptor fields are defined and false otherwise.

#### match
Partially matches this descriptor to another descriptor.
Fields that contain "*" or None are excluded from the match.

> match(descriptor: [Descriptor]()): bool

- **descriptor**: [Descriptor]() the descriptor to match this one against.
- **returns**: bool - true if descriptors match and false otherwise 

#### to_string
Gets a string representation of the object.
The result is a colon-separated list of descriptor fields as
*"mygroup:connector:aws:default:1.0"*

> to_string(): str

- **returns**: str - a string representation of the object.

### Static methods

#### from_string
Parses colon-separated list of descriptor fields and returns them as a Descriptor.  
Throws a [ConfigException](../../errors/config_exception) if the descriptor string is of a wrong format.

> `static` from_string(value: str): [Descriptor]()

- **value**: str - colon-separated descriptor fields to initialize Descriptor.
- **returns**: [Descriptor]() - a newly created Descriptor.

### Examples

```python
locator1 = Descriptor("mygroup", "connector", "aws", "default", "1.0")
locator2 = Descriptor.from_string("mygroup:connector:*:*:1.0")

locator1.match(locator2)           # Returns True
locator1.exact_match(locator2)     # Returns False
```
