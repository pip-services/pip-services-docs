---
type: docs
title: "ITrackable"
linkTitle: "ITrackable"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Interface for data objects that can track their changes, including logical deletion.
---

**Extends:** [IChangeable](../ichangeable)

See also [IChangeable](../ichangeable)

**Example:**
```typescript
export class MyData implements IStringIdentifiable, ITrackable {
    public id: string;
    public field1: string;
    public field2: number;
    ...
    public change_time: Date;
    public create_time: Date;
    public deleted: boolean;
}
```

### Fields

<span class="hide-title-link">

#### create_time
The UTC time at which the object was created.
> **create_time**: Date

#### change_time
The UTC time at which the object was last changed (created, updated, or deleted).
> **change_time**: Date

#### deleted
The logical deletion flag. True when object is deleted and null or false otherwise
> **deleted?**: boolean

</span>


### See also
- #### [IChangeable](../ichangeable)