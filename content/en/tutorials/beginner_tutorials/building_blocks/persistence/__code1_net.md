
```cs
using PipServices3.MongoDb.Persistence;
using MongoDB.Bson.Serialization.Attributes;
using System.Runtime.Serialization;
using System.Threading.Tasks;
using MongoDB.Driver;

class MyObject
{
    [BsonElement("key")]
    [DataMember(Name = "key")]
    public string Key { get; set; }
    [BsonElement("name")]
    [DataMember(Name = "name")]
    public string Name { get; set; }
}

class MyMongoDbPersistence : MongoDbPersistence<MyObject>
{
    public MyMongoDbPersistence():base("mycollection") { }

    public async Task<MyObject> GetByNameAsync(string correlationId, string name)
    {
        var builder = Builders<MyObject>.Filter;
        var filter = builder.Empty;

        
        filter &= builder.Eq("name", name); ;
        var res = await GetListByFilterAsync(correlationId, filter);

        return res.Count > 0 ? res[0] : null;
    }

    public async Task<MyObject> CreateDefault(string correlationId, string name)
    {
        name ??= "unknown";
        var key = name.ToLower().Replace(" #$%^&", "_");
        var item = new MyObject { Key = key, Name = name };

        await _collection.InsertOneAsync(item, null);

        _logger.Trace(correlationId, "Created item in %s with key = %s", _collectionName, key);

        return item;
    }

    public async Task DeleteByName(string correlationId, string name)
    {
        var builder = Builders<MyObject>.Filter;
        var filter = builder.Empty;


        filter &= builder.Eq("name", name); ;
        await DeleteByFilterAsync(correlationId, filter);
    }
}

```