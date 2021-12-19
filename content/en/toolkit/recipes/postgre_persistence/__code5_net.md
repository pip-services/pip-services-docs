
```cs
public class MyPostgresPersistence: PostgresPersistence<MyData>
{
    MyPostgresPersistence() : base("mydata") { }

    protected override void DefineSchema()
    {
        ClearSchema();
        EnsureSchema($"CREATE TABLE {_tableName} (id TEXT PRIMARY KEY, key TEXT, content TEXT)");
        EnsureIndex($"{_tableName}_key", new Dictionary<string, bool> { { "key", true } }, new IndexOptions { Unique = true });
    }
}

```
