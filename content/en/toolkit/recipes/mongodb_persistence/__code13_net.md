
```cs
class BeaconsMongoDbPersistence : IdentifiableMongoDbPersistence<BeaconV1, string>
{
    public constructor()
    {
        base("beacons");
    }

    protected override FilterDefinition<BeaconV1> ComposeFilter(FilterParams filter)
    {
        filterParams = filterParams ?? new FilterParams();
        var builder = Builders<BeaconV1>.Filter;
        var filter = builder.Empty;
        String name = filter.getAsNullableString("name");
        if (name != null)
            filter &= builder.Eq(b => b.Name, name);
        return filter;
    }

    public GetAsync(String correlationId, FilterParams filter, PagingParams paging)
    {
        return await GetPageByFilterAsync(correlationId, ComposeFilter(filter), paging, null, null);
    }
    public async Task<BeaconV1> GetOneByNameAsync(string correlationId, string name)
    {
        var builder = Builders<BeaconV1>.Filter;
        var filter = builder.Eq(x => x.Name, name);
        var result = await _collection.Find(filter).FirstOrDefaultAsync();
        if (result != null)
            _logger.Trace(correlationId, "Retrieved from {0} with name = {1}", _collectionName, name);
        else
            _logger.Trace(correlationId, "Nothing found from {0} with name = {1}", _collectionName, name);
        return result;
    }
}


```

