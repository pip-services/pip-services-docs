
```cs
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

    protected SortDefinition<MyData> ComposeSort(SortParams sortParams)
    {
        sortParams = sortParams ?? new SortParams();

        var builder = Builders<MyData>.Sort;
        var sortDefinitions = new List<SortDefinition<MyData>>();

        foreach (var field in sortParams)
        {
            if (field.Ascending)
                sortDefinitions.Add(builder.Ascending(field.Name));
            else
                sortDefinitions.Add(builder.Descending(field.Name));
        }

        var sort = builder.Combine(sortDefinitions);

        return sort;
    }
```
