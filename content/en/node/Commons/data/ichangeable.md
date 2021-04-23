---
type: docs
title: "IChangeable"
linkTitle: "IChangeable"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Interface for data objects that contain their latest change time.
---

**Example:**
```typescript
export class MyData implements IStringIdentifiable, IChangeable {
    public id: string;
    public field1: string;
    public field2: number;
    public change_time: Date;
    ...
}
```

### Fields

<span class="hide-title-link">

#### change_time
The UTC time at which the object was last changed (created or updated).
> change_time: Date

</span>
