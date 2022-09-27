
```cs
public class MyComponentA: IReferenceable
{
    public bool ConsoleLog = true; // console log flag

    private CachedCounters counters;
    public MyComponentA()
    {
        if (ConsoleLog)
            Console.WriteLine("MyComponentA has been created.");
    }

    public void SetReferences(IReferences references)
    {
        counters = references.GetOneRequired<CachedCounters>(
            new Descriptor("*", "counters", "*", "*", "*")
        );
    }
}
```
