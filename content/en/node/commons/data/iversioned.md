---
type: docs
title: "ITrackable"
linkTitle: "ITrackable"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Interface for data objects that can be versioned.

    Versioning is often used as optimistic concurrency mechanism. 


    The version doesn't have to be a number, but it is recommended to use sequential
    values to determine if one object has newer or older version than another one.


    It is a common pattern to use the time of change as the object version.
---

**Example:**
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
    if (item.version < oldItem.version) {
        throw new ConcurrencyException(null, "VERSION_CONFLICT", "The change has older version stored value");
    }
    ...
}
```

### Fields

<span class="hide-title-link">

#### version
The object's version.
> **version**: string

</span>