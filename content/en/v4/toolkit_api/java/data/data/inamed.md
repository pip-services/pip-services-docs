---
type: docs
title: "INamed"
linkTitle: "INamed"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: > 
   Interface for data objects that have human-readable names.

---

### Description

The INamed interface is used to define data objects containing a human-readable name.

### Instance methods

#### getName
Gets the object name.

> `public` String getName()

- **returns**: String - object's name.

#### setName
Sets the object name.

> `public` void setName(String value)

- **value**: String - object's name.


</span>

### Examples
```java
{@code
   public class MyData implements IStringIdentifiable, INamed {
     private String id;
     private String name;
     public String field1;
     public int field2;
     ...
     public String getId() {...}
     public void setId(String newId) {...}
     public String getName() {...}
     public void setName(String newName) {...}
  }
  }
```


