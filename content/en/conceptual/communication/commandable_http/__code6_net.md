
```cs
using PipServices3.Container;
using PipServices3.Rpc.Build;
using PipServices3.Swagger.Build;

public class HelloFriendProcess: ProcessContainer
{
    public HelloFriendProcess(): base("hello-friend", "HelloFriend microservice")
    {
        _configPath = "../../../config.yaml";

        _factories.Add(new HelloFriendServiceFactory());
        _factories.Add(new DefaultRpcFactory());
        _factories.Add(new DefaultSwaggerFactory());
    }
}

```

