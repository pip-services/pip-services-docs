```ts
import { Context } from "pip-services4-components-node";
import { ICache } from "pip-services4-logic-node";

class MyComponent {
    private _cache: ICache;
  
    ...
  
    public getMyObjectById(ctx: Context, objectId: string): Promise<MyObject> {
      let result = await this._cache.retrieve(ctx, "mycomponent:" + objectId);
      if (result != null) { return result; }
  
      // Retrieve the object
      ...
  
      await this._cache.store(ctx, "mycomponent:" + objectId, result, 1000);
      return result;
    }
  }
```
