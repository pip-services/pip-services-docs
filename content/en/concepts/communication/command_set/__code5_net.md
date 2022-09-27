
```cs
public class MyCommandSetB: CommandSet
{
    public MyCommandSetB() : base()
    {
        AddCommand(Command1B());
    }

    private ICommand Command1B()
    {
        return new Command("command1B",
            null,
            async (string correlationId, Parameters args) => {
                Console.WriteLine("command 1B");
                return null;
            }
        );
    }
}
    
public class MyCommandSet: CommandSet
{
    private CommandSet _commandSet = new MyCommandSetB();
    public MyCommandSet() : base() {
        AddCommandSet(_commandSet);
    }
}
```
