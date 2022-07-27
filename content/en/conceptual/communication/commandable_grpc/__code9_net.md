
```cs
using PipServices3.Grpc.Services;
using PipServices3.Commons.Refer;


public class MyDataCommandableGrpcService: CommandableGrpcService
{
    public MyDataCommandableGrpcService() : base("mydata")
    {
        this._dependencyResolver.Put("controller", new Descriptor("service-mydata", "controller", "*", "*", "*"));
    }
}
```
