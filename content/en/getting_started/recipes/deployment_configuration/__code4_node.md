
```cs
using PipServices3.Postgres.Persistence;

public class HelloFriendPersistence2 : IdentifiablePostgresPersistence<MyFriend, string>, IMyDataPersistence
{
    public HelloFriendPersistence2() : base("myfriends3") { }

    protected override void DefineSchema()
    {
        ClearSchema();
        EnsureSchema($"CREATE TABLE IF NOT EXISTS {_tableName} (id TEXT PRIMARY KEY, type TEXT, name TEXT)");
    }

    private static string ComposeFilter(FilterParams filter)
    {
        filter ??= new FilterParams();
        var type = filter.GetAsNullableString("type");
        var name = filter.GetAsNullableString("name");

        var filterCondition = "";
        if (type != null)
            filterCondition += "`type`='" + type + "'";
        if (name != null)
            filterCondition += "`name`='" + name + "'";

        return filterCondition;
    }

    public Task<MyFriend> GetOneRandomAsync(string correlationId, FilterParams filter)
    {
        return base.GetOneRandomAsync(correlationId, ComposeFilter(filter));
    }
}

```

