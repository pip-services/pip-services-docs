
```cs
public class MyCommandSet: CommandSet
{
    private MyController _controller;

    public MyCommandSet(MyController controller): base()
    {
        _controller = controller;
        AddCommand(MakeGreeting());
    }

    private Command MakeGreeting()
    {
        return new Command(
            "greetings", 
            new ObjectSchema().WithRequiredProperty("name", TypeCode.String),
            async (string correlationId, Parameters args) =>
            {
                var name = args.GetAsString("name");
                return await _controller.GreetingsAsync(name);
            }
        );
    }
}


```