
```cs
    public Task<List<MyData>> GetListByFilterAsync(string correlationId, FilterParams filterParams, SortParams sortParams = null)
    {
        return base.GetListByFilterAsync(correlationId, ComposeFilter(filterParams), ComposeSort(sortParams));
    }

```
