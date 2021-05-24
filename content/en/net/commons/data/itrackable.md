---
type: docs
title: "ITrackable"
linkTitle: "ITrackable"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    Interface for data objects that can track their changes, including logical deletion.
---

**Inherits**: [IChangeable](../ichangeable)

### Description

The ITrackagle interface allows you to define data objects that can track their changes, including logical deletion.

### Properties


#### CreatedTime
The UTC time at which the object was created.
> DateTime CreatedTime [ get, set ]

#### LastChangeTime
The UTC time at which the object was last changed (created, updated, or deleted).
> DateTime LastChangeTime [ get, set ]

#### IsDeleted
The logical deletion flag. True when object is deleted and null or false otherwise
> bool IsDeleted [ get, set ]


### Examples

```cs
public class MyData: IStringIdentifiable, ITrackable 
{
    string id {get; set;}
    string field1;
    int field2;
    ...
    DateTime change_time {get; set;}
    DateTime create_time {get; set;}
    bool deleted {get; set;}
}
```

### See also
- #### [IChangeable](../ichangeable)
