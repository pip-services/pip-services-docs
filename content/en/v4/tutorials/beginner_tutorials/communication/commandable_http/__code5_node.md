
```ts
export class HelloFriendServiceFactory extends Factory {
    public constructor() {
        super();
        var CommandableHttpControllerDescriptor = new Descriptor("hello-friend", "controller", "commandable-http", "*", "1.0"); // View 
        var ServiceDescriptor = new Descriptor("hello-friend", "service", "default", "*", "1.0"); // Controller

        this.registerAsType(CommandableHttpControllerDescriptor, FriendCommandableHttpController);
        this.registerAsType(ServiceDescriptor, HelloFriendService);
    }
}
```
