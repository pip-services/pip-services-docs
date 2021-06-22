---
type: docs
title: "IdentifiableJsonPostgresPersistence"
linkTitle: "IdentifiableJsonPostgresPersistence"
gitUrl: "https://github.com/pip-services3-go/pip-services3-postgres-go"
description: >
    Abstract persistence component that stores data in PostgreSQL in JSON or JSONB fields
    and implements a number of CRUD operations over data items with unique ids.

---

**Implements:** [IdentifiablePostgresPersistence](../identifiable_postgres_persistence),

### Description

The IdentifiableJsonPostgresPersistence class allows you to create persistence components used to store data in PosgreSQL databases in JSON or JSONB fields and implement a number of CRUD operations over data items with unique ids.

Important points

- The data items must implement the [IIdentifiable](../../../commons/data/iidentifiable) interface.
- In basic scenarios child classes shall only override the [GetPageByFilter](../postgres_persistence/#getpagebyfilter), [GetListByFilter](../postgres_persistence/#getlistbyfilter) or [DeleteByFilter](../postgres_persistence/#deletebyfilter)  operations with a specific filter function.
- All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing **c.Db** or **c.Collection** properties.

#### Configuration parameters

- **collection**: (optional) PostgreSQL collection name
**connection(s)**:    
- **discovery_key**: (optional) key used to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
- **host**: host name or IP address
- **port**: port number (default: 27017)
- **uri**: resource URI or connection string with all parameters in it

**credential(s)**:    
- **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
- **username**: (optional) username
- **password**: (optional) user's password

**options**:
- **connect_timeout**: (optional) number of milliseconds to wait before timing out when connecting a new client (default: 0)
- **idle_timeout**: (optional) number of milliseconds a client must sit idle in the pool and not be checked out (default: 10000)
- **max_pool_size**: (optional) maximum number of clients the pool can contain (default: 10)

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials ([ICredentialStore](../../../components/auth/icredential_store))



### Constructors
Creates a new instance of the persistence component.

> InheritIdentifiableJsonPostgresPersistence(overrides IPostgresPersistenceOverrides, proto reflect.Type, tableName string) [*IdentifiableJsonPostgresPersistence]()

- **overrides**: IPostgresPersistenceOverrides - References to override virtual methods.
- **proto**: reflect.Type - TODO: add description. 
- **tableName**: string - (optional) a collection name.


### Methods

#### ConvertFromPublic
Converts object value from public to internal format.

> (c [*IdentifiableJsonPostgresPersistence]()) ConvertFromPublic(value interface{}) interface{}

- **value**: interface{} - object in public format to convert.
- **returns**: interface{} - converted object in internal format.


#### ConvertToPublic
Converts object value from internal to public format.

> (c [*IdentifiableJsonPostgresPersistence]()) ConvertToPublic(rows pgx.Rows) interface{}

- **rows**: pgx.Rows - object in internal format to convert.
- **returns**: interface{} - converted object in public format.


#### EnsureTable
Adds DML statement to automatically create a JSON(B) table

> (c [*IdentifiableJsonPostgresPersistence]()) EnsureTable(idType string, dataType string)

- **idType**: string - type of the id column
- **dataType**: string - type of the data column


#### UpdatePartially
Updates only few selected fields in a data item.

> (c [*IdentifiableJsonPostgresPersistence]()) UpdatePartially(correlationId string, id interface{}, data [*cdata.AnyValueMap](../../../commons/data/any_value_map)) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: interface{} - id of the data item to be updated.
- **data**: [*cdata.AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **return**: (result interface{}, err error) - updated item

### Examples

```go
TODO: add example

```
