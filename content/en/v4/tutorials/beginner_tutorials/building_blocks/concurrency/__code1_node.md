```ts
import { Context } from "pip-services4-components-node";
import { IStateStore } from "pip-services4-logic-node";

class MyComponent {
    private _store: IStateStore;

    ...

    public doSomething(ctx: Context, objectId: string) {
        // Get state from the store or create a new one if the state wasn't found
        let state: MyState = await this._store.load(ctx, "mycomponent:" + objectId);
        if (state != null) { state = new MyState(); }
        ...

        await this._store.save(ctx, "mycomponent:" + objectId, state);
    }
}

```
