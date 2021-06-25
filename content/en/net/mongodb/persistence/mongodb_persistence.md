---
type: docs
title: "MongoDbPersistence<T>"
linkTitle: "MongoDbPersistence"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-mongodb-dotnet"
description: >
    Abstract persistence component that stores data in MongoDB using the official MongoDB driver.

   
---

**Inherits:** [IReferenceable](../../../commons/refer/ireferenceable), [IUnreferenceable](../../../commons/refer/iunreferenceable), [IConfigurable](../../../commons/config/iconfigurable), [IOpenable](../../../commons/run/iopenable), [ICleanable](../../../commons/run/icleanable)

### Description

The MongoDbPersistence class allows you to create persistence components that store data in MongoDBs using the official MongoDB driver.

Important points

- This is the most basic persistence component that is only able to store data items of any type. Specific CRUD operations over the data items must be implemented in child classes by accessing **this.__collection** or **this.__model** properties.

#### Configuration parameters

- **collection**: (optional) MongoDB collection name

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
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials


### Constructors
Creates a new instance of the persistence component.

> `public` MongoDbPersistence(string collectionName)

- **collectionName**: string - (optional) collection name.



### Fields

<span class="hide-title-link">

#### _dependencyResolver
The dependency resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../commons/refer/dependency_resolver)

#### _logger
The logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _connection
The MongoDB connection component.
> `protected` **_connection**: [MongoDBConnection](../../connect/mongodb_connection) 

#### _collectionName
The MongoDB colleciton name.
> `protected` **_collectionName**: string;

#### _collection
The MongoDb collection object.
> `protected` **_collection**: IMongoCollection\<T\>

#### _client
The MongoDB connection pool object.
> `protected` **_client**: MongoClient 

#### _database
The MongoDb database object.

> `protected` **_database**: IMongoDatabase

#### _maxPageSize
The maximum number of records to return from the database per request.
> `protected` **_maxPageSize**: int = 100

</span


### Instance methods

#### ClearAsync
Clears a component's state.

> `public virtual` Task ClearAsync(string correlationId)

- **correlationId**: string - object to convert from the public partial format.


#### CloseAsync
Closes the component and frees used resources.

> `public virtual` Task CloseAsync(string correlationId)

- **correlationId**: string - object to convert from the public partial format.


#### Configure
Closes the component and frees used resources.

> `public virtual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### CreateAsync
Creates a data item.

> `public virtual` async Task\<T\> CreateAsync(string correlationId, T item)

- **correlationId**: string - (optional) transaction id used  to trace execution through the call chain.
- **item**: T - item to be created.
- **returns**: Task\<T\> - created item


#### DeleteByFilterAsync
This method shall be called by a public **DeleteByFilterAsync** method from the child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `public virtual` Task DeleteByFilterAsync(string correlationId, FilterDefinition\<T\> filterDefinition)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filterDefinition**: FilterDefinition\<T\> - (optional) filter function used to filter items.


#### GetListByFilterAsync
Gets a list of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **GetListByFilterAsync** method from the child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `public virtual` Task\<List\<T\>\> GetListByFilterAsync(string correlationId, FilterDefinition\<T\> filterDefinition, SortDefinition\<T\> sortDefinition = null)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filterDefinition**: FilterDefinition\<T\> - (optional) filter function used to filter items
- **sortDefinition**: SortDefinition\<T\> - (optional) sorting parameters
- **returns**: Task\<List\<T\>\> - data list of results by filter.


#### GetOneRandomAsync
Gets a random item from items that match to a given filter.

This method shall be called by a public [GetOneRandomAsync](#getonerandomasync) method from the child class
that receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `public virtual` async Task\<T\> GetOneRandomAsync(string correlationId, FilterDefinition\<T\> filterDefinition)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filterDefinition**: FilterDefinition\<T\> - fileter JSON object.
- **returns**: Task\<T\> - random item.


#### GetPageByFilter
Gets a page of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **GetPageByFilter** method from the child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `public virtual` Task\<[DataPage](../../../commons/data/data_page)\<T\>\> GetPageByFilterAsync(string correlationId, FilterDefinition\<T\> filterDefinition, [PagingParams](../../../commons/data/paging_params) paging = null, SortDefinition\<T\> sortDefinition = null)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filterDefinition**: FilterDefinition\<T\> - (optional) filter JSON object
- **paging**: [PagingParams](../../../commons/data/paging_params) - (optional) paging parameters
- **sortDefinition**: SortDefinition\<T\> - (optional) sorting JSON object
- **returns**: Task\<[DataPage](../../../commons/data/data_page)\<T\>\> - data page obtained by filtering

#### UnsetReferences
Unsets (clears) previously set references to dependent components.
> `public virtual` void UnsetReferences()

#### SetReferences
Sets references to dependent components.
> `public virtual` void SetReferences([IReferences](../../../commons/refer/ireferences) references)
- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Examples

```cs
class MyMongoDbPersistence: MongoDbPersistence<MyData> 
{
    public MyMongoDbPersistence()
    {
        base("mydata");
    }
    public MyData getByName(string correlationId, string name)
    {
        var builder = Builders<BeaconV1>.Filter;
        var filter = builder.Eq(x => x.Name, name);
        var result = await _collection.Find(filter).FirstOrDefaultAsync();
        return result;
    }
    public MyData set(String correlatonId, MyData item)
    {
        var filter = Builders<T>.Filter.Eq(x => x.Id, item.Id);
        var options = new FindOneAndReplaceOptions<T>
        {
            ReturnDocument = ReturnDocument.After,
            IsUpsert = true
        };
        var result = await _collection.FindOneAndReplaceAsync(filter, item, options);
        return result;
    }
}

var persistence = new MyMongoDbPersistence();
persistence.Configure(ConfigParams.fromTuples(
   "host", "localhost",
   "port", 27017 
));

persitence.Open("123");
var mydata = new MyData("ABC");
persistence.Set("123", mydata);
persistence.GetByName("123", "ABC");
Console.Out.WriteLine(item);                   // Result: { name: "ABC" }
```
