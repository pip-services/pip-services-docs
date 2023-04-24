
```cs
using PipServices3.Commons.Config;

 var logger = new DataDogLogger();
logger.Configure(ConfigParams.FromTuples(
    "credential.access_key", "e1be2e70036b8f05f2777f5f038fc222"
));

logger.OpenAsync(null).Wait();
```
