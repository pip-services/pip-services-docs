
```cs
// Pre-requisites
using Grpc.Core;
using System;
using System.Threading.Tasks;

using PipServices3.Commons.Config;
using PipServices3.Grpc.Services;

using Calculations;

// gRPC server
public class MyGrpcService : GrpcService
{
    public MyGrpcService() : base("my_data_v1") { }

    private async Task<Number2> Sum(Number1 number, ServerCallContext context)
    {
        var res = Calculations.Summator.Sum(number.Value1, number.Value2);
        return new Number2() { Value = res };
    }

    protected override void OnRegister()
    {
        RegisterMethod<Number1, Number2>("sum", Sum);
    }
}
    
var service = new MyGrpcService();
service.Configure(ConfigParams.FromTuples(
    "connection.host", "localhost",
    "connection.port", 50055
));

service.SetReferences(new References());

await service.OpenAsync(null);
```
