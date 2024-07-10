
```ts
export class HelloFriendServiceFactory extends Factory {
    public constructor() {
        super();
        let HttpControllerDescriptor = new Descriptor("hello-friend", "controller", "http", "*", "1.0");      // Controller
        let ServiceDescriptor = new Descriptor("hello-friend", "service", "default", "*", "1.0"); // Service
        let PersistenceDescriptor = new Descriptor("hello-friend", "persistence", "mysql", "*", "1.0"); // Persistence

        this.registerAsType(HttpControllerDescriptor, HelloFriendRestController); // Controller
        this.registerAsType(ServiceDescriptor,  HelloFriendService);  // service
        this.registerAsType(PersistenceDescriptor, HelloFriendPersistence); // Persistence
    }
}
```
