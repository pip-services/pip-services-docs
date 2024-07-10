
**/test/controller/version1/BeaconsHttpControllerV1.test.ts**
```ts
const assert = require('chai').assert;

import { DataPage } from 'pip-services4-data-node';
import { ConfigParams } from 'pip-services4-components-node';
import { Descriptor } from 'pip-services4-components-node';
import { References } from 'pip-services4-components-node';
import { FilterParams } from 'pip-services4-data-node';
import { PagingParams } from 'pip-services4-data-node';
import { TestCommandableHttpClient } from 'pip-services4-http-node';

import { BeaconV1 } from '../../../src/data/version1/BeaconV1';
import { BeaconTypeV1 } from '../../../src/data/version1/BeaconTypeV1';
import { BeaconsMemoryPersistence } from '../../../src/persistence/BeaconsMemoryPersistence';
import { BeaconsService } from '../../../src/service/BeaconsService';
import { BeaconsHttpControllerV1 } from '../../../src/controller/version1/BeaconsHttpControllerV1';

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

suite('BeaconsHttpControllerV1', () => {
    let persistence: BeaconsMemoryPersistence;
    let service: BeaconsService;
    let controller: BeaconsHttpControllerV1;
    let client: TestCommandableHttpClient;

    setup(async () => {
        let restConfig = ConfigParams.fromTuples(
            'connection.protocol', 'http',
            'connection.port', 3000,
            'connection.host', 'localhost'
        );

        persistence = new BeaconsMemoryPersistence();
        persistence.configure(new ConfigParams());

        controller = new BeaconsService();
        controller.configure(new ConfigParams());

        service = new BeaconsHttpControllerV1();
        service.configure(restConfig);

        client = new TestCommandableHttpClient('v1/beacons')
        client.configure(restConfig);

        let references = References.fromTuples(
            new Descriptor('beacons', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('beacons', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('beacons', 'service', 'http', 'default', '1.0'), service
        );

        controller.setReferences(references);
        service.setReferences(references);

        await persistence.open(null);
        await service.open(null);
        await client.open(null);
    });

    teardown(async () => {
        await client.close(null);
        await service.close(null);
        await persistence.close(null);
    });

    test('CRUD Operations', async () => {
        let beacon1: BeaconV1;

        // Create the first beacon
        let beacon = await client.callCommand<BeaconV1>(
            'create_beacon',
            null, 
            {
                beacon: BEACON1
            }
        );
        assert.isObject(beacon);
        assert.equal(BEACON1.udi, beacon.udi);
        assert.equal(BEACON1.site_id, beacon.site_id);
        assert.equal(BEACON1.type, beacon.type);
        assert.equal(BEACON1.label, beacon.label);
        assert.isNotNull(beacon.center);

        // Create the second beacon
        beacon = await client.callCommand<BeaconV1>(
            'create_beacon',
            null, 
            {
                beacon: BEACON2
            }
        );
        assert.isObject(beacon);
        assert.equal(BEACON2.udi, beacon.udi);
        assert.equal(BEACON2.site_id, beacon.site_id);
        assert.equal(BEACON2.type, beacon.type);
        assert.equal(BEACON2.label, beacon.label);
        assert.isNotNull(beacon.center);

        // Get all beacons
        let page = await client.callCommand<DataPage<BeaconV1>>(
            'get_beacons',
            null,
            {
                filter: new FilterParams(),
                paging: new PagingParams()
            }
        );
        assert.isObject(page);
        assert.lengthOf(page.data, 2);

        beacon1 = page.data[0];

        // Update the beacon
        beacon1.label = 'ABC';

        beacon = await client.callCommand(
            'update_beacon',
            null,
            {
                beacon: beacon1
            }
        );
        assert.isObject(beacon);
        assert.equal(beacon1.id, beacon.id);
        assert.equal('ABC', beacon.label);

        // Get beacon by udi
        beacon = await client.callCommand(
            'get_beacon_by_udi',
            null,
            {
                udi: beacon1.udi
            }
        );
        assert.isObject(beacon);
        assert.equal(beacon1.id, beacon.id);

        // Calculate position for one beacon
        let position = await client.callCommand<any>(
            'calculate_position',
            null,
            {
                site_id: '1',
                udis: ['00001']
            }
        );
        assert.isObject(position);
        assert.equal('Point', position.type);
        assert.lengthOf(position.coordinates, 2);
        assert.equal(0, position.coordinates[0]);
        assert.equal(0, position.coordinates[1]);

        // Delete the beacon
        beacon = await client.callCommand(
            'delete_beacon_by_id',
            null,
            {
                beacon_id: beacon1.id
            }
        );
        assert.isObject(beacon);
        assert.equal(beacon1.id, beacon.id);

        // Try to get deleted beacon
        beacon = await client.callCommand(
            'get_beacon_by_id',
            null,
            {
                beacon_id: beacon1.id
            }
        );
        assert.isNull(beacon || null);
    });

});

```
