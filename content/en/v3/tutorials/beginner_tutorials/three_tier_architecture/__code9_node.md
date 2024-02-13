
```ts
import { Descriptor } from "pip-services3-commons-nodex";
import { Factory } from "pip-services3-components-nodex";


export class HelloFriendServiceFactory extends Factory {
    public constructor() {
        super();
        let HttpServiceDescriptor = new Descriptor("hello-friend", "service", "http", "*", "1.0");      // View
        let ControllerDescriptor = new Descriptor("hello-friend", "controller", "default", "*", "1.0"); // Controller
        let PersistenceDescriptor = new Descriptor("hello-friend", "persistence", "mysql", "*", "1.0"); // Persistence

        this.registerAsType(HttpServiceDescriptor, HelloFriendRestService); // View
        this.registerAsType(ControllerDescriptor,  HelloFriendController);  // Controller
        this.registerAsType(PersistenceDescriptor, HelloFriendPersistence); // Persistence
    }
}


```
