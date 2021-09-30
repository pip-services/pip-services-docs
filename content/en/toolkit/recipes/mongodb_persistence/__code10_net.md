
```cs
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

```

