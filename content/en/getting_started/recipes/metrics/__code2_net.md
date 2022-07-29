
```cs
using System;
using System.Collections.Generic;
using System.Linq;
using PipServices3.Components.Count;

class Program
{
    static void Main(string[] args)
    {
        var countersCached = new MyCachedCounters();

        var mycomponentCached = new MyComponentA(countersCached);

        var countExec = 2;

        for (var i = 0; i < countExec; i++)
            mycomponentCached.MyMethod();

        var resultCached = countersCached.GetAll();

        Console.WriteLine("Metrics");

        foreach (var res in resultCached)
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

class MyCachedCounters : CachedCounters
{
    protected override void Save(IEnumerable<Counter> counters)
    {
        var countersList = counters.ToList();
        Console.WriteLine("Saving " + countersList[0].Name + " and " + countersList[1].Name);
    }
}
 
```
