---
type: docs
title: "IdentifiableMongoDbPersistence"
linkTitle: "IdentifiableMongoDbPersistence"
gitUrl: "https://github.com/pip-services3-go/pip-services3-mongodb-go"
description: >
    Abstract persistence component that stores data in MongoDB
    and implements a number of CRUD operations over data items with unique ids.
    
---

**Implements:** [MongoDbPersistence](../mongodb_persistence)


### Description

The IdentifiableMongoDbPersistence class allows you to create persistance components that store data in MongoDB databases and implement a number of CRUD operations over data items with unique ids.

Important points

- The data items must implement the [IIdentifiable](../../../commons/data/iidentifiable) interface.
- In basic scenarios child classes shall only override [getPageByFilter](../mongodb_persistence/#getpagebyfilter), [getListByFilter](../mongodb_persistence/#getlistbyfilter) or [deleteByFilter](../mongodb_persistence/#deletebyfilter)  operations with specific filter functions. All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing **c.Db** or **c.Collection** properties.

#### Configuration parameters

**connection(s)**:
- **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
- **host**: host name or IP address
- **port**: port number (default: 27017)
- **uri**: resource URI or connection string with all parameters in it

**credential(s)**:
- **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
- **username**: (optional) username
- **password**: (optional) user's password

**options**:
- **max_pool_size**: (optional) maximum connection pool size (default: 2)
- **keep_alive**: (optional) enable connection keep alive (default: true)
- **connect_timeout**: (optional) connection timeout in milliseconds (default: 5000)
- **socket_timeout**: (optional) socket timeout in milliseconds (default: 360000)
- **auto_reconnect**: (optional) enable auto reconnection (default: true)
- **reconnect_interval**: (optional) reconnection interval in milliseconds (default: 1000)
- **max_page_size**: (optional) maximum page size (default: 100)
- **replica_set**: (optional) name of replica set
- **ssl**: (optional) enable SSL connection (default: false)
- **auth_source**: (optional) authentication source
- **debug**: (optional) enable debug output (default: false).

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores used to resolve credentials



### Constructors

#### InheritIdentifiableMongoDbPersistence
Creates a new instance of the persistence component.

> InheritIdentifiableMongoDbPersistence(overrides IMongoDbPersistenceOverrides, proto reflect.Type, collection string) [*IdentifiableMongoDbPersistence]()

- **overrides**: IMongoDbPersistenceOverrides - TODO: add description 
- **proto**: reflect.Type - TODO: add description
- **collection**: string - (optional) collection name.


### Methods


#### Create
Creates a data item.

> (c [*IdentifiableMongoDbPersistence]()) Create(correlationId string, item interface{}) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: interface{} - item to be created.
- **returns**: (result interface{}, err error) - created item


#### DeleteById
Deletes a data item by it's unique id.

> (c [*IdentifiableMongoDbPersistence]()) DeleteById(correlationId string, id interface{}) (item interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: interface{} - id of the item to be deleted
- **return**: (item interface{}, err error) - deleted item.


#### DeleteByIds
Deletes multiple data items by their unique ids.

> (c [*IdentifiableMongoDbPersistence]()) DeleteByIds(correlationId string, ids []interface{}) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ids**: []interface{} - ids of data items to be deleted.
- **returns**: error -  error or nil no errors occured.


#### GetListByIds
Gets a list of data items retrieved by given unique ids.

> (c [*IdentifiableMongoDbPersistence]()) GetListByIds(correlationId string, ids []interface{}) (items []interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ids**: []interface{} - ids of data items to be retrieved
- **return**: (items []interface{}, err error) - data list of results by ids.


#### GetOneById
Gets a data item by its unique id.

> (c [*IdentifiableMongoDbPersistence]()) GetOneById(correlationId string, id interface{}) (item interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: interface{} - id of data item to be retrieved.
- **returns**: (item interface{}, err error) - data item by id.


#### Set
Sets a data item. If the data item exists it updates it, otherwise it creates a new data item.

> (c [*IdentifiableMongoDbPersistence]()) Set(correlationId string, item interface{}) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: interface{} - item to be set. 
- **returns**: (result interface{}, err error) - updated item


#### Update
Updates a data item.

> (c [*IdentifiableMongoDbPersistence]()) Update(correlationId string, item interface{}) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: interface{} - item to be updated.
- **returns**: (result interface{}, err error) - updated item.


#### UpdatePartially
Updates only few selected fields in a data item.

> (c [*IdentifiableMongoDbPersistence]()) UpdatePartially(correlationId string, id interface{}, data [*cdata.AnyValueMap](../../../commons/data/any_value_map)) (item interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: interface{} - id of data item to be updated.
- **data**: [*cdata.AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: (item interface{}, err error) - updated item.

### Examples

```go
type MyMongoDbPersistence  struct {
  IdentifiableMongoDbPersistence
}

func NewMyMongoDbPersistence() {
  proto := reflect.TypeOf(MyData{})
  return &DummyMongoDbPersistence{*persist.NewIdentifiableMongoDbPersistence(proto, "mydata")}
}

func composeFilter(filter cdata.FilterParams) interface{} {
  if &filter == nil {
    filter = *cdata.NewEmptyFilterParams()
	}
  name := filter.GetAsNullableString("name")
  var filterObj bson.M
	if *name != "" {
	    filterObj = bson.M{"name": *name}
	  else {
	    filterObj = bson.M{}
	}
	return filterObj
}

func (c *MyMongoDbPersistence) GetPageByFilter(correlationId string, filter cdata.FilterParams, paging) cdata.PagingParams) (page MyDataPage, err error){
    tempPage, err := c.IdentifiableMongoDbPersistence.GetPageByFilter(correlationId,
	  composeFilter(filter), paging, nil, nil) 
	  // Convert to MyDataPage
	  dataLen := int64(len(tempPage.Data)) // For full release tempPage and delete this by GC
	  data := make([]MyData, dataLen)
	  for i, v := range tempPage.Data {
	    data[i] = v.(MyData)
	  }
	  page = *NewMyDataPage(&dataLen, data)
	  return page, err
}

persistence = NewMyMongoDbPersistence()
persistence.Configure(NewConfigParamsFromTuples(
  "host", "localhost",
	"port", "27017"
	"database", "test",
))

opnErr := persitence.Open("123")
if opnErr != nil {
	...
}

crtRes, crtErr := persistence.Create("123", MyData{ id: "1", name: "ABC" })
if crtErr != nil {
	...
}

getRes, getErr := persistence.GetPageByFilter("123", NewFilterParamsFromTuples("name", "ABC"), nil)
if getErr != nil {
	...
}

fmt.Println(getRes.Data);          // Result: { id: "1", name: "ABC" }
persistence.deleteById("123", "1")
	...

```
