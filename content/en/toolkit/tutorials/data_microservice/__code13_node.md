
**/src/logic/BeaconsController.ts**

```typescript
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { IConfigurable } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { IReferences } from 'pip-services3-commons-nodex';
import { IReferenceable } from 'pip-services3-commons-nodex';
import { IdGenerator } from 'pip-services3-commons-nodex';
import { CommandSet } from 'pip-services3-commons-nodex';
import { ICommandable } from 'pip-services3-commons-nodex';

import { BeaconV1 } from '../../src/data/version1/BeaconV1';
import { IBeaconsPersistence } from '../../src/persistence/IBeaconsPersistence';
import { IBeaconsController } from './IBeaconsController';
import { BeaconTypeV1 } from '../../src/data/version1/BeaconTypeV1';
import { BeaconsCommandSet } from './BeaconsCommandSet';

export class BeaconsController implements IBeaconsController, IConfigurable, IReferenceable, ICommandable {
    private _persistence: IBeaconsPersistence;
    private _commandSet: BeaconsCommandSet;

    public constructor() { }

    public configure(config: ConfigParams): void {
    }

    public setReferences(references: IReferences): void {
        this._persistence = references.getOneRequired<IBeaconsPersistence>(
            new Descriptor('beacons', 'persistence', '*', '*', '1.0')
        );
    }

    public getCommandSet(): CommandSet {
        if (this._commandSet == null) {
            this._commandSet = new BeaconsCommandSet(this);
        }

        return this._commandSet;
    }

    public getBeacons(correlationId: string, filter: FilterParams,
        paging: PagingParams): Promise<DataPage<BeaconV1>> {
        return this._persistence.getPageByFilter(correlationId, filter, paging);
    }

    public getBeaconById(correlationId: string, beaconId: string): Promise<BeaconV1> {
        return this._persistence.getOneById(correlationId, beaconId);
    }

    public getBeaconByUdi(correlationId: string, beaconId: string): Promise<BeaconV1> {
        return this._persistence.getOneByUdi(correlationId, beaconId);
    }

    public async calculatePosition(correlationId: string, siteId: string, udis: string[]): Promise<any> {
        if (udis == null || udis.length == 0) {
            return null;
        }

        let page = await this._persistence.getPageByFilter(
            correlationId,
            FilterParams.fromTuples(
                'site_id', siteId,
                'udis', udis
            ),
            null
        );
        let beacons = page.data || [];

        let lat = 0;
        let lng = 0;
        let count = 0;
        for (let beacon of beacons) {
            if (beacon.center != null 
                && beacon.center.type == 'Point'
                && Array.isArray(beacon.center.coordinates)) {
                    lng += beacon.center.coordinates[0];
                    lat += beacon.center.coordinates[1];
                    count += 1;
                }
        }

        if (count == 0) {
            return null;
        }

        let position = {
            type: 'Point',
            coordinates: [lng / count, lat / count]
        }
        return position;
    }

    public createBeacon(correlationId: string, beacon: BeaconV1): Promise<BeaconV1> {
        beacon.id = beacon.id || IdGenerator.nextLong();
        beacon.type = beacon.type || BeaconTypeV1.Unknown;

        return this._persistence.create(correlationId, beacon);
    }

    public updateBeacon(correlationId: string, beacon: BeaconV1): Promise<BeaconV1> {
        beacon.type = beacon.type || BeaconTypeV1.Unknown;
        return this._persistence.update(correlationId, beacon);
    }

    public deleteBeaconById(correlationId: string, beaconId: string): Promise<BeaconV1> {
        return this._persistence.deleteById(correlationId, beaconId);
    }

}
```

