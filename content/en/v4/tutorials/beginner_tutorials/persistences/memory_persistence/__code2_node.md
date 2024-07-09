
```ts
import { IdentifiableMemoryPersistence } from "pip-services4-persistence-node";
import { FilterParams, PagingParams } from "pip-services4-data-node";
import { Context } from "pip-services4-components-node";

export class MyMemoryPersistence
    extends IdentifiableMemoryPersistence<Dummy, string> {


    public constructor() {
        super();
    }

    private composeFilter(filter: FilterParams): (item: Dummy) => boolean {
        filter = filter != null ? filter : new FilterParams();
        let id = filter.getAsNullableString("id");
        let tempIds = filter.getAsNullableString("ids");
        let ids = tempIds != null ? tempIds.split(',') : null;
        let key = filter.getAsNullableString("key");

        return (item: Dummy) => {
            if (id != null && item.id != id)
                return false;
            if (ids != null && ids.indexOf(item.id) < 0)
                return false;
            if (key != null && item.key != key)
                return false;
            return true;
        };
    }

    public async getPageByFilter(ctx: Context, filter: FilterParams, paging: PagingParams): Promise<DataPage<Dummy>> {
        return await super.getPageByFilter(ctx, this.composeFilter(filter), paging, null, null);
    }

    public async getOneById(ctx: Context, key: string): Promise<Dummy> {
        for(let item of this._items){
            if (item.key == key) {
                this._logger.trace(ctx, "Found object by key=" + key);
                return item;
            }
        }

        this._logger.trace(ctx, "Cannot find by key=" + key);
    }
}

...

let persistence = new MyMemoryPersistence();
```
