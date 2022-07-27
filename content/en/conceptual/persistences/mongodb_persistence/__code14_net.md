
```cs
    public Task<DataPage<MyData>> GetPageByFilterAsync(string correlationId, FilterParams filterParams, PagingParams paging = null,     SortParams sortParams = null)
    {
        return base.GetPageByFilterAsync(correlationId, ComposeFilter(filterParams), paging, ComposeSort(sortParams));
    }
```
