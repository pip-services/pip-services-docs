
```ts
import { ICache } from "pip-services3-components-nodex";

class MyComponent {
  private _cache: ICache;

  ...

  public getMyObjectById(correlationId: string, objectId: string): Promise<MyObject> {
    let result = await this._cache.retrieve(correlationId, "mycomponent:" + objectId);
    if (result != null) { return result; }

    // Retrieve the object
    ...

    await this._cache.store(correlationId, "mycomponent:" + objectId, results, 1000);
    return result;
  }
}
```
