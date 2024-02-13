
```cs
using System;
using System.Collections.Generic;
using System.Linq;
using PipServices3.Components.Count;

namespace ExampleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var countersNull = new NullCounters();

            var mycomponentNull = new MyComponent(countersNull);

            var countExec = 2;

            for (var i = 0; i < countExec; i++)
                mycomponentNull.MyMethod();
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

    class MyComponent
    {
        ICounters counters;
        bool _consoleLog = true;

        public MyComponent(ICounters counters)
        {
            this.counters = counters;

            if (_consoleLog)
                Console.WriteLine("MyComponent has been created.");
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
}
```
