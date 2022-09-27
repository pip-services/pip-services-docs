
```ts
import { ILock } from "pip-services3-components-nodex";

class MyComponent {
  private _lock: ILock;

  ...
  public processMyObject(correlationId: string, objectId: string) {
    // Try to acquire lock for 10 secs
    if(!await this._lock.tryAcquireLock(correlationId, "mycomponent:" + objectId, 10000)) {
      // Other instance already executing that transaction
      return;
    }

  ...
  }
}
```
