
```ts
import { Descriptor, Factory } from "pip-services4-components-node";

class HelloFriendServiceFactory extends Factory {
    public constructor()
    {
        super();
        
        let HttpControllerDescriptor = new Descriptor("hello-friend", "controller", "http", "*", "1.0");                          // Controller 1
        let CommandableHttpControllerDescriptor1 = new Descriptor("hello-friend", "controller", "commandable-http1", "*", "1.0"); // Controller 2
        let CommandableHttpontrollerDescriptor2 = new Descriptor("hello-friend", "controller", "commandable-http2", "*", "1.0"); // Controller 2
        let ServiceDescriptor = new Descriptor("hello-friend", "service", "default", "*", "1.0");                     // Service

        this.registerAsType(HttpControllerDescriptor, HelloFriendRestController);                      // View 1
        this.registerAsType(CommandableHttpControllerDescriptor1, FriendCommandableHttpController1);   // View 2
        this.registerAsType(CommandableHttpontrollerDescriptor2, FriendCommandableHttpController2);   // View 3
        this.registerAsType(ServiceDescriptor, HelloFriendService);                        // Service
    }
}
```
