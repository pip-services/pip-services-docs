
```cs
using PipServices3.Commons.Data;

public interface IMyDataClient
{
    Task<DataPage<MyData>> GetMyDatasAsync(string correlationId, FilterParams filter, PagingParams paging);
    Task<MyData> GetMyDataByIdAsync(string correlationId, string id);
    Task<MyData> CreateMyDataAsync(string correlationId, MyData entity);
    Task<MyData> UpdateMyDataAsync(string correlationId, MyData entity);
    Task<MyData> DeleteMyDataAsync(string correlationId, string id);
}
```
