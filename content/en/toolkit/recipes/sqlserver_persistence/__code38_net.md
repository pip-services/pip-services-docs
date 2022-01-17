
```cs
public class MySqlServerPersistence : IdentifiableJsonSqlServerPersistence<MyData, string>
{
    public MySqlServerPersistence() : base("mydata_json") { }

    protected override void DefineSchema()
    {
        ClearSchema();
        EnsureTable();
        EnsureSchema("ALTER TABLE [mydata_json] ADD [data_key] AS JSON_VALUE([data],'$.key')");
        EnsureIndex($"{_tableName}_key", new Dictionary<string, bool> { { "data_key", true } }, new PipServices3.SqlServer.Persistence.IndexOptions { Unique = true });
    }

    public async new Task<List<MyData>> GetListByFilterAsync(string correlationId, string filter, string sort = null, string select = null)
    {
        return await base.GetListByFilterAsync(correlationId, filter, sort, select);
    }

    public async new Task<MyData> GetOneRandomAsync(string correlationId, string filter)
    {
        return await base.GetOneRandomAsync(correlationId, filter);
    }

    public async Task<DataPage<MyData>> GetPageByFilterAsync(string correlationId, string filter, PagingParams paging)
    {
        return await base.GetPageByFilterAsync(correlationId, filter, paging, null, null);
    }

    public async new Task<long> GetCountByFilterAsync(string correlationId, string filter)
    {
        return await base.GetCountByFilterAsync(correlationId, filter);
    }
}
        
```
