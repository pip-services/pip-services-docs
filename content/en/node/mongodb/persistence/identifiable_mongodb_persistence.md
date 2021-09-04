---
type: docs
title: "IdentifiableMongoDbPersistence<T extends IIdentifiable<K>, K>"
linkTitle: "IdentifiableMongoDbPersistence"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-mongodb-nodex"
description: >
    Abstract persistence component that stores data in MongoDB
    and implements a number of CRUD operations over data items with unique ids.
    
---

**Extends:** [MongoDbPersistence<T>](../mongodb_persistence)

**Implements**: [IWriter<T, K>](../../../data/core/iwriter), [IGetter<T, K>](../../../data/core/igetter), [ISetter<T>](../../../data/core/isetter)


### Description

The IdentifiableMongoDbPersistence class allows you to create persistance components that store data in MongoDB databases and implement a number of CRUD operations over data items with unique ids.

Important points

- The data items must implement the [IIdentifiable](../../../commons/data/iidentifiable) interface.
- In basic scenarios child classes shall only override [getPageByFilter](../mongodb_persistence/#getpagebyfilter), [getListByFilter](../mongodb_persistence/#getlistbyfilter) or [deleteByFilter](../mongodb_persistence/#deletebyfilter)  operations with specific filter functions. All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing **this._collection** and **this._model** properties.

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
- **auto_reconnect**: (optional) enable auto reconnection (default: true) (not used)
- **reconnect_interval**: (optional) reconnection interval in milliseconds (default: 1000) (not used)
- **max_page_size**: (optional) maximum page size (default: 100)
- **replica_set**: (optional) name of replica set
- **ssl**: (optional) enable SSL connection (default: false) (not implements in this release)
- **auth_source**: (optional) authentication source
- **auth_user**: (optional) authentication user name
- **auth_password**: (optional) authentication user password
- **debug**: (optional) enable debug output (default: false). (not used)

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores used to resolve credentials



### Constructors
Creates a new instance of the persistence component.

> `public` constructor(collection: string)

- **collection**: string - (optional) collection name.


### Fields

<span class="hide-title-link">

#### _autoGenerateId
Flag to turn on automated string ID generation
> `protected` **_autoGenerateId**: boolean = true

</span>


### Instance methods

#### convertFromPublicPartial
Converts the given object from the public partial format.

> `protected` convertFromPublicPartial(value: any): any

- **value**: any - object to convert from the public partial format.
- **returns**: any - initial object.


#### create
Creates a data item.

> `public` create(correlationId: string, item: T): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be created.
- **returns**: Promise\<T\> - created item


#### deleteById
Deletes a data item by it's unique id.

> `public` deleteById(correlationId: string, id: K): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of the item to be deleted
- **return**: Promise\<T\> - deleted item.


#### deleteByIds
Deletes multiple data items by their unique ids.

> `public` deleteByIds(correlationId: string, ids: K[]): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ids**: K[] - ids of data items to be deleted.


#### getListByIds
Gets a list of data items retrieved by given unique ids.

> `public` getListByIds(correlationId: string, ids: K[]): Promise<T[]>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ids**: K[] - ids of data items to be retrieved
- **return**: Promise<T[]> - data list of results by ids.


#### getOneById
Gets a data item by its unique id.

> `public` getOneById(correlationId: string, id: K): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of data item to be retrieved.
- **returns**: Promise\<T\> - data item by id.


#### set
Sets a data item. If the data item exists it updates it, otherwise it creates a new data item.

> `public` set(correlationId: string, item: T): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be set. 
- **returns**: Promise\<T\> - updated item


#### update
Updates a data item.

> `public` update(correlationId: string, item: T): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be updated.
- **returns**: Promise\<T\> - updated item.


#### updatePartially
Updates only few selected fields in a data item.

> `public` updatePartially(correlationId: string, id: K, data: AnyValueMap): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: Promise\<T\> - updated item.

### Examples

```typescript
class MyMongoDbPersistence extends MongoDbPersistence<MyData, string> {
    public constructor() {
        super("mydata", new MyDataMongoDbSchema());
    }
    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();
        let criteria = [];
        let name = filter.getAsNullableString('name');
        if (name != null)
            criteria.push({ name: name });
        return criteria.length > 0 ? { $and: criteria } : null;
    }
    public getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MyData>> {
        return super.getPageByFilter(correlationId, this.composeFilter(filter), paging, null, null);
    }
}

let persistence = new MyMongoDbPersistence();
persistence.configure(ConfigParams.fromTuples(
    "host", "localhost",
    "port", 27017
));

await persitence.open("123");

let item = await persistence.create("123", { id: "1", name: "ABC" });

let page = await persistence.getPageByFilter(
    "123",
    FilterParams.fromTuples("name", "ABC"),
    null,
)

console.log(page.data);     // Result: { id: "1", name: "ABC" }
let item = await persistence.deleteById("123", "1");

```
