
```cs
using PipServices3.Data.Persistence;
using System.Collections.Generic;

var persister = new JsonFilePersister<string>();
var myConfig = ConfigParams.FromTuples("path", "./data.json");
persister.Configure(myConfig);

```
