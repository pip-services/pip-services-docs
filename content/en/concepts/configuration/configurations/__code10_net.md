
```cs
using System;
using PipServices3.Commons.Config;

var additionalConfig1 = ConfigParams.FromTuples(
    "my_store1.user", "jdoe",
    "my_store1.password", "pass123",
    "my_store1.pin", "321"
);

var additionalConfig2 = ConfigParams.FromTuples(
    "my_store2.user", "David",
    "my_store2.password", "another_pass",
    "my_store2.pin", "0000"
);

var additionalConfig3 = ConfigParams.FromTuples(
    "param1", "value1"
);

var config = ConfigParams.MergeConfigs(additionalConfig1, additionalConfig2, additionalConfig3);    

Console.WriteLine(config);

```
