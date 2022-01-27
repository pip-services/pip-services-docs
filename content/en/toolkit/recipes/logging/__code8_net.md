
```cs
using PipServices3.Commons.Config;
using PipServices3.Components.Log;
using PipServices3.DataDog.Log;

namespace ExampleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var logger = new DataDogLogger();

            logger.Configure(ConfigParams.FromTuples(
                "credential.access_key", "827349874395872349875493"
            ));

            logger.Level = LogLevel.Debug;

            logger.OpenAsync("123").Wait();

            logger.Info("123", "My message");
        }
    }
}


```
