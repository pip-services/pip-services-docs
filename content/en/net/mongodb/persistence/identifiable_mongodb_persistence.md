---
type: docs
title: " IdentifiableMongoDbPersistence<T, K>"
linkTitle: "IdentifiableMongoDbPersistence"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-mongodb-dotnet"
description: >
    Abstract persistence component that stores data in MongoDB
    and implements a number of CRUD operations over data items with unique ids.
    
---

**Inherits:** [MongoDbPersistence<T>](../mongodb_persistence), [IWriter<T, K>](../../../data/core/iwriter), [IGetter<T, K>](../../../data/core/igetter), [ISetter<T>](../../../data/core/isetter)


### Description

The IdentifiableMongoDbPersistence class allows you to create persistance components that store data in MongoDB databases and implement a number of CRUD operations over data items with unique ids.

**Important points**

- The data items must implement the [IIdentifiable](../../../commons/data/iidentifiable) interface.
- In basic scenarios child classes shall only override [GetPageByFilterAsync](../mongodb_persistence/#getpagebyfilterasync), [GetListByFilter](../mongodb_persistence/#getlistbyfilterasync) or [DeleteByFilter](../mongodb_persistence/#deletebyfilterasync)  operations with specific filter functions. All other operations can be used out of the box. 
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
- **connect_timeout**: (optional) connection timeout in milliseconds (default: 5 sec)
- **auto_reconnect**: (optional) enable auto reconnection (default: true)
- **max_page_size**: (optional) maximum page size (default: 100)
- **debug**: (optional) enable debug output (default: false).

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores used to resolve credentials



### Constructors
Creates a new instance of the persistence component.

> `public` IdentifiableMongoDbPersistence(string collectionName)

- **collectionName**: string - (optional) collection name.


### Fields

<span class="hide-title-link">

#### InternalIdFieldName
Internal field name
> `protected` **InternalIdFieldName**: string = = "_id"

</span>


### Instance methods


#### CreateAsync
Creates a data item.

> `public override` Task\<T\> CreateAsync(string correlationId, T item)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be created.
- **returns**: Task\<T\> - created item


#### DeleteByIdAsync
Deletes a data item by it's unique id.

> `public virtual` Task\<T\> DeleteByIdAsync(string correlationId, K id)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of the item to be deleted
- **return**: Task\<T\> - deleted item.


#### DeleteByIdsAsync
Deletes multiple data items by their unique ids.

> `public virtual` Task DeleteByIdsAsync(string correlationId, K[] ids)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ids**: K[] - ids of data items to be deleted.


#### GetListByIdsAsync
Gets a list of data items retrieved by given unique ids.

> `public virtual` Task\<List\<T\>\> GetListByIdsAsync(string correlationId, K[] ids)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ids**: K[] - ids of data items to be retrieved
- **return**: Task\<List\<T\>\> - data list of results by ids.


#### GetOneByIdAsync
Gets a data item by its unique id.

> `public virtual` Task\<T\> GetOneByIdAsync(string correlationId, K id)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of data item to be retrieved.
- **returns**: Task\<T\> - data item.


#### SetAsync
Sets a data item. If the data item exists, it updates it. Otherwise, it creates a new data item.

> `public virtual` Task\<T\> SetAsync(string correlationId, T item)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be set. 
- **returns**: Task\<T\> - updated item


#### UpdateAsync
Updates a data item.

> `public virtual` Task\<T\> UpdateAsync(string correlationId, T item)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be updated.
- **returns**: Task\<T\> - updated item.


### Examples

```cs
class MyMongoDbPersistence: MongoDbPersistence<MyData, string> 
{
    public constructor()
    {
        base("mydata", MyData.class);
    }

    private FilterDefinition<MyData> ComposeFilter(FilterParams filter)
    {
        filterParams = filterParams ?? new FilterParams();
        var builder = Builders<BeaconV1>.Filter;
        var filter = builder.Empty;
        String name = filter.getAsNullableString('name');
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
    FilterParams.FromTuples("name", "ABC")
);
Console.Out.WriteLine(mydata.Data);          // Result: { id: "1", name: "ABC" }

persistence.DeleteById("123", "1");
...

```
