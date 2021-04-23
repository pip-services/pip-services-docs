---
type: docs
title: "IIdentifiable<K>"
linkTitle: "IIdentifiable<K>"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Generic interface for data objects that can be uniquely identified by an id.

    The type specified in the interface defines the type of id field.
---

**Example:**
```typescript
export class MyData implements IIdentifiable<string> {
    public id: string;
    public field1: string;
    public field2: number; 
    ...
}
```

### Fields

<span class="hide-title-link">

#### id
The unique object identifier of type K.
> **id**: K

</span>