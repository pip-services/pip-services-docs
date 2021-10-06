
```cs
class Worker1
{
    protected string defaultName;

    public Worker1(string name = null)
    {
        this.defaultName = name ?? "Default name1";
    }

    public void Do(LogLevel level, string message)
    {
        Console.WriteLine($"Write to {defaultName}.{level} message: {message}");
    }
}

class Worker2
{
    protected string defaultName;

    public Worker2(string name = null)
    {
        this.defaultName = name ?? "Default name2";
    }

    public void Do(LogLevel level, string message)
    {
        Console.WriteLine($"Write to {defaultName}.{level} message: {message}");
    }
}


```

