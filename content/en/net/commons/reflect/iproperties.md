---
type: docs
title: "IProperties"
linkTitle: "IProperties"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    This interface provides methods to get and set the properties of a class.

---

### Description

This interface provides methods to get and set the properties of a class.

### Instance methods

#### GetPropertyNames
Gets all the property names.

> List\<string\> GetPropertyNames()

- **returns**: List\<string\> - list with property names

#### GetProperty
Gets a property's value

> object GetProperty(string name)

- **name**: string - property's name
- **returns**: object - property's value

#### SetProperty
Sets the value of a property.

> void SetProperty(string name, object value)

- **name**: string - property's name
- **value**: object - property's value


