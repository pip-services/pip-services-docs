
```cs
using System;

using PipServices3.Commons.Commands;
using PipServices3.Commons.Run;
using PipServices3.Commons.Validate;

public class FriendsCommandSet : CommandSet
{
    private HelloFriendController _controller;

    public FriendsCommandSet(HelloFriendController  controller)
    {
        _controller = controller;

        AddCommand(MakeGreeting());
    }

    private ICommand MakeGreeting()
    {
        return new Command("greeting", 
                new ObjectSchema().WithRequiredProperty("name", TypeCode.String), 
                async (string correlationgId, Parameters args) =>
                {
                    var name = args.GetAsString("name");
                    var res = _controller.Greeting(name);
                    return res;
                }
            );
    }
}

```
