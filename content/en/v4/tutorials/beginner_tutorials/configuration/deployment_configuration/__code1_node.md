
```ts
import { FilterParams } from "pip-services4-data-node";

export interface IMyDataPersistence {
    getOneRandom(ctx: Context, filter: FilterParams): Promise<MyFriend>;
    create(ctx: Context, item: MyFriend): Promise<MyFriend>;
}
```
