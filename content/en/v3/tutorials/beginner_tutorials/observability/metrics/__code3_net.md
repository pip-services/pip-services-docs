
```cs
using System;
using System.Collections.Generic;
using System.Linq;
using PipServices3.Commons.Refer;
using PipServices3.Components.Count;
using PipServices3.Components.Log;

class Program
{
    static void Main(string[] args)
    {
        var counters = new LogCounters();
        counters.SetReferences(References.FromTuples(
            new Descriptor("pip-services", "logger", "console", "default", "1.0"), new ConsoleLogger())
        );

        var mycomponentLog = new MyComponent(counters);

        var countExec = 2;

        for (var i = 0; i < countExec; i++)
        {
            mycomponentLog.MyMethod();
        }

        var resultLog = counters.GetAll();

        Console.WriteLine("Metrics");

        foreach (var res in resultLog)
        {
            Console.WriteLine("Count: " + res.Count);
            Console.WriteLine("Min: " + res.Min);
            Console.WriteLine("Max: " + res.Max);
            Console.WriteLine("Average: " + res.Average);
            Console.WriteLine("Time: " + res.Time.ToString());
            Console.WriteLine("Name: " + res.Name);
            Console.WriteLine("Type: " + res.Type);
            Console.WriteLine("-----------------");
        }
    }
}
```
