
```cs
using PipServices3.Components.Count;

public class MyComponentA
{
    public bool ConsoleLog = true;

    private CachedCounters counters;
    public MyComponentA(CachedCounters counter)
    {
        counters = counter;

        if (ConsoleLog)
            Console.WriteLine("MyComponentA has been created.");
    }

    public void MyMethod()
    {
        counters.Increment("mycomponent.mymethod.calls", 1);
        var timing = counters.BeginTiming("mycomponent.mymethod.exec_time");

        try
        {
            if (ConsoleLog)
            {
                Console.WriteLine("Hola amigo");
                Console.WriteLine("Bonjour mon ami");
            }
        } finally { 
            timing.EndTiming(); 
        }

        counters.Dump();
    }
}

```
