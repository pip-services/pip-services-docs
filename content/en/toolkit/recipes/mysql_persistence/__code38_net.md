
```cs
public class MyMySqlPersistence : IdentifiableJsonMySqlPersistence<MyData, string>
{
    public MyMySqlPersistence() : base("mydata") { }

    protected override void DefineSchema()
    {
        ClearSchema();
        EnsureTable();
        EnsureSchema($"ALTER TABLE `{_tableName}` ADD `data_key` VARCHAR(50) AS (JSON_UNQUOTE(`data`->\"$.key\"))");
        EnsureIndex($"{_tableName}_key", new Dictionary<string, bool> { { "data_key", true } }, new IndexOptions { Unique = true });
    }

    public async new Task<MyData> GetOneRandomAsync(string correlationId, string filter)
    {
        return await base.GetOneRandomAsync(correlationId, filter);
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
