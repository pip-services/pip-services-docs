---
type: docs
title: "IdentifiableJsonMySqlPersistence<T extends IIdentifiable<K>, K>"
linkTitle: "IdentifiableJsonMySqlPersistence"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-mysql-nodex"
description: >
    Abstract persistence component that stores data in MySQL in JSON or JSONB fields
    and implements a number of CRUD operations over data items with unique ids.

---

**Extends:** [IdentifiableMySqlPersistence<T, K>](../identifiable_mysql_persistence)

### Description

The IdentifiableJsonMySqlPersistence class allows you to create persistence components that store data in JSON or JSONB fields and implement a number of CRUD operations over data items with unique ids.

Important points

- The JSON table has only two fields: id and data.
- In basic scenarios child classes shall only override [getPageByFilter](../mysql_persistence/#getpagebyfilter), [getListByFilter](../mysql_persistence/#getlistbyfilter) or [deleteByFilter](../mysql_persistence/#deletebyfilter) operations with a specific filter function. 
- All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing **this._collection** and **this._model** properties.


#### Configuration parameters

- **table**: (optional) MySQL table name
- **schema**: (optional) MySQL schema name

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
- **connect_timeout**: (optional) number of milliseconds to wait before timing out when connecting a new client (default: 0)
- **idle_timeout**: (optional) number of milliseconds a client must sit idle in the pool and not be checked out (default: 10000)
- **max_pool_size**: (optional) maximum number of clients the pool can contain (default: 10)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) to resolve credentials



### Constructors
Creates a new instance of the persistence component.

> `public` constructor(tableName: string, schemaName?: string)

- **tableName**: string - (optional) collection name.
- **schemaName**: string - (optional) a schema name.


### Instance methods

#### convertFromPublic
Converts object value from public to internal format.

> `protected` convertFromPublic(value: any): any

- **value**: any - object in public format to convert.
- **returns**: any - converted object in internal format.


#### convertToPublic
Converts object value from internal to public format.

> `protected` convertToPublic(value: any): any

- **value**: any - object in internal format to convert.
- **returns**: any - converted object in public format.


#### ensureTable
Adds DML statement to automatically create a JSON(B) table

> `protected` ensureTable(idType: string = 'VARCHAR(32)', dataType: string = 'JSON')

- **idType**: string - type of the id column (default: VARCHAR(32))
- **dataType**: string - type of the data column (default: JSON)


#### updatePartially
Updates only few selected fields in a data item.

> `public` updatePartially(correlationId: string, id: K, data: [AnyValueMap](../../../commons/data/any_value_map)): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of the data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **return**: Promise\<T\> - updated item

### Examples

```typescript
class MyMySqlPersistence extends IdentifiableMySqlJsonPersistence<MyData, string> {
    public constructor() {
        base("mydata", new MyDataMySqlSchema());
    }

    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();
        let criteria = [];
        let name = filter.getAsNullableString('name');
        if (name != null)
            criteria.push({ name: name });
        return criteria.length > 0 ? { $and: criteria } : null;
    }

    public getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<MyData>) => void): void {
        base.getPageByFilter(correlationId, this.composeFilter(filter), paging, null, null, callback);
    }
}

let persistence = new MyMySqlPersistence();
persistence.configure(ConfigParams.fromTuples(
    "host", "localhost",
    "port", 27017
));

persitence.open("123", (err) => {
    ...
});

persistence.create("123", { id: "1", name: "ABC" }, (err, item) => {
    persistence.getPageByFilter(
        "123",
        FilterParams.fromTuples("name", "ABC"),
        null,
        (err, page) => {
            console.log(page.data);          // Result: { id: "1", name: "ABC" }
            persistence.deleteById("123", "1", (err, item) => {
               ...
            });
        }
    )
});

```
