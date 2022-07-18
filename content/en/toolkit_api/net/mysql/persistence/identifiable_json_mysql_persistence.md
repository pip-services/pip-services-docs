---
type: docs
title: "IdentifiableJsonMySqlPersistence<T, K>"
linkTitle: "IdentifiableJsonMySqlPersistence"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-mysql-dotnet"
description: >
    Abstract persistence component that stores data in MySQL in JSON or JSONB fields
    and implements a number of CRUD operations over data items with unique ids.

---

**Inherits:** [IdentifiableMySqlPersistence<T, K>](../identifiable_mysql_persistence)

### Description

The IdentifiableJsonMySqlPersistence class allows you to create persistence components that store data in MySQL in JSON or JSONB fields and implement a number of CRUD operations over data items with unique ids.

**Important points**

- The JSON table has only two fields: id and data.
- In basic scenarios child classes shall only override [GetPageByFilterAsync](../mysql_persistence/#getpagebyfilterasync), [GetListByFilterAsync](../mysql_persistence/#getlistbyfilterasync) or [DeleteByFilterAsync](../mysql_persistence/#deletebyfilterasync) operations with a specific filter function. 
- All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing **this._collection** and **this._model** properties.


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
- **connect_timeout**: (optional) number of milliseconds to wait before timing out when connecting a new client (default: 0)
- **idle_timeout**: (optional) number of milliseconds a client must sit idle in the pool and not be checked out (default: 10000)
- **max_pool_size**: (optional) maximum number of clients the pool can contain (default: 10)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) to resolve credentials



### Constructors
Creates a new instance of the persistence component.

> `public` IdentifiableJsonMySqlPersistence(tableName: string)

- **tableName**: string - (optional) collection's name.


### Instance methods

#### ConvertFromPublic
Converts object value from public to internal format.

> `protected override` [AnyValueMap](../../../commons/data/any_value_map) ConvertFromPublic(T value)

- **value**: T - object in public format to convert.
- **returns**: [AnyValueMap](../../../commons/data/any_value_map) - converted object in internal format.


#### ConvertToPublic
Converts object value from internal to public format.

> `protected override` T ConvertToPublic([AnyValueMap](../../../commons/data/any_value_map) map)

- **value**: [AnyValueMap](../../../commons/data/any_value_map) - object in internal format to convert.
- **returns**: T - converted object in public format.


#### EnsureTable
Adds DML statement to automatically create a JSON(B) table

> `protected` void EnsureTable(string idType = "VARCHAR(32)", string dataType = "JSON")

- **idType**: string - type of the id column (default: VARCHAR(32))
- **dataType**: string - type of the data column (default: JSON)


#### UpdatePartially
Updates only few selected fields in a data item.

> `public override` async Task\<T\> UpdatePartially(string correlationId, K id, [AnyValueMap](../../../commons/data/any_value_map) data)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of the data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **return**: Task\<T\> - updated item

### Examples

```cs
class MyMySqlPersistence: IdentifiableJsonMySqlPersistence<MyData, string> 
{
    public MyMySqlPersistence(): base("mydata") { }

    private List<Func<MyData, bool>> ComposeFilter(FilterParams filter)
    {
        filter = filter ?? new FilterParams();

        var id = filter.GetAsNullableString("id");
        var label = filter.GetAsNullableString("label");
        var udi = filter.GetAsNullableString("udi");

        return new List<Func<MyData, bool>>() {
            (item) =>
            {
                if (id != null && item.Id != id)
                    return false;
                if (label != null && item.Label != label)
                    return false;
                if (udi != null && item.Udi != udi)
                return true;
            }
        };
    }

    public Task<DataPage<MyData>> GetPageByFilterAsync(string correlationId, FilterParams filter, PagingParams paging)
    {
        return base.GetPageByFilterAsync(correlationId, ComposeFilter(filter), paging);
    }
}

var persistence = new MyMySqlPersistence();
persistence.Configure(ConfigParams.FromTuples(
    "host", "localhost",
    "port", 27017
));

persistence.OpenAsync("123");

persistence.CreateAsync("123", MyData());
var result = persistence.GetPageByFilterAsync(
        "123", 
        FilterParams.FromTuples("name", "ABC"), 
        null
    );
Console.WriteLine(result.Result.Data);
persistence.DeleteByIdAsync("123", "1");


```
