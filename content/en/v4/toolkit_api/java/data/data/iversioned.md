---
type: docs
title: "IVersioned"
linkTitle: "IVersioned"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: > 
    Interface used to define data objects that can be versioned.

---

### Description

The IVersioned interface allows you to define data objects that can be versioned.

Important points

- Versioning is often used as an optimistic concurrency mechanism.
- The version doesn't have to be a number, but it is recommended to use sequential values to determine if one object has a newer or older version than another one.
- It is common to use the time of change as the object version.

### Instance methods

#### getVersion
Gets the object version.

> `public` String getVersion()

- **returns**: String - object's version.

#### setVersion
Sets the object version.

> `public` void setVersion(String value)

- **value**: String - object's version.

  
### Examples
```java
{@code
   public class MyData implements IStringIdentifiable, IVersioned {
     private String id;
     public String field1;
     public int field2;
     private String version;
     ...
   }
 
  public void updateData(IContext context, MyData item) {
   ...
   if (item.getVersion() < oldItem.getVersion()) {
     throw new ConcurrencyException(null, "VERSION_CONFLICT", "The change has older version stored value");
   }
   ...
  }
  }
```
