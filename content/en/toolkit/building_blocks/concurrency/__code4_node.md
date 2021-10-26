
```ts
class MyComponent {
  private _lock: ILock;

  …
  public processMyObject(correlationId: string, objectId: string) {
    // Try to acquire lock for 10 secs
    If (!await this._lock.tryAcquireLock(correlationId, “mycomponent:” + objectId, 10000)) {
        // Other instance already executing that transaction
        return;
    }

   ...
  }
```
