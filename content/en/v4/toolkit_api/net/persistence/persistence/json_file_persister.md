---
type: docs
title: "JsonFilePersister<T>"
linkTitle: "JsonFilePersister"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-persistence-dotnet"
description: >
    Persistence component that loads and saves data from/to a flat file.

    It is used by [FilePersistence](../file_persistence), but can be useful on its own.
---

**Inherits:** [IConfigurable](../../../components/config/iconfigurable), [ILoader<T>](../../read/iloader), [ISaver<T>](../../write/isaver)

### Description

The JsonFilePersister class allows you to create persistence components that load and save data from/to a flat file


#### Configuration parameters

- **path**: path to the file where the data is stored

### Constructors
Creates a new instance of the JSON file persistence component.

> `public` JsonFilePersister(string path)

- **path**: string - (optional) path to the file where the data is stored.

Creates a new instance of the persistence.

> `public` JsonFilePersister()


### Properties

#### Path
Gets and sets the file path where the data is stored.

> `public` Path [ get, private set ]


### Instance methods

#### Configure
Configures the component by passing its configuration parameters.

> `public` void Configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### LoadAsync
Loads data items from an external JSON file.

> `public` Task\<List\<T\>\> LoadAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Task\<List\<T\>\> - loaded items


#### Save
Saves given data items to an external JSON file.

> `public` Task SaveAsync(IContext context, IEnumerable\<T\> entities)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **items**: IEnumerable\<T\> - list if data items to save


### Examples

```cs
var persister = new JsonFilePersister("./data/data.json");

var list = new List<string>() {{add("A"); add("B"); add("C"); }};

persister.Save("123", list);
...
persister.Load("123", items);
Console.Out.WriteLine(items); // Result: ["A", "B", "C"] 

```

