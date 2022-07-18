
```cs
using PipServices3.Commons.Refer;
using PipServices3.Components.Build;


public class HelloFriendServiceFactory: Factory
{
    public HelloFriendServiceFactory()
    {
        var CommandableHttpServiceDescriptor = new Descriptor("hello-friend", "service", "commandable-http", "*", "1.0"); // View 
        var ControllerDescriptor = new Descriptor("hello-friend", "controller", "default", "*", "1.0"); // Controller

        RegisterAsType(CommandableHttpServiceDescriptor, typeof(FriendCommandableHttpService));
        RegisterAsType(ControllerDescriptor, typeof(HelloFriendController));
    }
}

```
