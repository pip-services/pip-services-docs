---
type: docs
title: "INamed"
linkTitle: "INamed"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
   Interface for data objects that have human-readable names.

---

### Description

The INamed interface is used to define data objects containing a human-readable name.

### Fields

<span class="hide-title-link">

#### name
The object's humand-readable name.
> **name**: string

### Examples
```typescript
export class MyData implements IStringIdentifiable, INamed {
    public id: string;
    public name: string;
    public field1: string;
    public field2: number;
    ...
}
```

</span>
