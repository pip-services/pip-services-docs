
```cs
public class MyCommandSet: CommandSet
{
    public MyCommandSet() : base() {
        AddCommands(new List<ICommand> { Command2(), Command3() });
    }

    private ICommand Command2()
    {
        return new Command("command2",
            null,
            async (string correlationId, Parameters args) => {
                Console.WriteLine("command 2");
                return null;
            }
        );
    }

    private ICommand Command3()
    {
        return new Command("command3",
            null,
            async (string correlationId, Parameters args) => {
                Console.WriteLine("command 3");
                return null;
            }
        );
    }
}

```
