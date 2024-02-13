
```ts
import { Command, CommandSet, ICommand, Parameters } from "pip-services3-commons-nodex";


export class MyCommandSet extends CommandSet {
    public constructor() {
        super();
        this.addCommand(this.command1());
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
}
```
