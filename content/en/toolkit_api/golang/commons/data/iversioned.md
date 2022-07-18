---
type: docs
title: "IVersioned!"
linkTitle: "IVersioned!"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    Interface used to define data objects that can be versioned.

---

### Description

The IVersioned interface allows you to define data objects that can be versioned.

Important points

- Versioning is often used as an optimistic concurrency mechanism.
- The version doesn't have to be a number, but it is recommended to use sequential values to determine if one object has a newer or older version than another one.
- It is common to use the time of change as the object version.

### Fields

<span class="hide-title-link">

#### version
The object's version.
> **version**: string

</span>


### Examples
```go
type MyData struct  {
    Id string                  `json:"id"`
    Field1 string              `json:"field1"`
    Field2 int32               `json:"field2"`
    Version string             `json:"version"`
    ...
}
   
func  (c* MyData) UpdateData(correlationId string, item MyData) error {
    ...
    if item.version < c.version {
        return NewConcurrencyErrorn("", "VERSION_CONFLICT", "The change has older version stored value");
    }
    return nil
    ...
```