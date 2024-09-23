---
type: docs
title: "ITrackable"
linkTitle: "ITrackable"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: > 
    Interface for data objects that can track their changes, including logical deletion.
---

**Implements:** [IChangeable](../ichangeable)

### Description

The ITrackagle interface allows you to define data objects that can track their changes, including logical deletion.

### Instance methods

#### getCreateTime
Gets the time when the object was created.

> `public` ZonedDateTime getCreateTime()

- **returns**: ZonedDateTime - time when the object was created.

#### setCreateTime
Sets a time when the object was created.

> `public` void setCreateTime(ZonedDateTime value)

- **value**: ZonedDateTime - time when the object was created.

#### getCreateTime
Gets the last time when the object was changed (created, updated or deleted).

> `public` ZonedDateTime getLastChangeTime()

- **returns**: ZonedDateTime -  last time when the object was changed (created, updated or deleted).

#### setLastChangeTime
Sets the last time when the object was changed (created, updated or deleted).

> `public` void setLastChangeTime(ZonedDateTime value)

- **value**: ZonedDateTime -  last time when the object was changed (created, updated or deleted).

#### getLastChangeTime
Sets the last time when the object was changed (created, updated or deleted).

> `public` void setLastChangeTime(ZonedDateTime value)

- **value**: ZonedDateTime -  last time when the object was changed (created, updated or deleted).

#### isDeleted
Gets the logical deletion flag.

> `public` boolean isDeleted()

- **value**: ZonedDateTime -  last time when the object was changed (created, updated or deleted).


  
### Examples

```java
{@code
   public class MyData implements IStringIdentifiable, ITrackable {
     private String id;
     public String field1;
     public int field2;
     ...
     public String getId() {...}
     public void setId(String newId) {...}
 
     public ZonedDateTime getCreateTime(){...};
     public void setCreateTime(){...};
     public ZonedDateTime getLastChangeTime(){...};
     public void setLastChangeTime(){...};
     public boolean isDeleted(){...};
     public void setDeleted(){...};
   }
   }
```

### See also
- #### [IChangeable](../ichangeable)
