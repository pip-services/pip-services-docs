
```ts
import { Context } from "pip-services4-components-node";
import { ILock } from "pip-services4-logic-node";

class MyComponent {
    private _lock: ILock;
  
    ...
    public processMyObject(ctx: Context, objectId: string) {
      // Acquire lock for 10 secs
      await this._lock.acquireLock(ctx, "mycomponent:" + objectId, 10000, 10000);
      try {
        ...
      } finally {
        // Release lock
        await this._lock.releaseLock(ctx, "mycomponent:" + objectId);
      }
    }
  }
```
