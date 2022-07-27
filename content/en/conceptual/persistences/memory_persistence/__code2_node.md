
```ts
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { IdentifiableMemoryPersistence } from 'pip-services3-data-nodex';



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

    public async getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<Dummy>> {
        return await super.getPageByFilter(correlationId, this.composeFilter(filter), paging, null, null);
    }

    public async getOneById(correlationId: string, key: string): Promise<Dummy> {
        for(let item of this._items){
            if (item.key == key) {
                this._logger.trace(correlationId, "Found object by key=" + key);
                return item;
            }
        }

        this._logger.trace(correlationId, "Cannot find by key=" + key);
    }
}

...

let persistence = new MyMemoryPersistence();
```
