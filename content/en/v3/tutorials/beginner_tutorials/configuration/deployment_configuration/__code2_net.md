
```cs
using PipServices3.Commons.Config;
using PipServices3.Commons.Refer;


public class HelloFriendController : IConfigurable, IReferenceable
{
    private string defaultName;

    private IMyDataPersistence persistence;

    public HelloFriendController()
    {
        defaultName = "Pip User";
    }

    public void Configure(ConfigParams config)
    {
        defaultName = config.GetAsStringWithDefault("default_name", defaultName);
    }

    public void SetReferences(IReferences references)
    {
        persistence = references.GetOneRequired<IMyDataPersistence>(new Descriptor("hello-friend", "persistence", "*", "*", "1.0"));
    }

    public async Task<string> Greeting()
    {
        var filter = FilterParams.FromTuples("type", "friend");
        var selectedFilter = await persistence.GetOneRandomAsync(null, filter);
        var name = selectedFilter!= null ? selectedFilter.Name : null;

        return $"Hello, {name} !";
    }

    public async Task<MyFriend> CreateAsync(string correlationId, MyFriend item)
    {
        var res = await persistence.CreateAsync(correlationId, item);

        return res;
    }
}


```

