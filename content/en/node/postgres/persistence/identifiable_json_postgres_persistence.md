---
type: docs
title: "IdentifiableJsonPostgresPersistence<T extends IIdentifiable<K>, K>"
linkTitle: "IdentifiableJsonPostgresPersistence"
gitUrl: "https://github.com/pip-services3-go/pip-services3-postgres-go"
description: >
    Abstract persistence component that stores data in PostgreSQL in JSON or JSONB fields
    and implements a number of CRUD operations over data items with unique ids.

---

**Extends:** [IdentifiablePostgresPersistence<T, K>](../identifiable_postgres_persistence),

### Description

The IdentifiableJsonPostgresPersistence class allows you to create persistence components used to store data in PosgreSQL databases in JSON or JSONB fields and implement a number of CRUD operations over data items with unique ids.

Important points

- The data items must implement the [IIdentifiable](../../../commons/data/iidentifiable) interface.
- In basic scenarios child classes shall only override the [getPageByFilter](../postgres_persistence/#getpagebyfilter), [getListByFilter](../postgres_persistence/#getlistbyfilter) or [deleteByFilter](../postgres_persistence/#deletebyfilter)  operations with a specific filter function.
- All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing **this._collection** and **this._model** properties.

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

> `public` constructor(tableName: string)

- **tableName**: string - (optional) a collection name.


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

> `protected` ensureTable(idType: string = 'TEXT', dataType: string = 'JSONB')

- **idType**: string - type of the id column (default: TEXT)
- **dataType**: string - type of the data column (default: JSONB)


#### updatePartially
Updates only few selected fields in a data item.

> `public` update_partially(correlationId: string, id: K, data: [AnyValueMap](../../../commons/data/any_value_map)): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: any - id of the data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **return**: Promise\<T\> - updated item

### Examples

```typescript
class MyPostgresPersistence extends IdentifiablePostgresJsonPersistence<MyData, string> {
    public constructor() {
        base("mydata", new MyDataPostgresSchema());
    }
    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();
        let criteria = [];
        let name = filter.getAsNullableString('name');
        if (name != null)
            criteria.push({ name: name });
        return criteria.length > 0 ? { $and: criteria } : null;
    }
    public getPageByFilter(correlationId: string, filter: FilterParams,
        paging: PagingParams): Promise<DataPage<MyData>> {
        return base.getPageByFilter(correlationId, this.composeFilter(filter), paging, null, null);
    }
}

let persistence = new MyPostgresPersistence();
persistence.configure(ConfigParams.fromTuples(
    "host", "localhost",
    "port", 27017
));

await persitence.open("123");

let item = await persistence.create("123", { id: "1", name: "ABC" });
let page = await persistence.getPageByFilter(
  "123",
  FilterParams.fromTuples("name", "ABC"),
  null
);

console.log(page.data);          // Result: { id: "1", name: "ABC" }
item = await persistence.deleteById("123", "1");
...

```
