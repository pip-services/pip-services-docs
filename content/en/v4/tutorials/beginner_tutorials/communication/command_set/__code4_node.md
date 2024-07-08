
```ts
export class MyCommandSet extends CommandSet {
    public constructor() {
        super();
        this.addCommands([this.command2(), this.command3()]);
    }

    private command2(): ICommand {
        return new Command("command2",
            null,
            (correlationId: string, args: Parameters) => {
                console.log("command 2");
                return null;
            }
        );
    }

    private command3(): ICommand {
        return new Command("command3",
            null,
            (correlationId: string, args: Parameters) => {
                console.log("command 2");
                return null;
            }
        );
    }
}
```
