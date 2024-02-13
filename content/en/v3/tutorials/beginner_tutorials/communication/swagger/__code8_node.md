
```ts
import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';


class HelloFriendServiceFactory extends Factory {
    public constructor()
    {
        super();
        
        let HttpServiceDescriptor = new Descriptor("hello-friend", "service", "http", "*", "1.0");                          // View 1
        let CommandableHttpServiceDescriptor1 = new Descriptor("hello-friend", "service", "commandable-http1", "*", "1.0"); // View 2
        let CommandableHttpServiceDescriptor2 = new Descriptor("hello-friend", "service", "commandable-http2", "*", "1.0"); // View 2
        let ControllerDescriptor = new Descriptor("hello-friend", "controller", "default", "*", "1.0");                     // Controller

        this.registerAsType(HttpServiceDescriptor, HelloFriendRestService);                      // View 1
        this.registerAsType(CommandableHttpServiceDescriptor1, FriendCommandableHttpService1);   // View 2
        this.registerAsType(CommandableHttpServiceDescriptor2, FriendCommandableHttpService2);   // View 3
        this.registerAsType(ControllerDescriptor, HelloFriendController);                        // Controller
    }
}
    
```
