
```cs
    public Task<long> GetCountByFilterAsync(string correlationId, FilterParams filterParams)
    {
        return base.GetCountByFilterAsync(correlationId, ComposeSort(sortParams));
    }

```
