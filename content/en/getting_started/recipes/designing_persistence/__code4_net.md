
```cs
public class MyIdentifiableMySqlPersistence : IdentifiableMySqlPersistence<MyData, string>, IMyDataPersistence
{
    public MyIdentifiableMySqlPersistence(): base("mydata") {}

    protected override void DefineSchema()
    {
        ClearSchema();
        EnsureSchema($"CREATE TABLE {_tableName}   (id VARCHAR(32) PRIMARY KEY, `key` VARCHAR(50), `content` TEXT)");
        EnsureIndex($"{_tableName}_key", new Dictionary<string, bool> { { "key", true } }, new PipServices3.MySql.Persistence.IndexOptions { Unique = true });
    }

    private static string ComposeFilter(FilterParams filter)
    {
        filter ??= new FilterParams();
        var key = filter.GetAsNullableString("key");
        var content = filter.GetAsNullableString("content");

        var filterCondition = "";
        if (key != null)
            filterCondition += "`key`='" + key + "'";
        if (content != null)
            filterCondition += "`content`='" + content + "'";

        return filterCondition;
    }

    private static string ComposeSort(SortParams sort)
    {
        sort ??= new SortParams();
        var composeSort = "";

        for (var i = 0; i < sort.Count; i++)
            composeSort += sort[i].Name + (sort[i].Ascending ? " ASC" : " DESC");

        return composeSort;
    }

    public Task<DataPage<MyData>> GetPageByFilterAsync(string correlationId, FilterParams filter, PagingParams paging = null, SortParams sort = null)
    {
        return base.GetPageByFilterAsync(correlationId, ComposeFilter(filter), paging, ComposeSort(sort));
    }

    public Task<long> GetCountByFilterAsync(string correlationId, FilterParams filter)
    {
        return base.GetCountByFilterAsync(correlationId, ComposeFilter(filter));
    }

    public Task<List<MyData>> GetListByFilterAsync(string correlationId, FilterParams filter)
    {
        return base.GetListByFilterAsync(correlationId, ComposeFilter(filter));
    }

    public Task DeleteByFilterAsync(string correlationId, FilterParams filter)
    {
        return base.DeleteByFilterAsync(correlationId, ComposeFilter(filter));
    }
}
```
