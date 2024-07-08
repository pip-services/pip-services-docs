
```ts
import { TypeCode } from "pip-services4-commons-node";
import { Parameters, IContext } from "pip-services4-components-node";
import { ObjectSchema } from "pip-services4-data-node";
import { CommandSet, ICommand, Command } from "pip-services4-rpc-node";

class FriendsCommandSet extends CommandSet {
    private _service: HelloFriendService;

    public constructor(service: HelloFriendService) {
        super();

        this._service = service;

        this.addCommand(this.makeGreeting());
    }

    private makeGreeting(): ICommand {
        return new Command('greeeting', 
            new ObjectSchema(true).withRequiredProperty('name', TypeCode.String), 
            async (ctx: IContext, args: Parameters) =>
            {
                let name = args.getAsString("name");
                let res = this._service.greeting(name);
                return res;
            }
        );
    }
}
```
