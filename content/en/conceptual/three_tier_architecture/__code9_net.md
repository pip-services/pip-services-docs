
```cs
using PipServices3.Commons.Refer;
using PipServices3.Components.Build;


public class HelloFriendServiceFactory: Factory
{
    public HelloFriendServiceFactory(): base()
    {
        var HttpServiceDescriptor = new Descriptor("hello-friend", "service", "http", "*", "1.0");      // View
        var ControllerDescriptor = new Descriptor("hello-friend", "controller", "default", "*", "1.0"); // Controller
        var PersistenceDescriptor = new Descriptor("hello-friend", "persistence", "mysql", "*", "1.0"); // Persistence

        RegisterAsType(HttpServiceDescriptor, typeof(HelloFriendRestService));  // View
        RegisterAsType(ControllerDescriptor, typeof(HelloFriendController));    // Controller
        RegisterAsType(PersistenceDescriptor, typeof(HelloFriendPersistence));  // Persistence
    }
}


```
