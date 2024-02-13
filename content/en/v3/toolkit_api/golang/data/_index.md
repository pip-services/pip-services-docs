---
type: docs
title: "Data module"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-data-gox"
no_list: true
weight: 60
description: > 
  
    Contains generic interfaces for data access components as well as abstract implementations for in-memory and file persistence. 
---

### Important points
* The persistence components come in two kinds. The first kind is a basic persistence that can work with any object types and provides only minimal set of operations. The second kind is so called "identifieable" persistence with works with "identifable" data objects, i.e. objects that have unique ID field. 
* The identifiable persistence provides a full set or CRUD operations that covers most common cases.


### Packages

The module contains the following packages:

* [**Persistence**](persistence) - in-memory and file persistence components, as well as JSON persister class.


### Use

Get the package from the Github repository:
```bash
go get -u github.com/pip-services3-gox/pip-services3-data-gox@latest
```

As an example, lets implement persistence for the following data object.

```go
type MyData struct {
	id      string
	key     string
	content string
}

func (c *MyData) GetId() string {
	return c.id
}
```

Our persistence component shall implement the following interface with a basic set of CRUD operations.

```go
type IMyPersistence interface {
	GetPageByFilter(ctx context.Context, correlationId string, filter cdata.FilterParams, paging cdata.PagingParams) (page cdata.DataPage[MyData], err error)
	GetOneById(ctx context.Context, correlationId string, id string) (item MyData, err error)
	GetOneByKey(ctx context.Context, correlationId string, key string) (item MyData, err error)
	Create(ctx context.Context, correlationId string, item MyData) (result MyData, err error)
	Update(ctx context.Context, correlationId string, item MyData) (result MyData, err error)
	DeleteById(ctx context.Context, correlationId string, id string) (item MyData, err error)
}
```

To implement in-memory persistence component you shall inherit `IdentifiableMemoryPersistence`. 
Most CRUD operations will come from the base class. You only need to override `GetPageByFilter` method with a custom filter function.
And implement a `GetOneByKey` custom persistence method that doesn't exist in the base class.

```go
type MyMemoryPersistence struct {
	*persistence.IdentifiableMemoryPersistence[MyData, string]
}

func NewMyMemoryPersistence() *MyMemoryPersistence {
	return &MyMemoryPersistence{
		IdentifiableMemoryPersistence: persistence.NewIdentifiableMemoryPersistence[MyData, string](),
	}
}

func (c *MyMemoryPersistence) composeFilter(filter cdata.FilterParams) func(item MyData) bool {
	if &filter == nil {
		filter = *cdata.NewEmptyFilterParams()
	}

	id, idOk := filter.GetAsNullableString("id")
	ids, idsOk := filter.GetAsNullableArray("ids")
	key, keyOK := filter.GetAsNullableString("key")

	return func(item MyData) bool {
		if idOk && item.id != id {
			return false
		}
		if idsOk && ids.Contains(item.id) {
			return false
		}
		if keyOK && item.key != key {
			return false
		}

		return true
	}
}

func (c *MyMemoryPersistence) GetPageByFilter(ctx context.Context, correlationId string, filter cdata.FilterParams, paging cdata.PagingParams) (page cdata.DataPage[main.MyData], err error) {
	return c.IdentifiableMemoryPersistence.GetPageByFilter(ctx, correlationId, c.composeFilter(filter), paging, nil, nil)
}

func (c *MyMemoryPersistence) GetOneByKey(ctx context.Context, correlationId string, key string) (item MyData, err error) {
	var resItem *MyData

	for _, item := range c.Items {
		if item.key == key {
			resItem = &item
			break
		}
	}

	if resItem != nil {
		c.Logger.Trace(ctx, correlationId, "Found object by key=%s", key)
	} else {
		c.Logger.Trace(ctx, correlationId, "Cannot find by key=%s", key)
	}

	return *resItem, nil
}
```

It is easy to create file persistence by adding a persister object to the implemented in-memory persistence component.

```go
type MyFilePersistence struct {
	*MyMemoryPersistence
	persister *persistence.JsonFilePersister[MyData]
}

func NewMyFilePersistence(path string) *MyFilePersistence {
	c := &MyFilePersistence{}
	c.persister = persistence.NewJsonFilePersister[MyData](path)
	c.Loader = c.persister
	c.Saver = c.persister
	return c
}

func (c *MyFilePersistence) Configure(ctx context.Context, config *config.ConfigParams) {
	c.IdentifiableMemoryPersistence.Configure(ctx, config)
	c.persister.Configure(ctx, config)
}
```

Configuration for your microservice that includes memory and file persistence may look the following way.

```yml
...
{{#if MEMORY_ENABLED}}
- descriptor: "myservice:persistence:memory:default:1.0"
{{/if}}

{{#if FILE_ENABLED}}
- descriptor: "myservice:persistence:file:default:1.0"
  path: {{FILE_PATH}}{{#unless FILE_PATH}}"../data/data.json"{{/unless}}
{{/if}}
...
```