
```cs
using System;
using System.Linq;
using System.Collections.Generic;

using PipServices3.Commons.Config;
using PipServices3.Commons.Refer;
using PipServices3.Components.Count;
using PipServices3.Components.Log;
using PipServices3.Prometheus.Count;

namespace ExampleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var countersLog = new LogCounters();

            var countersProm = new PrometheusCounters();
            countersProm.Configure(ConfigParams.FromTuples(
                "connection.protocol", "http",
                "connection.host", "localhost",
                "connection.port", 8080
            ));

            var myComponent = new MyComponent();

            myComponent.SetReferences(References.FromTuples(
                new Descriptor("pip-services", "counters", "logger", "default3", "1.0"), countersLog,
                new Descriptor("pip-services", "counters", "prometheus", "default4", "1.0"), countersProm,
                new Descriptor("pip-services", "logger", "cached", "default2", "1.0"), new MyCachedLogger()
            ));

            countersProm.OpenAsync("123").Wait();

            var countExec = 2;

            for (var i = 0; i < countExec; i++)
                myComponent.MyMethod();

            var results = countersLog.GetAll();

            Console.WriteLine("Metrics to logger");
            PrintResults(results);

            results = countersProm.GetAll();

            Console.WriteLine("Metrics to Prometheus");
            PrintResults(results);
        }

        static void PrintResults(IEnumerable<Counter> results)
        {
            foreach (var result in results)
            {
                Console.WriteLine("Count: " + result.Count);
                Console.WriteLine("Min: " + result.Min);
                Console.WriteLine("Max: " + result.Max);
                Console.WriteLine("Average: " + result.Average);
                Console.WriteLine("Time: " + result.Time);
                Console.WriteLine("Name: " + result.Name);
                Console.WriteLine("Type: " + result.Type);
                Console.WriteLine("-----------------");
            }
        }
    }

    class MyComponent: IReferenceable
    {
        CompositeCounters counters = new CompositeCounters();
        bool _consoleLog = true;

        public MyComponent()
        {
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

        public void SetReferences(IReferences references)
        {
            counters.SetReferences(references);
        }
    }

    class MyCachedLogger : CachedLogger
    {
        protected override void Save(List<LogMessage> messages)
        {
            Console.WriteLine("Saving somewhere");
        }
    }
}
```
