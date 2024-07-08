
```ts
import { Parameters } from "pip-services4-components-node";
import { CommandSet, Command, ICommand } from "pip-services4-rpc-node";

export async function main() { 
    var mySet = new MyCommandSet();

    await mySet.execute(null, "command1", null);
    await mySet.execute(null, "command2", null);
    await mySet.execute(null, "command3", null);
    await mySet.execute(null, "command1B", null);
}


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
        this.addCommand(this.command1());
        this.addCommands([this.command2(), this.command3()]);
    }

    private command1(): ICommand {
        return new Command("command1",
                null,
                (correlationId: string, args: Parameters) => {
                console.log("command 1");
                return null;
            }
        );
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
