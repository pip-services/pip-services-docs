---
type: docs
title: "IChangeable"
linkTitle: "IChangeable"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-data-node"
description: > 
    Interface for data objects that need to store the last modified date and time.
---

### Description

The IChangeable interface allows you to store the last modified date and time in the "change_time" parameter of a data object.

### Fields

<span class="hide-title-link">

#### change_time
The UTC time at which the object was last changed (created or updated).
> `public` **change_time**: Date

### Examples
```typescript
export class MyData implements IStringIdentifiable, IChangeable {
    public id: string;
    public field1: string;
    public field2: number;
    public change_time: Date;
    ...
}
```
</span>
