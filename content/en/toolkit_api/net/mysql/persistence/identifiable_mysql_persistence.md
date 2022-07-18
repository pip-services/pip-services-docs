---
type: docs
title: "IdentifiableMySqlPersistence<T extends IIdentifiable<K>, K>"
linkTitle: "IdentifiableMySqlPersistence"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-mysql-dotnet"
description: >

    Abstract persistence component that stores data in MySQL
    and implements a number of CRUD operations over data items with unique ids.
    

---

**Inherits:** [MySqlPersistence<T>](../mysql_persistence)

### Description

The IdentifiableMySqlPersistence class allows you to create persistence components that store data in MySQL databases and implement a number of CRUD operations over data items with unique ids.

**Important points**

- The data items must implement the [IIdentifiable](../../../commons/data/iidentifiable) interface.
- In basic scenarios, child classes shall only override [GetPageByFilterAsync](../mysql_persistence/#getpagebyfilterasync), [GetListByFilterAsync](../memory_persistence/#getlistbyfilterasync) or [DeleteByFilterAsync](../mysql_persistence/#deletebyfilterasync) operations with the specific filter function.
- All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing the **this._collection** and **this._model** properties.

#### Configuration parameters

- **collection**: (optional) MySQL collection name

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
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials ([ICredentialStore](../../../components/auth/icredential_store))


### Constructors
Creates a new instance of the persistence component.

> `public` IdentifiableMySqlPersistence(tableName: string)

- **tableName**: string - (optional) collection's name.


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
- **returns**: Task\<T\> - deleted item


#### DeleteByIdsAsync
Deletes multiple data items by their unique ids.

> `public virtual` Task DeleteByIdsAsync(string correlationId, K[] ids)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ids**: K[] - ids of the data items to be deleted.


#### GetListByIdsAsync
Gets a list of data items retrieved by given unique ids.

> `public virtual` Task\<List\<T\>\> GetListByIdsAsync(string correlationId, K[] ids)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ids**: K[] - ids of the data items to be retrieved
- **returns**: Task\<List\<T\>\> - data list


#### GetOneByIdAsync
Gets a data item by its unique id.

> `public virtual` async Task\<T\> GetOneByIdAsync(string correlationId, K id)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of the data item to be retrieved.
- **returns**: Task\<T\> - data item


#### SetAsync
Sets a data item. If the data item exists, it updates it. 
Otherwise, it creates a new data item.

> `public virtual` async Task\<T\> SetAsync(string correlationId, T item)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be set.
- **returns**: Task\<T\> - new or updated item


#### Update
Updates a data item.

> `public virtual` async Task\<T\> UpdateAsync(string correlationId, T item)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be updated.
- **returns**: Task\<T\> - updated item


#### UpdatePartially
Updates only a few selected fields in a data item.

> `public virtual` Task\<T\> UpdatePartially(string correlationId, K id, [AnyValueMap](../../../commons/data/any_value_map) data)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: Task\<T\> - updated item

### Examples
```cs
class MyMySqlPersistence: MySqlPersistence<MyData, string> 
{
    public MyMySqlPersistence(): base("mydata") { }

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

var persistence = new MyMySqlPersistence();
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
