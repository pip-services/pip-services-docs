
```cs
public class IdentifiableMongoDbPersistence<T, K> : MongoDbPersistence<T>, IWriter<T, K>, IGetter<T, K>, ISetter<T>
    where T : IIdentifiable<K>
    where K : class
{

    public virtual async Task<DataPage<object>> GetPageByFilterAndProjectionAsync(string correlationId, FilterDefinition<T> filterDefinition, PagingParams paging = null, SortDefinition<T>
    sortDefinition = null, ProjectionParams projection = null);

    public virtual async Task<List<T>> GetListByIdsAsync(string correlationId, K[] ids);

    public virtual async Task<T> GetOneByIdAsync(string correlationId, K id);

    public virtual async Task<object> GetOneByIdAsync(string correlationId, K id, ProjectionParams projection);

    public override async Task<T> CreateAsync(string correlationId, T item);

    public virtual async Task<T> SetAsync(string correlationId, T item);

    public virtual async Task<T> UpdateAsync(string correlationId, T item);

    public virtual async Task<T> ModifyAsync(string correlationId, FilterDefinition<T> filterDefinition, UpdateDefinition<T> updateDefinition);

    public virtual async Task<T> ModifyByIdAsync(string correlationId, K id, UpdateDefinition<T> updateDefinition);

    public virtual async Task<T> DeleteByIdAsync(string correlationId, K id);

    public virtual async Task DeleteByIdsAsync(string correlationId, K[] ids);

    #region Overridable Compose Methods
    protected virtual FilterDefinition<T> ComposeFilter(FilterParams filterParams);

    protected virtual UpdateDefinition<T> ComposeUpdate(AnyValueMap updateMap);

    protected virtual SortDefinition<T> ComposeSort(SortParams sortParams);

    protected virtual ProjectionDefinition<T> CreateProjectionDefinition(ProjectionParams projection, ProjectionDefinitionBuilder<T> projectionBuilder);
}



```

