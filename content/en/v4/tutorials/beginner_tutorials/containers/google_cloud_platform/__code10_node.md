
```ts
export class MyCommandSet extends CommandSet {
    private _service: MyServcie;

    public constructor(service: MyServcie) {
        super();
        this._service = service;
        this.addCommand(this.makeGreeting());
    }

    private makeGreeting(): Command {
        return new Command(
            "greetings",
            new ObjectSchema(true).withRequiredProperty("name", TypeCode.String),
            async (ctx: Context, args: Parameters) => {
                let name = args.getAsString("name");
                return await this._service.greetings(name);
            }
        );
    }
}
```
