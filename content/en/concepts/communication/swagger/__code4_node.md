
```ts
import { 
    Command, CommandSet, ICommand, 
    ObjectSchema, TypeCode, Parameters 
} from 'pip-services3-commons-nodex';

class FriendsCommandSet extends CommandSet {
    private _controller: HelloFriendController;

    public constructor(controller: HelloFriendController) {
        super();

        this._controller = controller;

        this.addCommand(this.makeGreeting());
    }

    private makeGreeting(): ICommand {
        return new Command('greeeting', 
            new ObjectSchema(true).withRequiredProperty('name', TypeCode.String), 
            async (correlationId: string, args: Parameters) =>
            {
                let name = args.getAsString("name");
                let res = this._controller.greeting(name);
                return res;
            }
        );
    }
}

```
