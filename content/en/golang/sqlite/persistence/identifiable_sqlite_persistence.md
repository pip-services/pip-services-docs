---
type: docs
title: "IdentifiableSqlitePersistence"
linkTitle: "IdentifiableSqlitePersistence"
gitUrl: "https://github.com/pip-services3-go/pip-services3-sqlite-go"
description: >
    Abstract persistence component that stores data in SQLite
    and implements a number of CRUD operations over data items with unique ids.
---

**Implements:** [*SqlitePersistence](../sqlite_persistence)


### Description

**Important points**
    
- The data items must implement the [IIdentifiable](../../../commons/data/iidentifiable) interface. 
- In basic scenarios, child classes shall only override [GetPageByFilter](../sqlite_persistence/#getpagebyfilter), [GetListByFilter](../sqlite_persistence/#getlistbyfilter) or [DeleteByFilter](../sqlite_persistence/#deletebyfilter) operations with a specific filter function.
- All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing **c._collection** and **c._model** properties.

#### Configuration parameters

- **table**: (optional) SQLite table name
- **schema**: (optional) SQLite schema name
- **connection(s)**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **database**: database file path
    - **uri**: resource URI with file:// protocol


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials ([ICredentialStore](../../../components/auth/icredential_store))


### Constructors

#### InheritIdentifiableSqlitePersistence
Creates a new instance of the persistence component.

> InheritIdentifiableSqlitePersistence(overrides ISqlitePersistenceOverrides, proto reflect.Type, tableName string) [*IdentifiableSqlitePersistence]()

- **overrides**: ISqlitePersistenceOverrides - a references to child class that overrides virtual methods
- **proto**: reflect.Type -  TODO: add description
- **tableName**: string - (optional) a table name.


### Instance methods

#### ConvertFromPublicPartial!

**TODO: this method is not implemented**


#### Create
Creates a data item.

> (c [*IdentifiableSqlitePersistence]()) Create(correlationId string, item interface{}) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: interface{} - item to be created.
- **returns**: (result interface{}, err error) - created item


#### DeleteById
Deletes a data item by it's unique id.

> (c [*IdentifiableSqlitePersistence]()) DeleteById(correlationId string, id interface{}) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: interface{} - id of the item to be deleted
- **returns**: (result interface{}, err error) - deleted item


#### DeleteByIds
Deletes multiple data items by their unique ids.

> (c [*IdentifiableSqlitePersistence]()) DeleteByIds(correlationId string, ids []interface{}) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ids**: []interface{} - ids of the data items to be deleted.


#### GetListByIds
Gets a list of data items retrieved by given unique ids.

> (c [*IdentifiableSqlitePersistence]()) GetListByIds(correlationId string, ids []interface{}) (items []interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ids**: []interface{} - ids of the data items to be retrieved
- **returns**: (items []interface{}, err error) - data list


#### GetOneById
Gets a data item by its unique id.

> (c [*IdentifiableSqlitePersistence]()) GetOneById(correlationId string, id interface{}) (item interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: interface{} - id of the data item to be retrieved.
- **returns**:(item interface{}, err error) - data item


#### Set
Sets a data item. If the data item exists, it updates it.
Otherwise, it creates a new data item.

> (c [*IdentifiableSqlitePersistence]()) Set(correlationId string, item interface{}) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: interface{} - item to be set.
- **returns**: (result interface{}, err error) - new or updated item


#### Update
Updates a data item.

> (c [*IdentifiableSqlitePersistence]()) Update(correlationId string, item interface{}) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: interface{} - item to be updated.
- **returns**: (result interface{}, err error) - updated item


#### UpdatePartially
Updates only a few selected fields in a data item.

> (c [*IdentifiableSqlitePersistence]()) UpdatePartially(correlationId string, id interface{}, data [*AnyValueMap](../../../commons/data/any_value_map)) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: interface{} - id of data item to be updated.
- **data**: [*AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: (result interface{}, err error) - updated item 

### Examples
```go
TODO: add example
```
