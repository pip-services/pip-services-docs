---
type: docs
title: "IVersioned"
linkTitle: "IVersioned"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    Interface used to define data objects that can be versioned.

---

### Description

The IVersioned interface allows you to define data objects that can be versioned.

Important points

- Versioning is often used as an optimistic concurrency mechanism.
- The version doesn't have to be a number, but it is recommended to use sequential values to determine if one object has a newer or older version than another one.
- It is common to use the time of change as the object version.

### Properties

#### Version
The object's version.
> string Version [ get, set ]



### Examples
```cs
public class MyData: IStringIdentifiable, IVersioned 
{
    string id {get; set;}
    string field1;
    int field2;
    string version {get; set;}
    ...
}
public void updateData(string correlationId, MyData item) 
{
    ...
    if (item.Version < oldItem.Version) 
    {
        throw new ConcurrencyException(null, "VERSION_CONFLICT", "The change has older version stored value");
    }
    ...
}
```