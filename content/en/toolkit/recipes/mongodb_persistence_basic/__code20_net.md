
```cs
using System;
using System.Runtime.Serialization;

using PipServices3.Commons.Data;
using PipServices3.Commons.Config;
using PipServices3.MongoDb.Persistence;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;


[DataContract]
[BsonNoId]
[BsonIgnoreExtraElements]
public class MyData : IStringIdentifiable
{
    [BsonElement("id")]
    [DataMember(Name = "id")]
    public string Id { get; set; }

    [BsonElement("key")]
    [DataMember(Name = "key")]
    public string Key { get; set; }

    [BsonElement("content")]
    [DataMember(Name = "content")]
    public string Content { get; set; }
}

public class MyMongoDbPersistence : MongoDbPersistence<MyData>
{
    public MyMongoDbPersistence(): base("mydata") { }

    protected FilterDefinition<MyData> ComposeFilter(FilterParams filterParams)
    {
        filterParams = filterParams ?? new FilterParams();

        var builder = Builders<MyData>.Filter;
        var filter = builder.Empty;

        var key = filterParams.GetAsNullableString("key");

        if (key != null)
            filter &= builder.Eq("key", key);

        return filter;
    }

    public Task<List<MyData>> GetListByFilterAsync(string correlationId, FilterParams filterParams, SortParams sortParams = null)
    {
        return base.GetListByFilterAsync(correlationId, ComposeFilter(filterParams), ComposeSort(sortParams));
    }

    public virtual async Task<MyData> UpdateAsync(string correlationId, MyData item)
    {
        if (item == null)
            return null;

        var filter = Builders<MyData>.Filter.Eq("id", item.Id);
        var options = new FindOneAndReplaceOptions<MyData>
        {
            ReturnDocument = ReturnDocument.After,
            IsUpsert = false
        };
        var result = await _collection.FindOneAndReplaceAsync(filter, item, options);

        _logger.Trace(correlationId, "Update in {0} with id = {1}", _collectionName, item.Id);

        return result;
    }

    public Task DeleteByFilterAsync(string correlationId, FilterParams filterParams)
    {
        return base.DeleteByFilterAsync(correlationId, ComposeFilter(filterParams));
    }
}

public static void PrintResult(string operationNme, MyData res)
{
    Console.WriteLine($"==================== {operationNme} ====================");
    Console.WriteLine($"MyData Key: {res.Id}");
    Console.WriteLine($"MyData Key: {res.Key}");
    Console.WriteLine($"MyData Key: {res.Content}");
}


var data1 = new MyData { Id = "1", Key = "key 1", Content="content 1" };

persistence = MyMongoDbPersistence()

var config = ConfigParams.FromTuples(
    "connection.host", "localhost",
    "connection.port", 27017,
    "connection.database", "mydb"
);

persistence.configure(config)

await persistence.OpenAsync("123");
await persistence.ClearAsync("123");

// 1 - Create
var result = await persistence.CreateAsync(null, data1);
PrintResult("Create", result);

// 2 - Retrieve
var items = await persistence.GetListByFilterAsync("123", FilterParams.FromTuples("key", "key 1"), null);
PrintResult("Get by id", items[0]);

// 3 - Update
items[0].Content = "new content 2";
items[0].Key = "key 2";

var update = await persistence.UpdateAsync(null, items[0]);
PrintResult("Update", update);

// 4 - Delete
await  persistence.DeleteByFilterAsync(null, FilterParams.FromTuples("key", "key 2"));

await persistence.CloseAsync("123");

```
