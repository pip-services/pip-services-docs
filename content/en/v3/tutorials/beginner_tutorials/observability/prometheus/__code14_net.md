
```cs
using System;

using PipServices3.Commons.Config;
using PipServices3.Commons.Refer;
using PipServices3.Components.Count;
using PipServices3.Components.Info;
using PipServices3.Prometheus.Count;
using PipServices3.Prometheus.Services;


namespace ExampleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var mycomponent = new MyComponentA();

            // Create an instance of PrometheusCounters and configure it
            var counters = new PrometheusCounters();
            counters.Configure(ConfigParams.FromTuples(
                "connection.protocol", "http",
                "connection.host", "localhost",
                "connection.port", 8080
            ));

            // Create an instance of PrometheusMetricsService and configure it
            var service = new PrometheusMetricsService();
            service.Configure(ConfigParams.FromTuples(
                "connection.protocol", "http",
                "connection.host", "localhost",
                "connection.port", 8080
            ));

            // Create the references
            var context_info = new ContextInfo();
            context_info.Name = "Test";
            context_info.Description = "This is a test container";

            var references = References.FromTuples(
                new Descriptor("pip-services", "context-info", "default", "default", "1.0"), context_info,
                new Descriptor("pip-services", "counters", "prometheus", "default", "1.0"), counters,
                new Descriptor("pip-services", "metrics-service", "prometheus", "default", "1.0"), service
            );

            service.SetReferences(references);
            counters.SetReferences(references);
            mycomponent.SetReferences(references);

            // Connect the service and counters objects
            service.OpenAsync(null).Wait();
            counters.OpenAsync(null).Wait();

            //  Run "mymethod"
            var countExec = 2;

            for (int i = 0; i < countExec; i++)
                mycomponent.MyMethod();

            // Get the counters
            var result = counters.GetAll();

            
            // close counter, for closing Http client for prometheus
            counters.CloseAsync("123").Wait();
            // close service for closing Http server
            service.CloseAsync(null).Wait();
        }
    }

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

        public void MyMethod()
        {
            // Count the number of calls to this method
            counters.Increment("mycomponent.mymethod.calls", 1);

            // Measure execution time
            var timing = counters.BeginTiming("mycomponent.mymethod.exec_time");

            // Task for this method: print greetings in two languages.
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
            // Save the values of counters
            counters.Dump();
        }
    }
}
```
