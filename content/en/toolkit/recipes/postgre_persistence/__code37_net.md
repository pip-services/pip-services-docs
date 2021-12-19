
```cs
public class MyPostgresPersistence: IdentifiableJsonPostgresPersistence<MyData, string>
{
    public MyPostgresPersistence() : base("mydata_json2") { }

    protected override void DefineSchema()
    {
        ClearSchema();
        EnsureTable();
        EnsureIndex($"{_tableName}_key", new Dictionary<string, bool> { { "(data->>'key')", true } }, new IndexOptions { Unique = false });
    }
}

```
