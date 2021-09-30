
```cs
class BeaconMongoDbPersistence : MongoDbPersistence<BeaconV1>
{
    public BeaconMongoDbPersistence()
    {
        base("beacons");
    }

    public async BeaconV1 GetByNameAsync(string correlationId, string name)
    {
        var builder = Builders<BeaconV1>.Filter;
        var filter = builder.Eq(x => x.Name, name);
        var result = await _collection.Find(filter).FirstOrDefaultAsync();
        return result;
    }

    public async BeaconV1 setAsync(String correlatonId, BeaconV1 item)
    {
        var filter = Builders<BeaconV1>.Filter.Eq(x => x.Id, item.Id);
        var options = new FindOneAndReplaceOptions<T>
        {
            ReturnDocument = ReturnDocument.After,
            IsUpsert = true
        };
        var result = await _collection.FindOneAndReplaceAsync(filter, item, options);
        return result;
    }
}



```

