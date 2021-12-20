
```cs
public class MyPostgresPersistence: PostgresPersistence<MyData>
{
    public MyPostgresPersistence() : base("mydata") { }

    protected override void DefineSchema()
    {
        ClearSchema();
        EnsureSchema($"CREATE TABLE {_tableName} (id TEXT PRIMARY KEY, key TEXT, content TEXT)");
        EnsureIndex($"{_tableName}_key", new Dictionary<string, bool> { { "key", true } }, new IndexOptions { Unique = true });
    }

    public async new Task<MyData> GetOneRandomAsync(string correlationId, string filter)
    {
        return await base.GetOneRandomAsync(correlationId, filter);
    }

    public async new Task<List<MyData>> GetListByFilterAsync(string correlationId, string filter, string sort = null, string select = null)
    {
        return await base.GetListByFilterAsync(correlationId, filter);
    }

    public async new Task<long> GetCountByFilterAsync(string correlationId, string filter)
    {
        return await base.GetCountByFilterAsync(correlationId, filter);
    }
}
```
