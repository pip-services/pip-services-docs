---
type: docs
title: "JsonFilePersister"
linkTitle: "JsonFilePersister"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-persistence-go"
description: >
    Persistence component that loads and saves data from/to a flat file.

    It is used by [FilePersistence](../file_persistence), but can be useful on its own.
---

### Description

The JsonFilePersister class allows you to create persistence components that load and save data from/to a flat file


#### Configuration parameters

- **path**: path to the file where the data is stored

### Constructors

#### NewJsonFilePersister
Creates a new instance of the JSON file persistence component.

> NewJsonFilePersister[T any](path string) [*JsonFilePersister[T]]()

- **path**: string - (optional) path to the file where the data is stored.



### Methods

#### Configure
Configures the component by passing its configuration parameters.

> (c [*JsonFilePersister[T]]()) Configure(ctx context.Context, config [*config.ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*config.ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### Load
Loads data items from an external JSON file.

> (c [*JsonFilePersister[T]]()) Load(ctx context.Context, context [IContext](../../../components/context/icontext)) (data []interface{}, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: (data []interface{}, err error) - loaded items


#### Save
Saves given data items to an external JSON file.

> (c [*JsonFilePersister[T]]()) Save(ctx context.Context, context [IContext](../../../components/context/icontext), items []interface{}) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **items**: []interface{} - list if data items to save
- **returns**: error - returns error if not saved

#### SetPath
Sets the file path where data is stored.

> (c [*JsonFilePersister[T]]()) SetPath(value string)

- **value**: string - file path where data is stored.

#### Path
Gets the file path where the data is stored.

> (c [*JsonFilePersister[T]]()) Path() string

- **returns**: string - file path where the data is stored.


### Examples

```go
persister := NewJsonFilePersister[MyData]("./data/data.json")
err := persister.Save(context.Background(), "123", []string{"A", "B", "C"})
if err == nil {
	items, err := persister.Load("123")
	if err == nil {
		fmt.Println(items) // Result: ["A", "B", "C"]
	}
}
```

