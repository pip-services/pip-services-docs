
```cs
using PipServices3.Commons.Config;

queue.Configure(ConfigParams.FromTuples(
    "exchange", "myqueue", // rabbitmq exchange type
    "queue", "myqueue", // queue name
    "options.auto_create", true, // autocreate queue
    "connection.host", "localhost",
    "connection.port", 5672
    // if need credentials
    //"credential.username", "user",
    //"credential.password", "pass123"
));
```
