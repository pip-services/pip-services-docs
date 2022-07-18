
```cs
using PipServices3.Commons.Data;

public interface IMyDataController
{
    Task<DataPage<MyData>> GetPageByFilterAsync(string correlationId, FilterParams filter, PagingParams paging);
    Task<MyData> GetOneByIdAsync(string correlationId, string id);
    Task<MyData> CreateAsync(string correlationId, MyData entity);
    Task<MyData> UpdateAsync(string correlationId, MyData entity);
    Task<MyData> DeleteByIdAsync(string correlationId, string id);
}

```
