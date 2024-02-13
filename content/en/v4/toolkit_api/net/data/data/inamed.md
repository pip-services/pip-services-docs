---
type: docs
title: "INamed"
linkTitle: "INamed"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-data-dotnet"
description: > 
   Interface for data objects that have human-readable names.

---

### Description

The INamed interface is used to define data objects that have a human-readable name.

### Properties


#### Name
The object's humand-readable name.
> string Name { get; set; }

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


