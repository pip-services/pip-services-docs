
```ts
import { Context } from "pip-services4-components-node";
import { ILock } from "pip-services4-logic-node";

class MyComponent {
    private _lock: ILock;
  
    ...
    public ProcessMyObject(ctx: Context, objectId: string)
    {
        // Try to acquire lock for 10 secs
        if (!this._lock.tryAcquireLock(ctx, "mycomponent:" + objectId, 10000))
        {
            // Other instance already executing that transaction
            return;
        }

        ...
    }
  }
```
