
```cs
using PipServices3.MySql.Persistence;
using PipServices3.Commons.Data;

public class HelloFriendPersistence: IdentifiableMySqlPersistence<MyFriend, string>
{
    public HelloFriendPersistence() :base("myfriends3") { }

    protected override void DefineSchema()
    {
        ClearSchema();
        EnsureSchema($"CREATE TABLE IF NOT EXISTS {_tableName} (id VARCHAR(32) PRIMARY KEY, `type` VARCHAR(50), `name` TEXT)");
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
