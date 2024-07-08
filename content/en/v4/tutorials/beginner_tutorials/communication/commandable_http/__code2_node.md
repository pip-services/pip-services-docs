
```ts
export class FriendsCommandSet extends CommandSet {
    private _service: HelloFriendService;

    public constructor(controller: HelloFriendService) {
        super();
        this._service = controller;
        
        this.addCommand(this.makeGreeting());
    }

    private makeGreeting(): ICommand {
        return new Command(
            'greeting',
            new ObjectSchema(true).withRequiredProperty('name', TypeCode.String),
            async (ctx: IContext, args: Parameters) => {
                let name = args.getAsString("name");
                let res = this._service.greeting(name);
                return res;
            }
        );
    }
}
```
