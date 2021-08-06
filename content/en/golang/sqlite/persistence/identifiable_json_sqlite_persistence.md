---
type: docs
title: "IdentifiableJsonSqlitePersistence"
linkTitle: "IdentifiableJsonSqlitePersistence"
gitUrl: "https://github.com/pip-services3-go/pip-services3-sqlite-go"
description: >
    Abstract persistence component that stores data in SQLite in JSON or JSONB fields
    and implements a number of CRUD operations over data items with unique ids.

---

**Implements:** [IdentifiableSqlitePersistence](../identifiable_sqlite_persistence)

### Description

**Important points**    
    
- The data items must implement the [IIdentifiable](../../../commons/data/iidentifiable) interface.
- The JSON table has only two fields: id and data.
- In basic scenarios, child classes shall only override [GetPageByFilter](../sqlite_persistence/#getpagebyfilter), [GetListByFilter](../sqlite_persistence/#getlistbyfilter) or [DeleteByFilter](../sqlite_persistence/#deletebyfilter) operations with a specific filter function.
- All other operations can be used out of the box. 
- In complex scenarios, child classes can implement additional operations by accessing **c._collection** and **c._model** properties.

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
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) to resolve credentials



### Constructors

#### InheritIdentifiableJsonSqlitePersistence
Creates a new instance of the persistence component.

> InheritIdentifiableJsonSqlitePersistence(overrides ISqlitePersistenceOverrides, proto reflect.Type, tableName string) [*IdentifiableJsonSqlitePersistence]()

- **overrides**: ISqlitePersistenceOverrides - references to child class that overrides virtual methods
- **proto**: reflect.Type - type of object
- **tableName**: string - (optional) a table name.


### Methods

#### ConvertFromPublic
Converts an object value from public to internal format.

> (c [*IdentifiableJsonSqlitePersistence]()) ConvertFromPublic(value interface{}) interface{}

- **value**: interface{} - object in public format to convert.
- **returns**: interface{} - converted object in internal format.


#### ConvertToPublic
Converts an object value from internal to public format.

> (c [*IdentifiableJsonSqlitePersistence]()) ConvertToPublic(rows *sql.Rows) interface{}

- **rows**: *sql.Rows - object in internal format to convert.
- **returns**: interface{} - converted object in public format.


#### EnsureTable
Adds a DML statement to automatically create a JSON(B) table

> (c [*IdentifiableJsonSqlitePersistence]()) EnsureTable(idType string, dataType string)

- **idType**: string - type of the id column (default: VARCHAR(32))
- **dataType**: string - type of the data column (default: JSON)


#### UpdatePartially
Updates only a few selected fields in a data item.

> (c [*IdentifiableJsonSqlitePersistence]()) UpdatePartially(correlationId string, id interface{}, data [*AnyValueMap](../../../commons/data/any_value_map)) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: interface{} - id of the data item to be updated.
- **data**: [*AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **return**: (result interface{}, err error) - updated item

### Examples

```go
TODO: add example
```
