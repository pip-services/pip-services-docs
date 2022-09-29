---
type: docs
title: "FilePersistence"
linkTitle: "FilePersistence"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-data-gox"
description: >
    Abstract persistence component that stores data in flat files
    and caches them in memory.


---

**Implements:** [MemoryPersistence](../memory_persistence)

### Description

The FilePersistence class allows you to create persistence components that store data in flat files and chache them in memory.

Important points

- This is the most basic persistence component that is only able to store data items of any type. 
- Specific CRUD operations over the data items must be implemented in child classes by accessing the self._items property and calling the *save* method.

#### Configuration parameters
- **path**: path to the file where data is stored

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages



### Constructors

#### NewFilePersistence
Creates a new instance of the file persistence component.
`T data.ICloneable[T]` any type that implemented ICloneable interface of getting element.
> NewFilePersistence[T data.ICloneable[T]](persister [*JsonFilePersister](../json_file_persister)) [*FilePersistence[T]]()

- **persister**: [*JsonFilePersister](../json_file_persister) - (optional) persister component that loads and saves data from/to a flat file.

### Fields

<span class="hide-title-link">

#### Persister
JSON file persister.
> **Persister**: [*JsonFilePersister](../json_file_persister)

</span>


### Methods

#### Configure
Configures the component by passing its configuration parameters.

> (c [*FilePersistence[T]]()) Configure(ctx context.Context, conf [*config.ConfigParams](../../../commons/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*config.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

### Examples

```go
type MyJsonFilePersistence struct {
	*FilePersistence[*MyData]
}

func NewMyJsonFilePersistence(path string) *MyJsonFilePersistence {
	return &MyJsonFilePersistence{
		FilePersistence: NewFilePersistence(NewJsonFilePersister[*MyData](path)),
	}
}

func (c *MyJsonFilePersistence) GetByName(ctx context.Context, correlationId string,
	name string) (*MyData, error) {
	for _, v := range c.Items {
		if v.Name == name {
			return v, nil
		}
	}

	var defaultValue *MyData
	return defaultValue, nil
}

func (c *MyData) Clone() *MyData {
	return &MyData{Id: c.Id, Name: c.Name}
}

type MyData struct {
	Id   string
	Name string
}
```


### See also
- #### [MemoryPersistence](../memory_persistence)
- #### [JsonFilePersister](../json_file_persister)
