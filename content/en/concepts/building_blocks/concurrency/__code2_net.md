
```cs
using PipServices3.Components.Cache;

public class MyComponent
{
    private ICache _cache;

    ...

    public async Task<MyObject> GetMyObjectById(string correlationId, string objectId)
    {
        var result = await this._cache.RetrieveAsync<MyObject>(correlationId, "mycomponent:" + objectId);
        if (result != null) { return result; }

        // Retrieve the object
        ...

        await this._cache.StoreAsync(correlationId, "mycomponent:" + objectId, result, 1000);
        return result;
    }
}

```
