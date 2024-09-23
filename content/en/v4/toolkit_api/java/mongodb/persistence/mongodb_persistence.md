---
type: docs
title: "MongoDbPersistence"
linkTitle: "MongoDbPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-mongodb-java"
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
> `protected` [DependencyResolver](../../../components/refer/dependency_resolver) **_dependencyResolver** = new [DependencyResolver](../../../components/refer/dependency_resolver)(_defaultConfig);

#### _logger
The logger.
> `protected` [CompositeLogger](../../../observability/log/composite_logger) **_logger** = new [CompositeLogger](../../../observability/log/composite_logger);

#### _connection
The MongoDB connection component.
> `protected` [MongoDBConnection](../../connect/mongodb_connection) **_connection**; 

#### _collectionName
The MongoDB colleciton name.
> `protected` String **_collectionName**;

#### _collection
The MongoDb collection object.
> `protected` MongoCollection<Document> **_collection**;

#### _client
The MongoDB connection pool object.
> `protected` MongoClient **_client**; 

#### _databaseName 
The MongoDB database name.
> `protected` **_databaseName**: string

#### _db
The MongoDb database object.

> `protected` MongoDatabase **_db**;

#### _maxPageSize
The maximum number of records to return from the database per request.
> `protected` long **_maxPageSize** = 100;

</span


### Instance methods

#### clear
Clears a component's state.

> `public` void clear([IContext](../../../components/context/icontext) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - a context to trace execution through a call chain.

#### clearSchema
Clears all auto-created objects

> `protected` void clearSchema()


#### close
Closes the component and frees used resources.

> `public` void close([IContext](../../../components/context/icontext) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - a context to trace execution through a call chain.


#### configure
Closes the component and frees used resources.

> `public` void configure([ConfigParams](../../../components/config/config_params) config) throws ConfigException

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### convertFromPublic
Converts an object value from public to internal format.

> `protected` Document convertFromPublic(Object value)

- **value**: Object - object in public format to convert.
- **returns**: Document - converted object in internal format.


#### convertToPublic
Converts and object value from internal to public format.

> `protected` T convertToPublic(Document value)

- **value**: Document - object in internal format to convert.
- **returns**: T - converted object in public format.


#### create
Creates a data item.

> `public` T create([IContext](../../../components/context/icontext) context, T item)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: T - created item


#### defineSchema
Defines the database schema

> `protected` void defineSchema()


#### deleteByFilter
This method shall be called by a public **deleteByFilter** method from the child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `public` void deleteByFilter([IContext](../../../components/context/icontext) context, Bson filter)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Bson - (optional) filter function used to filter items.


#### ensureIndex
Adds index definition to create it on opening.

> `protected` void ensureIndex(Bson keys, IndexOptions options)

- **keys**: Bson - index keys (fields)
- **options**: IndexOptions - index options


#### getCountByFilter
Gets a number of data items retrieved by a given filter.

This method shall be called by a public **getCountByFilter** method from the child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` Long getCountByFilter([IContext](../../../components/context/icontext) context, Bson filter)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Bson - (optional) filter JSON object
- **returns**: Long - number of filtered items.


#### getListByFilter
Gets a list of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **getListByFilter** method from the child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` List<T> getListByFilter([IContext](../../../components/context/icontext) context, Bson filter, Bson sort, Bson select)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Bson - (optional) filter function used to filter items
- **sort**: Bson - (optional) sorting parameters
- **select**: Bson - (optional) projection parameters (not used yet)
- **returns**: List<T> - data list of results by filter.


#### getOneRandom
Gets a random item from items that match to a given filter.

This method shall be called by a public [getOneRandom](#getonerandom) method from the child class
that receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` T getOneRandom([IContext](../../../components/context/icontext) context, Bson filter)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Bson - fileter JSON object.
- **returns**: T - random item.


#### getPageByFilter
Gets a page of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **getPageByFilter** method from the child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` [DataPage](../../../data/query/data_page)<T> getPageByFilter([IContext](../../../components/context/icontext) context, Bson filter, [PagingParams](../../../data/query/paging_params) paging, Bson sort, Bson select)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Bson - (optional) filter JSON object
- **paging**: [PagingParams](../../../data/query/paging_params) - (optional) paging parameters
- **sort**: Bson - (optional) sorting JSON object
- **select**: Bson - (optional) projection JSON object
- **returns**: [DataPage](../../../data/query/data_page)<T> - data page obtained by filtering


### Examples
```java
{@code
class MyMongoDbPersistence extends MongoDbPersistence<MyData> {

  public MyMongoDbPersistence() {
      super("mydata", MyData.class);
  }

  public MyData getByName(IContext context, String name) {
  	Bson filter = Filters.eq("name", name);
  	MyData item = _collection.find(filter).first();
  	return item;
  }

  public MyData set(IContext context, MyData item) {
      Bson filter = Filters.eq("name", item.getName());

      FindOneAndReplaceOptions options = new FindOneAndReplaceOptions();
      options.returnDocument(ReturnDocument.AFTER);
      options.upsert(true);

      MyData result = _collection.findOneAndReplace(filter, item, options);
      return result;
  }

}

MyMongoDbPersistence persistence = new MyMongoDbPersistence();
persistence.configure(ConfigParams.fromTuples(
    "host", "localhost",
    "port", 27017
));

persitence.open("123");
MyData mydata = new MyData("ABC");
persistence.set("123", mydata);
persistence.getByName("123", "ABC");
System.out.println(item);                   // Result: { name: "ABC" }
}
```