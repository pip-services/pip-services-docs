---
type: docs
title: "INamed"
linkTitle: "INamed"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Generic interface for data objects that can be uniquely identified by an id.

    The type specified in the interface defines the type of id field.
---

**Example:**
```typescript
export class MyData implements IStringIdentifiable, INamed {
    public id: string;
    public name: string;
    public field1: string;
    public field2: number;
    ...
}
```

### Fields

<span class="hide-title-link">

#### name
The object's humand-readable name.
> **name**: string

</span>