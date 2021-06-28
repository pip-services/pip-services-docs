---
type: docs
title: "IChangeable!"
linkTitle: "IChangeable!"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    Interface for data objects that need to store the last modified date and time.
---

### Description

The IChangeable interface allows you to store the last modified date and time in the "change_time" parameter of a data object.

### Fields

<span class="hide-title-link">

#### change_time
The UTC time at which the object was last changed (created or updated).
> `public` **change_time**: time.Time

### Examples
```go
type MyData struct {
     Id string                  `json:"id"`
     Field1 string              `json:"field1"`
     Field2 int32               `json:"field2"`
     ChangeTime time.Time       `json:"change_time"`
    ...
}
```
</span>

