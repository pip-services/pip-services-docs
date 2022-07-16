
```cs
using PipServices3.Commons.Config;
using PipServices3.Components.Lock;
using PipServices3.Components.Cache;
using PipServices3.Commons.Refer;

class MyComponent: IReferenceable
{
    private ICache _cache;
    private MemoryLock _lock;

    public void SetReferences(IReferences references)
    {
        _cache = references.GetOneRequired<ICache>(new Descriptor("*", "cache", "*", "*", "1.0"));
        _lock = references.GetOneRequired<MemoryLock>(new Descriptor("*", "lock", "*", "*", "1.0"));
    }


    public async Task StoreResultAsync(string correlationId, string param1) 
    {
        // Lock
        _lock.AcquireLock(correlationId, "mykey", 1000, 1000);

        var config = ConfigParams.FromTuples("retry_timeout", 200);
        this._lock.Configure(config);

        // Do processing
        // ...
        Console.WriteLine("The stored value is " + param1);

        // Store result to cache async
        await _cache.StoreAsync(correlationId, "mykey", param1, 3600000);

        // Release lock async
        _lock.ReleaseLock(correlationId, "mykey");
    }

    public async Task<string> ObtainResultAsync(string correlationId)
    {
        // Lock..
        this._lock.AcquireLock(correlationId, "mykey", 1000, 1000);

        // Do processing
        // ...
        var result = await this._cache.RetrieveAsync<string>(correlationId, "mykey");

        // Release lock async
        this._lock.ReleaseLock(correlationId, "mykey");

        return result;
    }
}

    
    
// Use the component
var my_component = new MyComponent();
my_component.SetReferences(References.FromTuples(
    new Descriptor("pip-services", "cache", "memory", "default", "1.0"), new MemoryCache(),
    new Descriptor("pip-services", "lock", "memory", "default", "1.0"), new MemoryLock()
));

await my_component.StoreResultAsync(null, "param1");
var result = my_component.ObtainResultAsync(null);

Console.WriteLine("The retrieved value is " + result);
```
