
**/src/service/IBeaconsService.ts**
```ts
import { FilterParams, PagingParams, DataPage } from 'pip-services4-data-node';
import { Context } from 'pip-services4-components-node';

import { BeaconV1 } from '../../src/data/version1/BeaconV1';

export interface IBeaconsService {
    getBeacons(ctx: Context, filter: FilterParams,
        paging: PagingParams): Promise<DataPage<BeaconV1>>;

    getBeaconById(ctx: Context, beaconId: string): Promise<BeaconV1>;

    getBeaconByUdi(ctx: Context, beaconId: string): Promise<BeaconV1>;

    calculatePosition(ctx: Context, siteId: string, udis: string[]): Promise<any>;

    createBeacon(ctx: Context, beacon: BeaconV1): Promise<BeaconV1>;

    updateBeacon(ctx: Context, beacon: BeaconV1): Promise<BeaconV1>;

    deleteBeaconById(ctx: Context, beaconId: string): Promise<BeaconV1>;
}

```
