
```dart
abstract class IMyDataClient {
    Future<DataPage<MyData>?> getMyDatas(String? correlationId, FilterParams? filter, PagingParams? paging);
    Future<MyData?> getMyDataById(String? correlationId, String? id);
    Future<MyData> createMyData(String? correlationId, MyData entity);
    Future<MyData> updateMyData(String? correlationId, MyData entity);
    Future<MyData> deleteMyData(String? correlationId, String id);
}
```
