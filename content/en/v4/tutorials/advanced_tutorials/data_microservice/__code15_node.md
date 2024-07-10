
**/test/service/BeaconsService.test.ts**
```ts
const assert = require('chai').assert;

import { ConfigParams } from 'pip-services4-components-node';
import { Descriptor } from 'pip-services4-components-node';
import { References } from 'pip-services4-components-node';
import { FilterParams } from 'pip-services4-data-node';
import { PagingParams } from 'pip-services4-data-node';

import { BeaconV1 } from '../../src/data/version1/BeaconV1';
import { BeaconTypeV1 } from '../../src/data/version1/BeaconTypeV1';
import { BeaconsMemoryPersistence } from '../../src/persistence/BeaconsMemoryPersistence';
import { BeaconsService } from '../../src/service/BeaconsService';

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

suite('BeaconsService', () => {
    let persistence: BeaconsMemoryPersistence;
    let controller: BeaconsService;

    setup(async () => {
        persistence = new BeaconsMemoryPersistence();
        persistence.configure(new ConfigParams());

        controller = new BeaconsService();
        controller.configure(new ConfigParams());

        let references = References.fromTuples(
            new Descriptor('beacons', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('beacons', 'controller', 'default', 'default', '1.0'), controller
        );

        controller.setReferences(references);

        await persistence.open(null);
    });

    teardown(async () => {
        await persistence.close(null);
    });

    test('CRUD Operations', async () => {
        // Create the first beacon
        let beacon = await controller.createBeacon(
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
        beacon = await controller.createBeacon(
            null,
            BEACON2
        );
        assert.isObject(beacon);
        assert.equal(BEACON2.udi, beacon.udi);
        assert.equal(BEACON2.site_id, beacon.site_id);
        assert.equal(BEACON2.type, beacon.type);
        assert.equal(BEACON2.label, beacon.label);
        assert.isNotNull(beacon.center);

        // Get all beacons
        let page = await controller.getBeacons(
            null,
            new FilterParams(),
            new PagingParams()
        );
        assert.isObject(page);
        assert.lengthOf(page.data, 2);

        let beacon1 = page.data[0];

        // Update the beacon
        beacon1.label = 'ABC';

        beacon = await controller.updateBeacon(
            null,
            beacon1
        );
        assert.isObject(beacon);
        assert.equal(beacon1.id, beacon.id);
        assert.equal('ABC', beacon.label);

        // Get beacon by udi
        beacon = await controller.getBeaconByUdi(
            null, 
            beacon1.udi
        );
        assert.isObject(beacon);
        assert.equal(beacon1.id, beacon.id);

        // Delete the beacon
        beacon = await controller.deleteBeaconById(
            null,
            beacon1.id
        );
        assert.isObject(beacon);
        assert.equal(beacon1.id, beacon.id);

        // Try to get deleted beacon
        beacon = await controller.getBeaconById(
            null,
            beacon1.id
        );
        assert.isNull(beacon || null);
    });


    test('Calculate Positions', async () => {
        // Create the first beacon
        let beacon = await controller.createBeacon(
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
        beacon = await controller.createBeacon(
            null,
            BEACON2
        );
        assert.isObject(beacon);
        assert.equal(BEACON2.udi, beacon.udi);
        assert.equal(BEACON2.site_id, beacon.site_id);
        assert.equal(BEACON2.type, beacon.type);
        assert.equal(BEACON2.label, beacon.label);
        assert.isNotNull(beacon.center);

        // Calculate position for one beacon
        let position = await controller.calculatePosition(
            null, '1', ['00001']
        );
        assert.isObject(position);
        assert.equal('Point', position.type);
        assert.lengthOf(position.coordinates, 2);
        assert.equal(0, position.coordinates[0]);
        assert.equal(0, position.coordinates[1]);

        // Calculate position for two beacons
        position = await controller.calculatePosition(
            null, '1', ['00001', '00002']
        );
        assert.isObject(position);
        assert.equal('Point', position.type);
        assert.lengthOf(position.coordinates, 2);
        assert.equal(1, position.coordinates[0]);
        assert.equal(1, position.coordinates[1]);
    });
});

```
