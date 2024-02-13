
```cs
using PipServices3.Commons.Refer;
using PipServices3.Commons.Config;

var correlationId = "example";

// create client
var grpcConfig = ConfigParams.FromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8090
);

var grpcClient = new MyCommandableGrpcClient();
grpcClient.Configure(grpcConfig);
grpcClient.SetReferences(new References());
await grpcClient.OpenAsync(correlationId);

// simple data
var data1 = new MyData("1", "0005", "any content 1");
var data2 = new MyData("2", "0010", "any content 2");

// using the client
var res = await grpcClient.CreateMyDataAsync(correlationId, data1);
Debug.Assert(res.Id == data1.Id);

res = await grpcClient.CreateMyDataAsync(correlationId, data2);
Debug.Assert(res.Id == data2.Id);

var resPage = await grpcClient.GetMyDatasAsync(correlationId, null, null);
Debug.Assert(resPage.Data.Count == 2);

res = await grpcClient.DeleteMyDataAsync(correlationId, data2.Id);
Debug.Assert(res.Id == data2.Id);

res = await grpcClient.GetMyDataByIdAsync(correlationId, data2.Id);
Debug.Assert(res == null);


```
