
```cs
using PipServices3.Container;
using PipServices3.Grpc.Build;
using PipServices3.Rpc.Build;
using PipServices3.Swagger.Build;


public class MyProcess : ProcessContainer
{
    public MyProcess() : base("mymicroservice", "Sample microservice container")
    {
        this._factories.Add(new MyComponentFactory());
        this._factories.Add(new DefaultRpcFactory());
        this._factories.Add(new DefaultSwaggerFactory());
        this._factories.Add(new DefaultGrpcFactory());
    }
}

```
