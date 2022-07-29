
```cs
using System;
using PipServices3.Components.Count;

class MyComponentA
{
    ICounters counters;
    bool _consoleLog = true;

    public MyComponentA(ICounters counters)
    {
        this.counters = counters;

        if (_consoleLog)
            Console.WriteLine("MyComponentA has been created.");
    }

    public void MyMethod()
    {
        this.counters.Increment("mycomponent.mymethod.calls", 1);
        var timing = this.counters.BeginTiming("mycomponent.mymethod.exec_time");

        try
        {
            if (this._consoleLog)
            {
                Console.WriteLine("Hola amigo");
                Console.WriteLine("Bonjour mon ami");
            }
        }
        finally
        {
            timing.EndTiming();
        }
    }
}
```
