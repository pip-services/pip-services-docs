---
type: docs
title: "IChangeable"
linkTitle: "IChangeable"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: > 
    Interface for data objects that need to store the last modified date and time.
---

### Description

The IChangeable interface allows you to store the last modified date and time in the "change_time" parameter of a data object.

### Instance methods

<span class="hide-title-link">

#### change_time
The UTC time at which the object was last changed (created or updated).
> `public` ZonedDateTime changeTime()

### Examples
```java
 {@code
  import java.time.ZonedDateTime;
 
  public class MyData implements IStringIdentifiable, IChangeable {
   private String id;
   public String field1;
   public String field2;
   private ZonedDateTime time;
 
   @Override
   public ZonedDateTime changeTime() {
       time = ZonedDateTime.now();
       return time;
   }
 
   @Override
   public String getId() {
       return id;
   }
 
   @Override
   public void setId(String value) {
       id = value;
   }
  }
  }
```
</span>
