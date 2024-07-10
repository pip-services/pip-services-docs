
```ts
export class HelloFriendProcess extends ProcessContainer {
    public constructor() {
        super("hello-friend", "HelloFriend microservice");
        this._configPath = "./config.yaml"
        this._factories.add(new HelloFriendServiceFactory());
        this._factories.add(new DefaultHttpFactory());
    }
}
```
