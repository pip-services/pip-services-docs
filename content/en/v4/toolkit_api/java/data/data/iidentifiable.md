---
type: docs
title: "IIdentifiable<K>"
linkTitle: "IIdentifiable"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-data-java"
description: > 
    Interface used to create data objects that can be uniquely idendified by an ID.

---

### Description

The IIdentifiable interface is used to create data objects that can be uniquely idendified by an ID.

Important points

- The type specified in the interface defines the type of the ID field.

### Instance methods

#### getId
Gets the object id.

> `public`  K getId()

- **returns**: K - object id. 

#### setId
Sets the object id

> `public`   void setId(K value)

- **value**: K - new object id. 

#### withGeneratedId
withGeneratedId

> `public`    K withGeneratedId()

- **returns**: K - object id. 

### Examples
```java
{@code
 *  public class MyData implements IIdentifiable<String> {
 *    private String id;
 *    public String field1;
 *    public int field2;
 *    ...
 *    public String getId() {...}
 *    public void setId(String newId) {...}
 *  }
 *  }
```

</span>
