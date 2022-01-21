
```cs
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;

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

    public Task<MyData> GetOneRandomAsync(string correlationId, FilterParams filterParams)
    {
        return base.GetOneRandomAsync(correlationId, ComposeFilter(filterParams));
    }

    public Task<List<MyData>> GetListByFilterAsync(string correlationId, FilterParams filterParams, SortParams sortParams = null)
    {
        return base.GetListByFilterAsync(correlationId, ComposeFilter(filterParams), ComposeSort(sortParams));
    }

    public Task<DataPage<MyData>> GetPageByFilterAsync(string correlationId, FilterParams filterParams, PagingParams paging = null, SortParams sortParams = null)
    {
        return base.GetPageByFilterAsync(correlationId, ComposeFilter(filterParams), paging, ComposeSort(sortParams));
    }

    public Task<long> GetCountByFilterAsync(string correlationId, FilterParams filterParams)
    {
        return base.GetCountByFilterAsync(correlationId, ComposeSort(sortParams));
    }

    public Task DeleteByFilterAsync(string correlationId, FilterParams filterParams)
    {
        return base.DeleteByFilterAsync(correlationId, ComposeFilter(filterParams));
    }
}

```
