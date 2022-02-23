
```ts
import { Factory } from "pip-services3-components-nodex";
import { Descriptor } from "pip-services3-commons-nodex";


export class HelloFriendServiceFactory extends Factory {
    public constructor() {
        super();
        var CommandableHttpServiceDescriptor = new Descriptor("hello-friend", "service", "commandable-http", "*", "1.0"); // View 
        var ControllerDescriptor = new Descriptor("hello-friend", "controller", "default", "*", "1.0"); // Controller

        this.registerAsType(CommandableHttpServiceDescriptor, FriendCommandableHttpService);
        this.registerAsType(ControllerDescriptor, HelloFriendController);
    }
}

```
