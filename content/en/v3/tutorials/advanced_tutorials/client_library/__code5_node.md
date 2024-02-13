
**/src/version1/BeaconsMockClientV1.ts**

```typescript

let _ = require('lodash');
let async = require('async');

import { FilterParams, IdGenerator } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';

import { BeaconV1 } from './BeaconV1';
import { IBeaconsClientV1 } from './IBeaconsClientV1';

export class BeaconsMockClientV1 implements IBeaconsClientV1 {
    private _maxPageSize: number = 100;
    private _items: BeaconV1[];

    public constructor(...items: BeaconV1[]) {
        this._items = items;
    }

    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();

        let id = filter.getAsNullableString('id');
        let siteId = filter.getAsNullableString('site_id');
        let label = filter.getAsNullableString('label');
        let udi = filter.getAsNullableString('udi');
        let udis = filter.getAsObject('udis');
        if (_.isString(udis))
            udis = udis.split(',');
        if (!_.isArray(udis))
            udis = null;

        return (item) => {
            if (id != null && item.id != id)
                return false;
            if (siteId != null && item.site_id != siteId)
                return false;
            if (label != null && item.label != label)
                return false;
            if (udi != null && item.udi != udi)
                return false;
            if (udis != null && _.indexOf(udis, item.udi) < 0)
                return false;
            return true;
        };
    }

    public async getBeacons(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<BeaconV1>> {
        let filterBeacons = this.composeFilter(filter);
        let beacons = _.filter(this._items, filterBeacons);

        // Extract a page
        paging = paging != null ? paging : new PagingParams();
        let skip = paging.getSkip(-1);
        let take = paging.getTake(this._maxPageSize);

        let total = null;
        if (paging.total)
            total = beacons.length;

        if (skip > 0)
            beacons = _.slice(beacons, skip);
        beacons = _.take(beacons, take);

        return new DataPage<BeaconV1>(beacons, total);
    }

    public async getBeaconById(correlationId: string, beaconId: string): Promise<BeaconV1> {
        let beacons = this._items.filter((x) => { return x.id == beaconId; });
        let beacon = beacons.length > 0 ? beacons[0] : null;

        return beacon;
    }

    public async getBeaconByUdi(correlationId: string, udi: string): Promise<BeaconV1> {
        let beacons = this._items.filter((x) => { return x.udi == udi; });
        let beacon = beacons.length > 0 ? beacons[0] : null;

        return beacon;
    }

    public async calculatePosition(correlationId: string, siteId: string, udis: string[]): Promise<BeaconV1> {
        let beacons: BeaconV1[];
        let position: any = null;

        if (udis == null || udis.length == 0) {
            return;
        }

        let page = await this.getBeacons(
                    correlationId,
                    FilterParams.fromTuples(
                        'site_id', siteId,
                        'udis', udis
                    ),
                    null,
                );
                
        let beacons = page ? page.data : [];

        let lat = 0;
        let lng = 0;
        let count = 0;

        for (let beacon of beacons) {
            if (beacon.center != null
                && beacon.center.type == 'Point'
                && _.isArray(beacon.center.coordinates)) {
                lng += beacon.center.coordinates[0];
                lat += beacon.center.coordinates[1];
                count += 1;
            }
        }

        if (count > 0) {
            position = {
                type: 'Point',
                coordinates: [lng / count, lat / count]
            }
        }

        return position
    }

    public async createBeacon(correlationId: string, beacon: BeaconV1): Promise<BeaconV1> {
        if (beacon == null) {
            return;
        }

        beacon = _.clone(beacon);
        beacon.id = beacon.id || IdGenerator.nextLong();

        this._items.push(beacon);

        return beacon
    }

    public async updateBeacon(correlationId: string, beacon: BeaconV1): Promise<BeaconV1> {
        let index = this._items.map((x) => { return x.id; }).indexOf(beacon.id);

        if (index < 0) {
            return;
        }

        beacon = _.clone(beacon);
        this._items[index] = beacon;
        return beacon;
    }

    public async deleteBeaconById(correlationId: string, beaconId: string): Promise<BeaconV1> {
        var index = this._items.map((x) => { return x.id; }).indexOf(beaconId);
        var item = this._items[index];

        if (index < 0) {
            return;
        }
        this._items.splice(index, 1);
        return item;
    }
}
```
