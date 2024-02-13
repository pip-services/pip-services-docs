
```cs
using PipServices3.Components.Lock;

public class MyComponent
{
    private ILock _lock;

    // ...
    public void ProcessMyObject(string correlationId, string objectId)
    {
        // Try to acquire lock for 10 secs
        if (!_lock.TryAcquireLock(correlationId, "mycomponent:" + objectId, 10000))
        {
            // Other instance already executing that transaction
            return;
        }

        ...
    }
}

```
