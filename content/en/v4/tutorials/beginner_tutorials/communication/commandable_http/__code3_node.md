
```ts
export class FriendCommandableHttpController extends CommandableHttpController {
    public constructor() {
        super("commandable_hello_friend");

        this._dependencyResolver.put('service', new Descriptor("hello-friend", "service", "*", "*", "*"));
    }
}
```
