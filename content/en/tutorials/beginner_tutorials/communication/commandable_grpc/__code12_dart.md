
```dart

class MyCommandableGrpcClient extends CommandableGrpcClient
    implements IMyDataClient {
  MyCommandableGrpcClient() : super('mydata');

  @override
  Future<DataPage<MyData>?> getMyDatas(
      String? correlationId, FilterParams? filter, PagingParams? paging) async {
    var response = await callCommand(
        'get_my_datas', correlationId, {'filter': filter, 'paging': paging});
    if (response == null) {
      return null;
    }
    return DataPage<MyData>.fromJson(response, (item) => MyData.fromJson(item));
  }

  @override
  Future<MyData> createMyData(String? correlationId, MyData entity) async {
    var response =
        await callCommand('create_my_data', correlationId, {'my_data': entity});
    return MyData.fromJson(response);
  }

  @override
  Future<MyData> deleteMyData(String? correlationId, String id) async {
    var response =
        await callCommand('delete_my_data', correlationId, {'my_data_id': id});
    return MyData.fromJson(response);
  }

  @override
  Future<MyData?> getMyDataById(String? correlationId, String? id) async {
    var response = await callCommand(
        'get_my_data_by_id', correlationId, {'my_data_id': id});

    if (response == null) {
      return null;
    }
    return MyData.fromJson(response);
  }

  @override
  Future<MyData> updateMyData(String? correlationId, MyData entity) async {
    var response =
        await callCommand('update_my_data', correlationId, {'my_data': entity});

    return MyData.fromJson(response);
  }
}

```
