
```cs
public class MyController: IReferenceable, ICommandable
{
    private CommandSet commandSet;

    public void SetReferences(IReferences references)
    {
    }

    public CommandSet GetCommandSet()
    {
        if (commandSet == null)
            commandSet = new MyCommandSet(this);

        return commandSet;
    }

    public async Task<string> GreetingsAsync(string name)
    {
        return "Hello, " + name + " !";
    }
}

```