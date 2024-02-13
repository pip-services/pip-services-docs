
```cs
using PipServices3.Rpc.Services;

public class FriendCommandableHttpService: CommandableHttpService
{
    public FriendCommandableHttpService(): base("commandable_hello_friend")
    {
        _dependencyResolver.Put("controller", new Descriptor("hello-friend", "controller", "*", "*", "*"));
    }
}

```
