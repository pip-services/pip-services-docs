
```cs
using PipServices3.Components.Build;
using PipServices3.Commons.Refer;


public class HelloFriendServiceFactory: Factory
{
    public HelloFriendServiceFactory(): base()
    {
        var HttpServiceDescriptor = new Descriptor("hello-friend", "service", "http", "*", "1.0");                          // View 1
        var CommandableHttpServiceDescriptor1 = new Descriptor("hello-friend", "service", "commandable-http1", "*", "1.0"); // View 2
        var CommandableHttpServiceDescriptor2 = new Descriptor("hello-friend", "service", "commandable-http2", "*", "1.0"); // View 2
        var ControllerDescriptor = new Descriptor("hello-friend", "controller", "default", "*", "1.0");                     // Controller

        RegisterAsType(HttpServiceDescriptor, typeof(HelloFriendRestService));                      // View 1
        RegisterAsType(CommandableHttpServiceDescriptor1, typeof(FriendCommandableHttpService1));   // View 2
        RegisterAsType(CommandableHttpServiceDescriptor2, typeof(FriendCommandableHttpService2));   // View 3
        RegisterAsType(ControllerDescriptor, typeof(HelloFriendController));                        // Controller
    }
}

        
```
