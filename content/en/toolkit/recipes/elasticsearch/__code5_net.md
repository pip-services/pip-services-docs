
```cs
using System;
using PipServices3.Commons.Config;
using PipServices3.ElasticSearch.Log;
using PipServices3.Components.Log;

namespace ExampleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var logger = new ElasticSearchLogger();

            logger.Configure(ConfigParams.FromTuples(
                "connection.protocol", "http",
                "connection.host", "localhost",
                "connection.port", 9200
            ));

            logger.OpenAsync("123").Wait();

            var mycomponent = new MyComponentA(logger);
            for (var i = 0; i < 10; i++)
                mycomponent.myMethod();
        }
    }

    class MyComponentA
    {
        private ILogger _logger;
        private bool _elasticsearch_log = true;

        public MyComponentA(ElasticSearchLogger logger)
        {
            this._logger = logger;

            if (this._elasticsearch_log)
                this._logger.Info("123", "MyComponentA has been created.");
        }

        public void myMethod()
        {
            try
            {
                if (this._elasticsearch_log)
                {
                    Console.WriteLine("Hola amigo");
                    Console.WriteLine("Bonjour mon ami");
                }
                this._logger.Info("123", "Greetings created.");
        }
            finally
            {
                this._logger.Info("123", "Finally reached.");
          }
        }
    }

}
```
