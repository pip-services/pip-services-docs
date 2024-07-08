
```ts

export class MyCommandSetB extends CommandSet {
    public constructor() {
        super();
        this.addCommand(this.command1B());
    }

    private command1B(): ICommand {
        return new Command(
            "command1B",
            null, 
            async (correlationId: string, args: Parameters) => {
                console.log("command 1B");
            }
        );
    }
}
    
export class MyCommandSet extends CommandSet {
    private _commandSet = new MyCommandSetB();

    public constructor() {
        super();
        this.addCommandSet(this._commandSet);
    }
}
```
