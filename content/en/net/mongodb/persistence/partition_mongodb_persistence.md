---
type: docs
title: "PartitionMongoDbPersistence<T, K>"
linkTitle: "PartitionMongoDbPersistence"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-mongodb-dotnet"
description: >
    Abstract persistence component that stores data in MongoDB
    and implements a number of CRUD operations over data items with partitionKey.
    The data items must implement the [IIdentifiable<K>](../../../commons/data/iidentifiable) interface.  

   
---

**Inherits:** [IdentifiableMongoDbPersistence<T, K>](../identifiable_mongodb_persistence)

### Description

The MongoDbPersistence class allows you to create persistence components that store data in MongoDB databases using the official MongoDB driver.

**Important points**

- In basic scenarios child classes shall only override [GetPageByFilterAsync](../mongodb_persistence/#getpagebyfilterasync), [GetListByFilter](../mongodb_persistence/#getlistbyfilterasync) or [DeleteByFilter](../mongodb_persistence/#deletebyfilterasync)  operations with specific filter functions.
- All other operations can be used out of the box.
- In complex scenarios child classes can implement additional operations by accessing **this._collection** and **this._model** properties.

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
- **connect_timeout**: (optional) connection timeout in milliseconds (default: 5 sec)
- **auto_reconnect**: (optional) enable auto reconnection (default: true)
- **max_page_size**: (optional) maximum page size (default: 100)
- **debug**: (optional) enable debug output (default: false).

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials


### Constructors
Creates a new instance of the persistence component.

> `public` PartitionMongoDbPersistence(string collectionName, string partitionKey)

- **collectionName**: string - (optional) collection name.
- **partitionKey**: string - partition key

### Fields

<span class="hide-title-link">

#### _partitionKey
Partition key
> `protected` **_partitionKey**: string

    

</span>


### Instance methods

#### Configure
Configures component by passing configuration parameters.

> `public` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### DeleteByIdAsync
Deletes a data item by it's unique id.

> `public override` Task\<T\> DeleteByIdAsync(string correlationId, K id)

- **correlationId**: string - object to convert from the public partial format.
- **id**: K - id of the item to be deleted


#### GetOneByFilterAsync
Gets one first data item by filter.

> `public` Task\<T\> GetOneByFilterAsync(string correlationId, FilterDefinition\<T\> filterDefinition)

- **correlationId**: string - (optional) transaction id used  to trace execution through the call chain.
- **filterDefinition**: FilterDefinition\<T\> - (optional) filter for JSON object
- **returns**: Task\<T\> - data item.

Gets one first data item by filter.

> `protected` Task\<object\> GetOneByFilterAsync(string correlationId, FilterDefinition\<T\> filterDefinition, ProjectionParams projection)

- **correlationId**: string - (optional) transaction id used  to trace execution through the call chain.
- **filterDefinition**: FilterDefinition\<T\> - (optional) filter for JSON object.
- **projection**: [ProjectionParams](../../../commons/data/projection_params) - (optional) projection parameters.
- **returns**: Task\<object\> - data item.


#### ModifyByIdAsync
Modifies a data item by it's unique id.

> `public override` Task\<T\> ModifyByIdAsync(string correlationId, K id, UpdateDefinition\<T\> updateDefinition)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - (optional) filter function used to filter items.
- **updateDefinition**: UpdateDefinition\<T\> - (optional) JSON object to update
- **returns**: Task\<T\> - updated item.


#### SetAsync
Sets a data item. If the data item exists, it updates it. Otherwise, it create a new data item.

> `public override` Task\<T\> SetAsync(string correlationId, T item)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be set.
- **returns**: Task\<T\> - updated item.


#### UpdateAsync
Updates a data item.

> `public override` Task\<T\> UpdateAsync(string correlationId, T item)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be updated.
- **returns**: Task\<T\> - updated item.


### Examples

```cs
class MyMongoDbPersistence: PartitionMongoDbPersistence<MyData, string> 
{
    public MyMongoDbPersistence(): base("mydata") { }

    private FilterDefinition<MyData> ComposeFilter(FilterParams filter)
    {
        filterParams = filterParams ?? new FilterParams();
        var builder = Builders<BeaconV1>.Filter;
        var filter = builder.Empty;
        String name = filter.getAsNullableString("name");
        if (name != null)
            filter &= builder.Eq(b => b.Name, name);
        return filter;
    }
    
    public GetPageByFilter(String correlationId, FilterParams filter, PagingParams paging)
    {
        base.GetPageByFilter(correlationId, this.ComposeFilter(filter), paging, null, null);
    }
}

var persistence = new MyMongoDbPersistence();
persistence.Configure(ConfigParams.FromTuples(
    "host", "localhost",
    "port", 27017 )
);
 
persitence.Open("123");

persistence.Create("123", new MyData("1", "ABC"));
var mydata = persistence.GetPageByFilter(
    "123",
    FilterParams.FromTuples("name", "ABC"));
Console.Out.WriteLine(mydata.Data);          // Result: { id: "1", name: "ABC" }

persistence.DeleteById("123", "1");
...
```
