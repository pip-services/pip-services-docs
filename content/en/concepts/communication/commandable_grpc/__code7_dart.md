
```dart

abstract class IMyDataController {
  Future<DataPage<MyData>> GetPageByFilterAsync(
      String? correlationId, FilterParams filter, PagingParams paging);
  Future<MyData?> GetOneByIdAsync(String? correlationId, String id);
  Future<MyData> CreateAsync(String? correlationId, MyData entity);
  Future<MyData?> UpdateAsync(String? correlationId, MyData entity);
  Future<MyData?> DeleteByIdAsync(String? correlationId, String id);
}

```
