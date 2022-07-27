
```cs
public class MyCommandSet: CommandSet
{
    public MyCommandSet() : base() {
        AddCommand(Command1());
    }

    private ICommand Command1()
    {
        return new Command("command1", 
            null, 
            async (string correlationId, Parameters args) => { 
                Console.WriteLine("command 1"); 
                return null; 
            }
        );
    }
}
```
