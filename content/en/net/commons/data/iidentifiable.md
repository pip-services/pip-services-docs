---
type: docs
title: "IIdentifiable<K>"
linkTitle: "IIdentifiable"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    Interface used to create data objects that can be uniquely idendified by an ID.

---

### Description

The IIdentifiable interface is used to create data objects that can be uniquely idendified by an ID.

Important points

- The type specified in the interface defines the type of the ID field.

### Properties

#### Id
The unique object identifier of type K.
> T Id { get; set; }

### Examples
```cs
public class MyData: IIdentifiable<String> 
{
    string id {get; set;}
    string field1;
    int field2;
    ...
}
```

