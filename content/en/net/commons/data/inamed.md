---
type: docs
title: "INamed"
linkTitle: "INamed"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
   Interface for data objects that have human-readable names.

---

### Description

The INamed interface is used to define data objects containing a human-readable name.

### Properties


#### Name
The object's humand-readable name.
> string Name [ get, set ]

### Examples
```cs
public class MyData: IStringIdentifiable, INamed 
{
    string id {get; set;}
    string name {get; set;}
    string field1;
    int field2;
    ...
}
```

