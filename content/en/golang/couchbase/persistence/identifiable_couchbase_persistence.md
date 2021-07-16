---
type: docs
title: "IdentifiableCouchbasePersistence"
linkTitle: "IdentifiableCouchbasePersistence"
gitUrl: "https://github.com/pip-services3-go/pip-services3-couchbase-go"
description: >
    Abstract persistence component that stores data in Couchbase and implements a number of CRUD operations over data items with unique ids.
---

**Implements:** [CouchbasePersistence](../couchbase_persistence)

### Description
The IdentifiableCouchbasePersistence class allows you to create abstract persistence components that store data in a Couchbase database and implement a number of CRUD operations over data items with unique ids.
    
**Important points**
    
- The data items must implement the [IIdentifiable](../../../commons/data/iidentifiable) interface.

- In basic scenarios child classes shall only override [GetPageByFilter](../couchbase_persistence/#getpagebyfilter), [GetListByFilter](../couchbase_persistence/#getlistbyfilter) or [DeleteByFilter](../couchbase_persistence/#deletebyfilter) operations with specific filter functions.
- All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing **c._collection** and **c._model** properties.


#### Configuration parameters


- **bucket**: (optional) Couchbase bucket's name
- **collection**: (optional) Couchbase collection's name
- **connection(s)**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number (default: 27017)
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:    
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
    - **username**: (optional) username
    - **password**: (optional) user's password
- **options**:
    - **max_pool_size**: (optional) maximum connection pool size (default: 2)
    - **keep_alive**: (optional) enable connection keep alive (default: true)
    - **connect_timeout**: (optional) connection timeout in milliseconds (default: 5 sec)
    - **auto_reconnect**: (optional) enable auto reconnection (default: true)
    - **max_page_size**: (optional) maximum page size (default: 100)
    - **debug**: (optional) enable debug output (default: false).



#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials ([ICredentialStore](../../../components/auth/icredential_store))


### Constructors

#### InheritIdentifiableCouchbasePersistence
Creates a new instance of the persistence component.

> InheritIdentifiableCouchbasePersistence(overrides ICouchbasePersistenceOverrides, proto reflect.Type, bucket string, collection string) [*IdentifiableCouchbasePersistence]()

- **overrides**: ICouchbasePersistenceOverrides - References to override virtual methods.
- **proto**: reflect.Type - prototype for properly convert.
- **tableName**: string - (optional) collection's name.
- **collection**: string - (optional) a collection name.


### Methods


#### Create
Creates a data item.

> (c *IdentifiableCouchbasePersistence) Create(correlationId string, item interface{}) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: interface{} - item to be created.
- **returns**: (result interface{}, err error) - created item


#### DeleteById
Deletes a data item by it's unique id.

> (c *IdentifiableCouchbasePersistence) DeleteById(correlationId string, id interface{}) (item interface{}, err error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: interface{} - id of the item to be deleted
- **returns**: (item interface{}, err error - deleted item


#### DeleteByIds
Deletes multiple data items by their unique ids.

> (c *IdentifiableCouchbasePersistence) DeleteByIds(correlationId string, ids []interface{}) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ids**: []interface{} - ids of the data items to be deleted.
- **returns**: (err error) - error or nil no errors occured.


#### GetListByIds
Gets a list of the data items retrieved by given unique ids.

> (c *IdentifiableCouchbasePersistence) GetListByIds(correlationId string, ids []interface{}) (items []interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ids**: []interface{} - ids of the data items to be retrieved
- **returns**: (items []interface{}, err error) - data list


#### GetOneById
Gets a data item by its unique id.

> (c *IdentifiableCouchbasePersistence) GetOneById(correlationId string, id interface{}) (item interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: interface{} - id of the data item to be retrieved.
- **returns**: (item interface{}, err error) - data item

#### GetListByIds
Gets a list of data items retrieved by given unique ids.

> (c *IdentifiableCouchbasePersistence) GetListByIds(correlationId string, ids []interface{}) (items []interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ids**: []interface{} - ids of the data items to be retrieved
- **returns**: (items []interface{}, err error) - list with requested data items.

#### GetOneById
Gets a data item by its unique id.

> (c *IdentifiableCouchbasePersistence) GetOneById(correlationId string, id interface{}) (item interface{}, err error)

- **correlationId**: string - (optional) transaction used id to trace execution through the call chain.
- **id**: interface{} - id of the data item to be retrieved.
- **returns**: (item interface{}, err error) - found data item.


#### Set
Sets a data item. If the data item exists, it updates it. 
Otherwise, it creates a new data item.

> (c *IdentifiableCouchbasePersistence) Set(correlationId string, item interface{}) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: interface{} - item to be set.
- **returns**: (result interface{}, err error) - new or updated item

#### Update
Updates a data item.

> (c *IdentifiableCouchbasePersistence) Update(correlationId string, item interface{}) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: interface{} - item to be updated.
- **returns**: (result interface{}, err error) - updated item


#### UpdatePartially
Updates only a few selected fields in a data item.

> (c *IdentifiableCouchbasePersistence) UpdatePartially(correlationId string, id interface{}, data [*AnyValueMap](../../../commons/data/any_value_map)) (item interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: interface{} - id of the data item to be updated.
- **data**: [*AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: (item interface{}, err error) - updated item

### Examples
```go
type MyCouchbasePersistence struct {
      *IdentifiableCouchbasePersistence
  }

  func NewMyCouchbasePersistence()*MyCouchbasePersistence {
      c := MyCouchbasePersistence{}
      c.IdentifiableCouchbasePersistence = NewIdentifiableCouchbasePersistence(reflect.TypeOf(MyData{}), "mybucket", "mycollection")
      return &c
  }

  func (c *MyCouchbasePersistence) GetPageByFilter(correlationId string, filter *cdata.FilterParams, paging *cdata.PagingParams) (page *cbfixture.MyDataPage, err error) {
      if filter == nil {
          filter = cdata.NewEmptyFilterParams()
      }
      name := filter.GetAsString("name")
      filterCondition := ""
      if name != "" {
          filterCondition += "name='" + name + "'"
      }
      tempPage, err := c.IdentifiableCouchbasePersistence.GetPageByFilter(correlationId, filterCondition, paging, "", "")
      // Convert to MyDataPage
      dataLen := int64(len(tempPage.Data)) // For full release tempPage and delete this by GC
      data := make([]cbfixture.MyData, dataLen)
      for i, v := range tempPage.Data {
          data[i] = v.(cbfixture.MyData)
      }
      page = cbfixture.NewMyDataPage(&dataLen, data)
      return page, err
  }


  persistence := NewMyCouchbasePersistence();
  persistence.Configure(ConfigParams.fromTuples(
      "host", "localhost",
      "port", 27017,
  ));

    persitence.Open("123")
        ...
    persistence.Create("123", MyData{ id: "1", name: "ABC" })
        ...
    result, err:= persistence.GetPageByFilter(
            "123",
            NewFilterParamsFromTuples("name", "ABC"),
            nil)

    fmt.Println(page.data);          // Result: { id: "1", name: "ABC" }
    persistence.DeleteById("123", "1")
      ...
```
