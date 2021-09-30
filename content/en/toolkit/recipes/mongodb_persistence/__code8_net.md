
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
        filter &= builder.Eq(b => b.Name, name);
        return filter;
    }

    public GetAsync(String correlationId, FilterParams filter, PagingParams paging)
    {
        return await GetPageByFilterAsync(correlationId, ComposeFilter(filter), paging, null, null);
    }

}

```

