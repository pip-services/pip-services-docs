---
type: docs
title: "JsonFilePersister<T>"
linkTitle: "JsonFilePersister"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-persistence-java"
description: >
    Persistence component that loads and saves data from/to a flat file.

    It is used by [FilePersistence](../file_persistence), but can be useful on its own.
---

**Implements:** [IConfigurable](../../../components/config/iconfigurable), [ILoader<T>](../../read/iloader), [ISaver<T>](../../write/isaver)

### Description

The JsonFilePersister class allows you to create persistence components that load and save data from/to a flat file


#### Configuration parameters

- **path**: path to the file where the data is stored

### Constructors
Creates a new instance of the JSON file persistence component.

> `public` JsonFilePersister(Class<T> type, String path)

- **path**: String - (optional) path to the file where the data is stored.


### Properties

#### path
Gets the file path where the data is stored.

> `protected` String _path;

- **returns**: String - file path where the data is stored.

Sets the file path where data is stored.

> `public` void setPath(String value)

- **value**: String - file path where data is stored.


### Instance methods

#### configure
Configures the component by passing its configuration parameters.

> `public` void configure([ConfigParams](../../../components/config/config_params) config) throws ConfigException

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### load
Loads data items from an external JSON file.

> `public` List<T> load([IContext](../../../components/context/icontext) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: List<T> - loaded items


#### save
Saves given data items to an external JSON file.

> `public` void save([IContext](../../../components/context/icontext) context, List<T> entities) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **entities**: List<T> - list if data items to save


### Examples

```java
{@code
  JsonFilePersister persister = new JsonFilePersister(MyData.class, "./data/data.json");
 
  ArrayList<String> list = new ArrayList<String>() {{
     add("A");
     add("B");
     add("C");
  }};
  persister.save("123", list);
  ...
  persister.load("123", items);
  System.out.println(items); // Result: ["A", "B", "C"]
  }
```
