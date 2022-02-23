
```ts
import { 
    Command, CommandSet, ICommand, 
    ObjectSchema, Parameters, TypeCode 
} from "pip-services3-commons-nodex";


export class FriendsCommandSet extends CommandSet {
    private _controller: HelloFriendController;

    public constructor(controller: HelloFriendController) {
        super();
        this._controller = controller;
        
        this.addCommand(this.makeGreeting());
    }

    private makeGreeting(): ICommand {
        return new Command(
            'greeting',
            new ObjectSchema(true).withRequiredProperty('name', TypeCode.String),
            async (correlationId: string, args: Parameters) => {
                let name = args.getAsString("name");
                let res = this._controller.greeting(name);
                return res;
            }
        );
    }
}

```
