
```ts
export class MyCommandSet extends CommandSet {
    private _servcie: MyService;

    public constructor(controller: MyService) {
        super();
        this._servcie = controller;
        this.addCommand(this.makeGreeting());
    }

    private makeGreeting(): Command {
        return new Command(
            "greetings",
            new ObjectSchema(true).withRequiredProperty("name", TypeCode.String),
            async (ctx: Context, args: Parameters) => {
                let name = args.getAsString("name");
                return await this._servcie.greetings(name);
            }
        );
    }
}
```
