
```ts
export class MyCommandSet extends CommandSet {
    private _controller: MyController;

    public constructor(controller: MyController) {
        super();
        this._controller = controller;
        this.addCommand(this.makeGreeting());
    }

    private makeGreeting(): Command {
        return new Command(
            "greetings",
            new ObjectSchema(true).withRequiredProperty("name", TypeCode.String),
            async (correlationId: string, args: Parameters) => {
                let name = args.getAsString("name");
                return await this._controller.greetings(name);
            }
        );
    }
}

```