
**/src/persistence/IBeaconsPersistence.ts**
```ts
import { DataPage, PagingParams, FilterParams } from 'pip-services4-data-node';
import { Context } from 'pip-services4-components-node';

import { BeaconV1 } from '../data/version1/BeaconV1';

export interface IBeaconsPersistence {
    getPageByFilter(ctx: Context, filter: FilterParams,
        paging: PagingParams): Promise<DataPage<BeaconV1>>;
    
    getOneById(ctx: Context, id: string): Promise<BeaconV1>;
    
    getOneByUdi(ctx: Context, udi: string): Promise<BeaconV1>;

    create(ctx: Context, item: BeaconV1): Promise<BeaconV1>;
    
    update(ctx: Context, item: BeaconV1): Promise<BeaconV1>;

    deleteById(ctx: Context, id: string): Promise<BeaconV1>;
}


```
