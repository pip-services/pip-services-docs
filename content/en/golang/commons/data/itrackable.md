---
type: docs
title: "ITrackable!"
linkTitle: "ITrackable!"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    Interface for data objects that can track their changes, including logical deletion.
---

**Extends:** [IChangeable](../ichangeable)

### Description

The ITrackagle interface allows you to define data objects that can track their changes, including logical deletion.

### Fields

<span class="hide-title-link">

#### create_time
The UTC time at which the object was created.
> **CreateTime**: time.Time

#### change_time
The UTC time at which the object was last changed (created, updated, or deleted).
> **ChangeTime**: time.Time

#### deleted
The logical deletion flag. True when object is deleted and nil or false otherwise
> **Deleted**: bool

</span>

### Examples

```go
type MyData struct  {
    Id string                  `json:"id"`
    Field1 string              `json:"field1"`
    Field2 int32               `json:"field2"`
    ...
    ChangeTime time.Time        `json:"change_time"`
    CreateTime time.Time        `json:"create_time"`
    Deleted bool                `json:"delete"`
}
```

### See also
- #### [IChangeable](../ichangeable)

