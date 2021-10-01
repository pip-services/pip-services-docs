
```cs
interface Worker
{
    public void Do(LogLevel level, string message);
}

class Worker1: Worker
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

class Worker2: Worker
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



class SimpleController : IReferenceable, IUnreferenceable
{
    protected Worker worker;

    public void SetReferences(IReferences references)
    {
        worker = references.GetOneRequired<Worker>(111);
    }

    public void UnsetReferences()
    {
        worker = null;
    }

    public void Greeting(string name)
    {
        worker.Do(LogLevel.Info, "Hello, " + (name) + "!");
    }
}


```

