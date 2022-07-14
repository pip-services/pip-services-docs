
```dart

void main() async {
  var correlationId = 'example';

  // create client
  var grpcConfig = ConfigParams.fromTuples([
    'connection.protocol',
    'http',
    'connection.host',
    'localhost',
    'connection.port',
    8090
  ]);

  var grpcClient = MyCommandableGrpcClient();
  grpcClient.configure(grpcConfig);
  grpcClient.setReferences(References());
  await grpcClient.open(correlationId);

  // simple data
  var data1 = MyData.from('1', '0005', 'any content 1');
  var data2 = MyData.from('2', '0010', 'any content 2');

  // using the client
  MyData? res = await grpcClient.createMyData(correlationId, data1);
  assert(res.id == data1.id);

  res = await grpcClient.createMyData(correlationId, data2);
  assert(res.id == data2.id);

  var resPage = await grpcClient.getMyDatas(correlationId, null, null);
  assert(resPage?.data.length == 2);

  res = await grpcClient.deleteMyData(correlationId, data2.id!);
  assert(res.id == data2.id);

  res = await grpcClient.getMyDataById(correlationId, data2.id);
  assert(res == null);
}

```
