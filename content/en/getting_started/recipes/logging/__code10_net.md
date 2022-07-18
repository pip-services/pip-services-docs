
```cs
using PipServices3.Aws.Log;
using PipServices3.Commons.Config;
using PipServices3.Components.Log;

namespace ExampleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var logger = new CloudWatchLogger();

            logger.Configure(ConfigParams.FromTuples(
                "stream", "mystream",
                "group", "mygroup",
                "connection.region", "us-east-1",
                "connection.access_id", "XXXXXXXXXXX",
                "connection.access_key", "XXXXXXXXXXX"
            ));

            logger.Level = LogLevel.Debug;
            
            logger.OpenAsync("123").Wait();

            logger.Info("123", "My message");
        }
    }
}


```
