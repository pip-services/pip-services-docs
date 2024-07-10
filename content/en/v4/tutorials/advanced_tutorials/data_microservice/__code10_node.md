
**/test/persistence/BeaconsPersistenceFixture.ts**
```ts
import { FilterParams, PagingParams } from 'pip-services4-data-node';

const assert = require('chai').assert;

import { BeaconV1 } from '../../src/data/version1/BeaconV1';
import { BeaconTypeV1 } from '../../src/data/version1/BeaconTypeV1';
import { IBeaconsPersistence } from '../../src/persistence/IBeaconsPersistence';

const BEACON1: BeaconV1 = {
    id: '1',
    udi: '00001',
    type: BeaconTypeV1.AltBeacon,
    site_id: '1',
    label: 'TestBeacon1',
    center: { type: 'Point', coordinates: [ 0, 0 ] },
    radius: 50
};
const BEACON2: BeaconV1 = {
    id: '2',
    udi: '00002',
    type: BeaconTypeV1.iBeacon,
    site_id: '1',
    label: 'TestBeacon2',
    center: { type: 'Point', coordinates: [ 2, 2 ] },
    radius: 70
};
const BEACON3: BeaconV1 = {
    id: '3',
    udi: '00003',
    type: BeaconTypeV1.AltBeacon,
    site_id: '2',
    label: 'TestBeacon3',
    center: { type: 'Point', coordinates: [ 10, 10 ] },
    radius: 50
};

export class BeaconsPersistenceFixture {
    private _persistence: IBeaconsPersistence;

    public constructor(persistence: IBeaconsPersistence) {
        assert.isNotNull(persistence);
        this._persistence = persistence;
    }

    private async testCreateBeacons() {
        // Create the first beacon
        let beacon = await this._persistence.create(
            null,
            BEACON1
        );
        assert.isObject(beacon);
        assert.equal(BEACON1.udi, beacon.udi);
        assert.equal(BEACON1.site_id, beacon.site_id);
        assert.equal(BEACON1.type, beacon.type);
        assert.equal(BEACON1.label, beacon.label);
        assert.isNotNull(beacon.center);

        // Create the second beacon
        beacon = await this._persistence.create(
            null,
            BEACON2
        );
        assert.isObject(beacon);
        assert.equal(BEACON2.udi, beacon.udi);
        assert.equal(BEACON2.site_id, beacon.site_id);
        assert.equal(BEACON2.type, beacon.type);
        assert.equal(BEACON2.label, beacon.label);
        assert.isNotNull(beacon.center);

        // Create the third beacon
        beacon = await this._persistence.create(
            null,
            BEACON3
        );
        assert.isObject(beacon);
        assert.equal(BEACON3.udi, beacon.udi);
        assert.equal(BEACON3.site_id, beacon.site_id);
        assert.equal(BEACON3.type, beacon.type);
        assert.equal(BEACON3.label, beacon.label);
        assert.isNotNull(beacon.center);
    }

    public async testCrudOperations() {
        // Create items
        await this.testCreateBeacons();

        // Get all beacons
        let page = await this._persistence.getPageByFilter(
            null,
            new FilterParams(),
            new PagingParams()
        );
        assert.isObject(page);
        assert.lengthOf(page.data, 3);

        let beacon1 = page.data[0];

        // Update the beacon
        beacon1.label = 'ABC';

        let beacon = await this._persistence.update(
            null,
            beacon1
        );
        assert.isObject(beacon);
        assert.equal(beacon1.id, beacon.id);
        assert.equal('ABC', beacon.label);

        // Get beacon by udi
        beacon = await this._persistence.getOneByUdi(
            null, 
            beacon1.udi,
        );
        assert.isObject(beacon);
        assert.equal(beacon1.id, beacon.id);

        // Delete the beacon
        beacon = await this._persistence.deleteById(
            null,
            beacon1.id
        );
        assert.isObject(beacon);
        assert.equal(beacon1.id, beacon.id);

        // Try to get deleted beacon
        beacon = await this._persistence.getOneById(
            null,
            beacon1.id
        );
        assert.isNull(beacon || null);
    }

    public async testGetWithFilters() {
        // Create items
        await this.testCreateBeacons();

        // Filter by id
        let page = await this._persistence.getPageByFilter(
            null,
            FilterParams.fromTuples(
                'id', '1'
            ),
            new PagingParams()
        );
        assert.lengthOf(page.data, 1);

        // Filter by udi
        page = await this._persistence.getPageByFilter(
            null,
            FilterParams.fromTuples(
                'udi', '00002'
            ),
            new PagingParams()
        );
        assert.lengthOf(page.data, 1);

        // Filter by udis
        page = await this._persistence.getPageByFilter(
            null,
            FilterParams.fromTuples(
                'udis', '00001,00003'
            ),
            new PagingParams()
        );
        assert.lengthOf(page.data, 2);

        // Filter by site_id
        page = await this._persistence.getPageByFilter(
            null,
            FilterParams.fromTuples(
                'site_id', '1'
            ),
            new PagingParams()
        );
        assert.lengthOf(page.data, 2);
    }
}


```
