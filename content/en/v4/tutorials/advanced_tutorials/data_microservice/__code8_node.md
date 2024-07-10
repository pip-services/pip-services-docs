
**/src/persistence/BeaconsMemoryPersistence.ts**
```ts
import { FilterParams, PagingParams, DataPage } from 'pip-services4-data-node';
import { IdentifiableMemoryPersistence } from 'pip-services4-persistence-node';
import { Context } from 'pip-services4-components-node';

import { BeaconV1 } from '../data/version1/BeaconV1';
import { IBeaconsPersistence } from './IBeaconsPersistence';

export class BeaconsMemoryPersistence
    extends IdentifiableMemoryPersistence<BeaconV1, string>
    implements IBeaconsPersistence {

    constructor() {
        super();

        this._maxPageSize = 1000;
    }

    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();

        let id = filter.getAsNullableString('id');
        let siteId = filter.getAsNullableString('site_id');
        let label = filter.getAsNullableString('label');
        let udi = filter.getAsNullableString('udi');
        let udis = filter.getAsObject('udis');
        if (typeof udis === "string") {
            udis = udis.split(',');
        }
        if (!Array.isArray(udis)) {
            udis = null;
        }

        return (item) => {
            if (id != null && item.id != id)
                return false;
            if (siteId != null && item.site_id != siteId)
                return false;
            if (label != null && item.label != label)
                return false;
            if (udi != null && item.udi != udi)
                return false;
            if (udis != null && udis.indexOf(item.udi) < 0)
                return false;
            return true;
        };
    }

    public getPageByFilter(ctx: Context, filter: FilterParams,
        paging: PagingParams): Promise<DataPage<BeaconV1>> {
        return super.getPageByFilter(ctx, this.composeFilter(filter), paging, null, null);
    }

    public async getOneByUdi(ctx: Context, udi: string): Promise<BeaconV1> {        
        let item = this._items.find((item) => item.udi == udi);

        if (item != null) this._logger.trace(ctx, "Found beacon by %s", udi);
        else this._logger.trace(ctx, "Cannot find beacon by %s", udi);

       return item;
    }

}

```
