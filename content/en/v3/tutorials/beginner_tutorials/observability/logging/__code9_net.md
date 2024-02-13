
```cs
using PipServices3.Commons.Config;
using PipServices3.Components.Log;
using PipServices3.ElasticSearch.Log;

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

            logger.Level = LogLevel.Debug;

            logger.OpenAsync("123").Wait();

            logger.Info("123", "My message");
        }
    }
}



```
