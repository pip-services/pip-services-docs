
```cs
public class MySqlServerPersistence : SqlServerPersistence<MyData>
{
    public MySqlServerPersistence() : base("mydata") { }

    protected override void DefineSchema()
    {
        ClearSchema();
        EnsureSchema($"CREATE TABLE [{_tableName}] ([id] VARCHAR(32) PRIMARY KEY, [key] VARCHAR(50), [content] VARCHAR(MAX))");
        EnsureIndex($"{_tableName}_key", new Dictionary<string, bool> { { "key", true } }, new PipServices3.SqlServer.Persistence.IndexOptions { Unique = true });
    }

    public async new Task<MyData> GetOneRandomAsync(string correlationId, string filter)
    {
        return await base.GetOneRandomAsync(correlationId, filter);
    }

    public async Task<DataPage<MyData>> GetPageByFilterAsync(string correlationId, string filter, PagingParams paging)
    {
        return await base.GetPageByFilterAsync(correlationId, filter, paging, null, null);
    }

    public async new Task<List<MyData>> GetListByFilterAsync(string correlationId, string filter, string sort = null, string select = null)
    {
        return await base.GetListByFilterAsync(correlationId, filter, sort, select);
    }

    public async new Task<long> GetCountByFilterAsync(string correlationId, string filter)
    {
        return await base.GetCountByFilterAsync(correlationId, filter);
    }

}
```
