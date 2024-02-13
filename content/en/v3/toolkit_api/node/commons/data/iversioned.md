---
type: docs
title: "IVersioned"
linkTitle: "IVersioned"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
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
Object's version.
> **version**: string

</span>


### Examples
```typescript
export class MyData implements IStringIdentifiable, IVersioned {
    public id: string;
    public field1: string;
    public field2: number;
    public version: string;
    ...
}
   
public updateData(correlationId: string, item: MyData): void {
    ...
    if (item.version < this.version) {
        throw new ConcurrencyException(null, "VERSION_CONFLICT", "The change has older version stored value");
    }
    ...
}
```
