
```cs
public interface IMyDataPersistence
{
    Task<MyData> SetAsync(string correlationId, MyData item);

    Task<MyData> CreateAsync(string correlationId, MyData item);

    Task<DataPage<MyData>> GetPageByFilterAsync(string correlationId, FilterParams filter, PagingParams paging = null, SortParams sort = null);

    Task<long> GetCountByFilterAsync(string correlationId, FilterParams filter);

    Task<List<MyData>> GetListByFilterAsync(string correlationId, FilterParams filter);

    Task<MyData> GetOneByIdAsync(string correlationId, string id);

    Task<List<MyData>> GetListByIdsAsync(string correlationId, string[] ids);

    Task<MyData> UpdateAsync(string correlationId, MyData item);

    Task<MyData> UpdatePartially(string correlationId, string id, AnyValueMap data);

    Task<MyData> DeleteByIdAsync(string correlationId, string id);

    Task DeleteByIdsAsync(string correlationId, string[] ids);

    Task DeleteByFilterAsync(string correlationId, FilterParams filter);
}
```
