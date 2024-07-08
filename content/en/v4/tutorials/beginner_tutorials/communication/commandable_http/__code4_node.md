
```ts
export class HelloFriendService implements IConfigurable, ICommand {

    private _defaultName: string = "World";
    private _commandSet: FriendsCommandSet;

    public constructor() {
        this._defaultName = "Pip User";
    }
    
    public configure(config: ConfigParams): void {
        this._defaultName = config.getAsStringWithDefault('default_name', this._defaultName);
    }
    
    public getCommandSet(): CommandSet {
        if (this._commandSet == null) {
            this._commandSet = new FriendsCommandSet(this);
        }

        return this._commandSet;
    }

    public greeting(name: string): string {
        return `Hello, ${name ?? this._defaultName}`;
    }
}
```
