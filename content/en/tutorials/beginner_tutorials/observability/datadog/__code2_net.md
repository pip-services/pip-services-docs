
```cs
    public class MyComponentA
    {
        private bool consoleLog = true;

        protected DataDogCounters counters;

        public MyComponentA(DataDogCounters counters)
        {
            this.counters = counters;
            if (consoleLog)
                Console.WriteLine("MyComponentA has been created.");
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
