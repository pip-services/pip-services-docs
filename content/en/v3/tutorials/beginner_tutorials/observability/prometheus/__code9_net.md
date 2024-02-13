
```cs
namespace ExampleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var counters = new PrometheusCounters();
            counters.Configure(ConfigParams.FromTuples(
                "connection.protocol", "http",
                "connection.host", "localhost",
                "connection.port", 8080
            ));

            counters.OpenAsync(null).Wait();

            var mycomponent = new MyComponentA(counters);
        }
    }

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
}
```
