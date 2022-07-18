---
type: docs
title: "JsonFilePersister"
linkTitle: "JsonFilePersister"
gitUrl: "https://github.com/pip-services3-go/pip-services3-data-go"
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

> NewJsonFilePersister(prototype reflect.Type, path string) [*JsonFilePersister]()

- **prototype**: reflect.Type - data type
- **path**: string - (optional) path to the file where the data is stored.


### Fields

#### path
Gets the file path where the data is stored.

> (c [*JsonFilePersister]()) Path() string

- **returns**: string - file path where the data is stored.

#### SetPath
Sets the file path where data is stored.

> (c [*JsonFilePersister]()) SetPath(value string)

- **value**: string - file path where data is stored.


### Methods

#### Configure
Configures the component by passing its configuration parameters.

> (c [*JsonFilePersister]()) Configure(config [*config.ConfigParams](../../../commons/config/config_params))

- **config**: [*config.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### Load
Loads data items from an external JSON file.

> (c [*JsonFilePersister]()) Load(correlation_id string) (data []interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (data []interface{}, err error) - loaded items


#### Save
Saves given data items to an external JSON file.

> (c [*JsonFilePersister]()) Save(correlationId string, items []interface{}) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **items**: []interface{} - list if data items to save
- **returns**: error - returns error if not saved


### Examples

```go
persister := NewJsonFilePersister(reflect.TypeOf(MyData{}), "./data/data.json");
err_sav := persister.Save("123", ["A", "B", "C"])
if err_sav == nil {
	items, err_lod := persister.Load("123")
	if err_lod == nil {
		fmt.Println(items);// Result: ["A", "B", "C"]
	}
}

```
