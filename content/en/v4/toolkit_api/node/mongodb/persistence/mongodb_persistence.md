---
type: docs
title: "MongoDbPersistence"
linkTitle: "MongoDbPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-mongodb-node"
description: >
    Abstract persistence component that stores data in MongoDB using the official MongoDB driver.

   
---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IUnreferenceable](../../../components/refer/iunreferenceable), [IConfigurable](../../../components/config/iconfigurable), [IOpenable](../../../components/run/iopenable), [ICleanable](../../../components/run/icleanable)

### Description

The MongoDbPersistence class allows you to create persistence components that store data in MongoDBs using the official MongoDB driver.

Important points

- This is the most basic persistence component that is only able to store data items of any type. Specific CRUD operations over the data items must be implemented in child classes by accessing **this.__collection** or **this.__model** properties.

#### Configuration parameters

- **collection**: (optional) MongoDB collection name

**connection(s)**:
- **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
- **host**: host name or IP address
- **port**: port number (default: 27017)
- **uri**: resource URI or connection string with all parameters in it

**credential(s)**:
- **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store)
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
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials


### Constructors
Creates a new instance of the persistence component.

> `public` constructor(collection?: string)

- **collection**: string - (optional) collection name.



### Fields

<span class="hide-title-link">

#### _dependencyResolver
The dependency resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../components/refer/dependency_resolver)

#### _logger
The logger.
> `protected` **_logger**: [CompositeLogger](../../../observability/log/composite_logger)

#### _connection
The MongoDB connection component.
> `protected` **_connection**: [MongoDBConnection](../../connect/mongodb_connection) 

#### _collectionName
The MongoDB colleciton name.
> `protected` **_collectionName**: string;

#### _collection
The MongoDb collection object.
> `protected` **_collection**: any

#### _client
The MongoDB connection pool object.
> `protected` **_client**: any 

#### _databaseName 
The MongoDB database name.
> `protected` **_databaseName**: string

#### _tableName 
The MongoDB table name.

> `protected` **_tableName**: string

#### _db
The MongoDb database object.

> `protected` **_db**: any

#### _maxPageSize
The maximum number of records to return from the database per request.
> `protected` **_maxPageSize**: number = 100

</span


### Instance methods

#### clear
Clears a component's state.

> `public` clear(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - a context to trace execution through a call chain.

#### clearSchema
Clears all auto-created objects

> `protected` clearSchema(): void


#### close
Closes the component and frees used resources.

> `public` close(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - a context to trace execution through a call chain.


#### configure
Closes the component and frees used resources.

> `public` configure(config: ConfigParams): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### convertFromPublic
Converts an object value from public to internal format.

> `protected` convertFromPublic(value: any): any

- **value**: any - object in public format to convert.
- **returns**: any - converted object in internal format.


#### convertToPublic
Converts and object value from internal to public format.

> `protected` convertToPublic(value: any): any

- **value**: any - object in internal format to convert.
- **returns**: any - converted object in public format.


#### create
Creates a data item.

> `public` create(context: [IContext](../../../components/context/icontext), item: T): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: Promise\<T\> - created item


#### defineSchema
Defines the database schema

> `protected` defineSchema(): void


#### deleteByFilter
This method shall be called by a public **deleteByFilter** method from the child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `public` deleteByFilter(context: [IContext](../../../components/context/icontext), filter: any): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: any - (optional) filter function used to filter items.


#### ensureIndex
Adds index definition to create it on opening.

> `protected` ensureIndex(keys: any, options?: any): void

- **keys**: any - index keys (fields)
- **options**: any - index options


#### getCountByFilter
Gets a number of data items retrieved by a given filter.

This method shall be called by a public **getCountByFilter** method from the child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` getCountByFilter(context: [IContext](../../../components/context/icontext), filter: any): Promise\<number\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: any - (optional) filter JSON object
- **returns**: Promise\<number\> - number of filtered items.


#### getListByFilter
Gets a list of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **getListByFilter** method from the child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` getListByFilter(context: [IContext](../../../components/context/icontext), filter: any, sort: any, select: any): Promise<T[]>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: any - (optional) filter function used to filter items
- **sort**: any - (optional) sorting parameters
- **select**: any - (optional) projection parameters (not used yet)
- **returns**: Promise<T[]> - data list of results by filter.


#### getOneRandom
Gets a random item from items that match to a given filter.

This method shall be called by a public [getOneRandom](#getonerandom) method from the child class
that receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` getOneRandom(context: [IContext](../../../components/context/icontext), filter: any): Promise\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: any - fileter JSON object.
- **returns**: Promise\<T\> - random item.


#### getPageByFilter
Gets a page of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **getPageByFilter** method from the child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` getPageByFilter(context: [IContext](../../../components/context/icontext), filter: any, paging: [PagingParams](../../../data/query/paging_params), sort: any, select: any): Promise<[DataPage](../../../data/query/data_page)\<T\>>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: any - (optional) filter JSON object
- **paging**: [PagingParams](../../../data/query/paging_params) - (optional) paging parameters
- **sort**: any - (optional) sorting JSON object
- **select**: any - (optional) projection JSON object
- **returns**: Promise<[DataPage](../../../data/query/data_page)\<T\>> - data page obtained by filtering


### Examples

```typescript
class MyMongoDbPersistence extends MongoDbPersistence<MyData> {
  public constructor() {
      super("mydata");
  }
  public async getByName(context: IContext, name: string) {
    let criteria = { name: name };
    return await new Promise((resolve, reject) => {
       this._model.findOne(criteria, (err, item) => {
          if (err == null) resolve(item);
          else reject(err);
       });
    });
  }
  public async set(correlatonId: string, item: MyData) {
    let criteria = { name: item.name };
    let options = { upsert: true, new: true };
    return await new Promise((resolve, reject) => {
       this._model.findOneAndUpdate(criteria, item, options, (err, item) => {
          if (err == null) resolve(item);
          else reject(err);
       });
    });
  }
}

let persistence = new MyMongoDbPersistence();
persistence.configure(ConfigParams.fromTuples(
    "host", "localhost",
    "port", 27017
));

await persitence.open("123");
await persistence.set("123", { name: "ABC" });

let item = await persistence.getByName("123", "ABC");
console.log(item);                   // Result: { name: "ABC" }
```
