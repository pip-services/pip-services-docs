
```cs
using PipServices3.Components.Lock;

public class MyComponent
{
    private ILock _lock;

    ...
    public void ProcessMyObject(string correlationId, string objectId)
    {
        // Acquire lock for 10 secs
        this._lock.AcquireLock(correlationId, "mycomponent:" + objectId, 10000, 10000);
        try
        {
            ...
        }
        finally
        {
            // Release lock
            this._lock.ReleaseLock(correlationId, "mycomponent:" + objectId);
        }
    }
}

```
