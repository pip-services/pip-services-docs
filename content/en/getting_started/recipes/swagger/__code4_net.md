
```cs
using System;

using PipServices3.Commons.Commands;
using PipServices3.Commons.Validate;
using PipServices3.Commons.Run;

public class FriendsCommandSet: CommandSet
{
    private HelloFriendController _controller;

    public FriendsCommandSet(HelloFriendController controller) : base()
    {
        _controller = controller;

        AddCommand(MakeGreeting());
    }

    private ICommand MakeGreeting()
    {
        return new Command("greeting", 
                new ObjectSchema().WithRequiredProperty("name", TypeCode.String), 
                (string correlationId, Parameters args) =>
                {
                    var name = args.GetAsString("name");
                    var res = _controller.Greeting(name);
                    return res;
                }
            );
    }
}

```
