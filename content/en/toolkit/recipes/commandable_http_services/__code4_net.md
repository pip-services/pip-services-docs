
```cs
using PipServices3.Commons.Commands;
using PipServices3.Commons.Config;

public class HelloFriendController : IConfigurable, ICommandable
{
    private string _defaultName = "World";
    private FriendsCommandSet __commandSet;

    public HelloFriendController()
    {
        _defaultName = "Pip User";
    }

    public void Configure(ConfigParams config)
    {
        _defaultName = config.GetAsStringWithDefault("default_name", _defaultName);
    }

    public CommandSet GetCommandSet()
    {
        if (__commandSet == null)
            __commandSet = new FriendsCommandSet(this);

        return __commandSet;
    }

    public string Greeting(string name)
    {
        return $"Hello, {name ?? _defaultName} !";
    } 
}

```
