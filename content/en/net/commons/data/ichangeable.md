---
type: docs
title: "IChangeable!"
linkTitle: "IChangeable!"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    Interface for data objects that need to store the last modified date and time.


    **Note: this interface is not available for this language**
---

### Description

The IChangeable interface allows you to store the last modified date and time in the "change_time" parameter of a data object.

### Fields

<span class="hide-title-link">

#### changeTime
The UTC time at which the object was last changed (created or updated).
> `public` DateTime changeTime


### Examples
```cs
class MyData: IStringIdentifiable, IChangeable {
    public string id;
    public string field1;
    public int field2;
    public DateTime changeTime;
    ...
}
```
</span>
