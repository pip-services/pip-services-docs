
**/test/operations/version1/BeaconsRoutesV1.test.ts**
```ts
const assert = require('chai').assert;

import { DataPage } from 'pip-services4-data-node';
import { Descriptor } from 'pip-services4-components-node';

import { BeaconV1 } from '../../../src/clients/version1/BeaconV1';
import { BeaconsMemoryClientV1 } from '../../../src/clients/version1/BeaconsMemoryClientV1';

import { TestUsers } from '../../fixtures/TestUsers';
import { TestReferences } from '../../fixtures/TestReferences';
import { TestRestClient } from '../../fixtures/TestRestClient';

let BEACON1: BeaconV1 = {
    id: '1',
    udi: '000001',
    site_id: '1',
    label: 'TestBeacon1',
    center: { type: 'Point', coordinates: [0, 0] },
    radius: 50
};
let BEACON2: BeaconV1 = {
    id: '2',
    udi: '000002',
    site_id: '1',
    label: 'TestBeacon2',
    center: { type: 'Point', coordinates: [2, 2] },
    radius: 70
};
let BEACON3: BeaconV1 = {
    id: '3',
    udi: '000003',
    site_id: '2',
    label: 'TestBeacon3',
    center: { type: 'Point', coordinates: [10, 10] },
    radius: 50
};

suite('BeaconsOperationsV1', () => {
    let references: TestReferences;
    let rest: TestRestClient;

    setup(async () => {
        rest = new TestRestClient();
        references = new TestReferences();
        references.put(new Descriptor('beacons', 'client', 'memory', 'default', '1.0'), new BeaconsMemoryClientV1());
        await references.open(null);
    });

    teardown(async () => {
        await references.close(null);
    });

    test('should perform beacon operations', async () => {
        let beacon1, beacon2, beacon3: BeaconV1;
        // Create one beacon
        let beacon = await rest.postAsUser(
            TestUsers.AdminUserSessionId,
            '/api/v1/sites/' + BEACON1.site_id + '/beacons',
            BEACON1,
        );

        assert.isObject(beacon);
        assert.equal(beacon.site_id, BEACON1.site_id);
        assert.equal(beacon.udi, BEACON1.udi);
        assert.equal(beacon.label, BEACON1.label);
        assert.isNotNull(beacon.center);

        beacon1 = beacon;


        // Create another beacon
        beacon = await rest.postAsUser(
            TestUsers.AdminUserSessionId,
            '/api/v1/sites/' + BEACON2.site_id + '/beacons',
            BEACON2
        );

        assert.isObject(beacon);
        assert.equal(beacon.site_id, BEACON2.site_id);
        assert.equal(beacon.udi, BEACON2.udi);
        assert.equal(beacon.label, BEACON2.label);
        assert.isNotNull(beacon.center);

        beacon2 = beacon;

        // Create yet another beacon
        beacon = await rest.postAsUser(
            TestUsers.AdminUserSessionId,
            '/api/v1/sites/' + BEACON3.site_id + '/beacons',
            BEACON3
        );

        assert.isObject(beacon);
        assert.equal(beacon.site_id, BEACON3.site_id);
        assert.equal(beacon.udi, BEACON3.udi);
        assert.equal(beacon.label, BEACON3.label);
        assert.isNotNull(beacon.center);

        beacon3 = beacon;

        // Get all beacons
        let page: DataPage<BeaconV1> = await rest.getAsUser(
            TestUsers.AdminUserSessionId,
            '/api/v1/sites/' + BEACON1.site_id + '/beacons'
        );
        
        assert.isObject(page);
        assert.lengthOf(page.data, 2);

        // Calculate positions
        let position = await rest.postAsUser(
            TestUsers.AdminUserSessionId,
            '/api/v1/sites/' + BEACON1.site_id + '/beacons/calculate_position',
            {
                site_id: BEACON1.site_id,
                udis: [BEACON1.udi]
            }
        );

        assert.isObject(position);
        assert.equal(position.type, 'Point');

        // Validate beacon udi
        let result = await rest.postAsUser(
            TestUsers.AdminUserSessionId,
            '/api/v1/sites/' + beacon1.site_id + '/beacons/validate_udi?udi=' + beacon1.udi,
            {},
        );

        assert.equal(result, beacon1.id);

        // Update the beacon
        beacon1.label = 'ABC';

        beacon = await rest.putAsUser(
            TestUsers.AdminUserSessionId,
            '/api/v1/sites/' + beacon1.site_id + '/beacons/' + beacon1.id,
            beacon1
        );

        assert.isObject(beacon);
        assert.equal(beacon.label, 'ABC');

        // Delete beacon
        beacon = await rest.delAsUser(
            TestUsers.AdminUserSessionId,
            '/api/v1/sites/' + beacon1.site_id + '/beacons/' + beacon1.id
        );

        assert.equal(beacon.id, beacon1.id);

        // Try to get delete beacon
        result = await rest.getAsUser(
            TestUsers.AdminUserSessionId,
            '/api/v1/sites/' + beacon1.site_id + '/beacons/' + beacon1.id
        );

        assert.isNull(result);
    });

});

```
