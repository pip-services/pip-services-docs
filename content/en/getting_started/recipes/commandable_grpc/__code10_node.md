
```cs
using PipServices3.Container;
using PipServices3.Grpc.Build;

public class MyDataProcess: ProcessContainer
{
    public MyDataProcess() : base("my_data", "simple my data microservice")
    {
        _factories.Add(new DefaultMyDataFactory());
        _factories.Add(new DefaultGrpcFactory());
    }
}
```
