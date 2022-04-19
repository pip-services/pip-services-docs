
```cs
using System.Threading.Tasks;
using PipServices3.Commons.Config;
using PipServices3.Commons.Run;


    public class MyComponentA: IConfigurable, IOpenable
    {
        private bool consoleLog = true;

        protected DataDogCounters counters;

        public MyComponentA(DataDogCounters counters)
        {
            this.counters = counters;
            if (consoleLog)
                Console.WriteLine("MyComponentA has been created.");
        }

        public void Configure(ConfigParams config)
        {
            counters.Configure(config);
        }

        public DataDogCounters GetCounters()
        {
            return counters;
        }

        public bool IsOpen()
        {
            return counters.IsOpen();
        }

        public async Task OpenAsync(string correlationId)
        {
            await counters.OpenAsync(correlationId);
        }

        public async Task CloseAsync(string correlationId)
        {
            await counters.CloseAsync(correlationId);
        }

        public void MyMethod()
        {
            counters.Increment("mycomponent.mymethod.calls", 1);
            var timing = counters.BeginTiming("mycomponent.mymethod.exec_time");

            try
            {
                if (consoleLog)
                {
                    Console.WriteLine("Hola amigo");
                    Console.WriteLine("Hola amigoBonjour mon ami");
                }
            } finally
            {
                timing.EndTiming();
            }

            counters.Dump();
        }
    }

```
