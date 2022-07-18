
```cs
// Pre-requisites
using System;
using System.Threading.Tasks;

using PipServices3.Commons.Config;
using PipServices3.Grpc.Clients;

// gRPC client
public class MyGrpcClient: GrpcClient
{
    public MyGrpcClient(): base("Summator") { }

    public async Task<float> GetData(string correlationId, float value1, float value2)
    {
        var number = new Number1() { Value1=value1, Value2 = value2};
        var result = await CallAsync<Number1, Number2>("sum", number);
        return result.Value;
    }
}

    
var client = new MyGrpcClient();
client.Configure(ConfigParams.FromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 50055
));

client.SetReferences(new References());

await client.OpenAsync(null);

// Function call and result
var result = await client.GetData(null, 3, 5);  // Returns 8
```
