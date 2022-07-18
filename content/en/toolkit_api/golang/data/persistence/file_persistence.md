---
type: docs
title: "FilePersistence"
linkTitle: "FilePersistence"
gitUrl: "https://github.com/pip-services3-go/pip-services3-data-go"
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

> NewFilePersistence(prototype reflect.Type, persister [*JsonFilePersister](../json_file_persister)) [*FilePersistence]()

- **prototype**: reflect.Type - (optional) a persister component that loads and saves data from/to flat file.
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

> (c [*FilePersistence]()) Configure(conf [*config.ConfigParams](../../../commons/config/config_params))

- **config**: [*config.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

### Examples

```go
type MyJsonFilePersistence struct {
	FilePersistence
}

func NewMyJsonFilePersistence(path string) *NewMyJsonFilePersistence {
	prototype := reflcet.TypeOf(MyData{})
	return &NewFilePersistence(prototype, NewJsonPersister(prototype, path))
}
  
func (c * FilePersistence) GetByName(correlationId string, name string) (item MyData, err error){
	for _,v := range c._items {
		if v.Name == name {
			item = v.(MyData)
			break
		}
	}
    return item, nil
}
  
func (c *FilePersistence) Set(correlatonId string, item MyData) error {
	for i,v := range c._items {
		if v.name == item.name {
			c._items = append(c._items[:i], c._items[i+1:])
		}
	}
	c._items = append(c._items, item)
    retrun c.save(correlationId)
}
```


### See also
- #### [MemoryPersistence](../memory_persistence)
- #### [JsonFilePersister](../json_file_persister)
