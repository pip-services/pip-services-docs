
```ts
export class MyService implements IReferenceable, ICommandable {
    private commandSet: CommandSet;

    public setReferences(references: IReferences): void {
    }

    public getCommandSet(): CommandSet {
        if (this.commandSet == null) {
            this.commandSet = new MyCommandSet(this);
        }

        return this.commandSet;
    }

    public async greetings(name: string): Promise<string> {
        return "Hello, " + name + " !";
    }
}
```
