
**/src/version1/BeaconsHttpClientV1.ts**

```typescript
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';

import { BeaconV1 } from './BeaconV1';
import { IBeaconsClientV1 } from './IBeaconsClientV1';

export class BeaconsHttpClientV1 extends CommandableHttpClient implements IBeaconsClientV1 {
    public constructor() {
        super('v1/beacons');
    }

    public getBeacons(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<BeaconV1>> {
        return this.callCommand(
            'get_beacons',
            correlationId,
            { filter: filter, paging: paging }
        );
    }

    public getBeaconById(correlationId: string, beaconId: string): Promise<BeaconV1> {
        return this.callCommand(
            'get_beacon_by_id',
            correlationId,
            {
                beacon_id: beaconId
            }
        );
    }

    public getBeaconByUdi(correlationId: string, udi: string): Promise<BeaconV1> {
        return this.callCommand(
            'get_beacon_by_udi',
            correlationId,
            {
                udi: udi
            }
        );
    }

    public calculatePosition(correlationId: string, siteId: string, udis: string[]): Promise<any> {
        return this.callCommand(
            'calculate_position',
            correlationId,
            {
                site_id: siteId,
                udis: udis
            }
        );    
    }

    public createBeacon(correlationId: string, beacon: BeaconV1): Promise<BeaconV1> {
        return this.callCommand(
            'create_beacon',
            correlationId,
            {
                beacon: beacon
            }
        );
    }

    public updateBeacon(correlationId: string, beacon: BeaconV1): Promise<BeaconV1> {
        return this.callCommand(
            'update_beacon',
            correlationId,
            {
                beacon: beacon
            }
        );    
    }

    public deleteBeaconById(correlationId: string, beaconId: string): Promise<BeaconV1> {
        return this.callCommand(
            'delete_beacon_by_id',
            correlationId,
            {
                beacon_id: beaconId
            }
        );
    }
}
```
