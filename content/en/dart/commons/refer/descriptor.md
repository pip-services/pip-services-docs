---
type: docs
title: "Descriptor"
linkTitle: "Descriptor"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
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

**Important points**

- The locator matching can be done by all or only few selected fields. 
- The fields that shall be excluded from the matching must be set to *"*"* or *null*.
- This approach allows to implement many interesting scenarios. For instance:
    - Locate all loggers (match by type and version)  
    - Locate persistence components for a microservice (match by group and type)  
    - Locate specific component by its name (match by name) 

### Constructors
Creates a new instance of the descriptor.

> Descriptor(String group, String type, String kind, String name, String version)

- **group**: String - logical component group
- **type**: String - logical component type or contract
- **kind**: String - component implementation type
- **name**: String - unique component name
- **version**: String - component implementation version


### Instance methods

#### equals
Compares this descriptor to a value.
If value is a Descriptor it tries to match them,
otherwise the method returns false.

> bool equals(value)

- **value**: dynamic - value to match against this descriptor.
- **returns**: bool - true if the value is matching descriptor and false otherwise.

#### exactMatch
Matches this descriptor to another descriptor by all fields.
No exceptions are made.

> bool exactMatch([Descriptor]() descriptor)

- **descriptor**: [Descriptor]() - descriptor to match this one against.
- **returns**: bool - true if descriptors match and false otherwise. 


#### getGroup
Gets the component's logical group.

> String getGroup()

- **returns**: String - component's logical group

#### getKind
Gets the component's implementation type.

> String getKind()

- **returns**: String - component's implementation type.
    

#### getName
Gets the unique component's name.

> String getName()

- **returns**: String - unique component's name.

#### getVersion
Gets the component's implementation version.

> String getVersion()

- **returns**: String - component's implementation version.

#### isComplete
Checks whether all descriptor fields are set.
If descriptor has at least one "*" or null field it is considered "incomplete",

> bool isComplete()

- **returns**: bool - true if all descriptor fields are defined and false otherwise.

#### match
Partially matches this descriptor to another descriptor.
Fields that contain "*" or null are excluded from the match.

> bool match([Descriptor]() descriptor)

- **descriptor**: [Descriptor]() descriptor to match this one against.
- **returns**: bool - true if descriptors match and false otherwise 

#### toString
Gets a string representation of the object.
The result is a colon-separated list of descriptor fields as
*"mygroup:connector:aws:default:1.0"*

`@override`
> String toString()

- **returns**: String - string representation of the object.

### Static methods

#### fromString
Parses colon-separated list of descriptor fields and returns them as a Descriptor.  
Throws a [ConfigException](../../errors/config_exception) if the descriptor string is of a wrong format.

> `static` [Descriptor]() fromString(String value)

- **value**: String - colon-separated descriptor fields to initialize Descriptor.
- **returns**: [Descriptor]() - newly created Descriptor.

### Examples

```dart
var locator1 =  Descriptor('mygroup', 'connector', 'aws', 'default', '1.0');
var locator2 = Descriptor.fromString('mygroup:connector:*:*:1.0');

locator1.match(locator2);		// Result: true
locator1.equal(locator2);		// Result: true
locator1.exactMatch(locator2);	// Result: false

```
