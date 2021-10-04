
**/test/operations/BeaconsRoutesV1.test.ts**

```typescript
let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { ConfigParams } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';

import { BeaconV1 } from '../../../src/clients/version1/BeaconV1';
import { BeaconsMemoryClientV1 } from '../../../src/clients/version1/BeaconsMemoryClientV1';

import { TestUsers } from '../../fixtures/TestUsers';
import { TestReferences } from '../../fixtures/TestReferences';
import { TestRestClient } from '../../fixtures/TestRestClient';
import { BeaconsOperationsV1 } from '../../../src/operations/version1/BeaconsOperationsV1';

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

suite('BeaconsOperationsV2', () => {
    let references: TestReferences;
    let rest: TestRestClient;

    setup((done) => {
        rest = new TestRestClient();
        references = new TestReferences();
        references.put(new Descriptor('nov-services-beacons', 'client', 'memory', 'default', '1.0'), new BeaconsMemoryClientV1());
        references.open(null, done);
    });

    teardown((done) => {
        references.close(null, done);
    });

    test('should perform beacon operations', (done) => {
        let beacon1, beacon2, beacon3: BeaconV1;

        async.series([
        // Create one beacon
            (callback) => {
                rest.postAsUser(
                    TestUsers.AdminUserSessionId,
                    '/api/v2/sites/' + BEACON1.site_id + '/xbeacons',
                    BEACON1,
                    (err, req, res, beacon) => {
                        assert.isNull(err);

                        assert.isObject(beacon);
                        assert.equal(beacon.site_id, BEACON1.site_id);
                        assert.equal(beacon.udi, BEACON1.udi);
                        assert.equal(beacon.label, BEACON1.label);
                        assert.isNotNull(beacon.center);

                        beacon1 = beacon;

                        callback();
                    }
                );
            },
        // Create another beacon
            (callback) => {
                rest.postAsUser(
                    TestUsers.AdminUserSessionId,
                    '/api/v2/sites/' + BEACON2.site_id + '/xbeacons', 
                    BEACON2,
                    (err, req, res, beacon) => {
                        assert.isNull(err);

                        assert.isObject(beacon);
                        assert.equal(beacon.site_id, BEACON2.site_id);
                        assert.equal(beacon.udi, BEACON2.udi);
                        assert.equal(beacon.label, BEACON2.label);
                        assert.isNotNull(beacon.center);

                        beacon2 = beacon;

                        callback();
                    }
                );
            },
        // Create yet another beacon
            (callback) => {
                rest.postAsUser(
                    TestUsers.AdminUserSessionId,
                    '/api/v2/sites/' + BEACON3.site_id + '/xbeacons', 
                    BEACON3,
                    (err, req, res, beacon) => {
                        assert.isNull(err);

                        assert.isObject(beacon);
                        assert.equal(beacon.site_id, BEACON3.site_id);
                        assert.equal(beacon.udi, BEACON3.udi);
                        assert.equal(beacon.label, BEACON3.label);
                        assert.isNotNull(beacon.center);

                        beacon3 = beacon;

                        callback();
                    }
                );
            },
        // Get all beacons
            (callback) => {
                rest.getAsUser(
                    TestUsers.AdminUserSessionId,
                    '/api/v2/sites/' + BEACON1.site_id + '/xbeacons',
                    (err, req, res, page) => {
                        assert.isNull(err);

                        assert.isObject(page);
                        assert.lengthOf(page.data, 2);

                        callback();
                    }
                );
            },
            // Calculate positions
            (callback) => {
                rest.postAsUser(
                    TestUsers.AdminUserSessionId,
                    '/api/v2/sites/' + BEACON1.site_id + '/xbeacons/calculate_position',
                    {
                        site_id: BEACON1.site_id,
                        udis: [BEACON1.udi]
                    },
                    (err, req, res, position) => {
                        assert.isNull(err);

                        assert.isObject(position);
                        assert.equal(position.type, 'Point');

                        callback();
                    }
                );
            },
            // Validate beacon udi
            (callback) => {
                rest.postAsUser(
                    TestUsers.AdminUserSessionId,
                    '/api/v2/sites/' + beacon1.site_id + '/xbeacons/validate_udi?udi=' + beacon1.udi,
                    {},
                    (err, req, res, result) => {
                        assert.isNull(err);

                        assert.equal(result, beacon1.id);

                        callback();
                    }
                );
            },
        // Update the beacon
            (callback) => {
                beacon1.label = 'ABC';

                rest.putAsUser(
                    TestUsers.AdminUserSessionId,
                    '/api/v2/sites/' + beacon1.site_id + '/xbeacons/' + beacon1.id,
                    beacon1,
                    (err, req, res, beacon) => {
                        assert.isNull(err);

                        assert.isObject(beacon);
                        assert.equal(beacon.label, 'ABC');

                        beacon1 = beacon;

                        callback();
                    }
                );
            },
        // Delete beacon
            (callback) => {
                rest.delAsUser(
                    TestUsers.AdminUserSessionId,
                    '/api/v2/sites/' + beacon1.site_id + '/xbeacons/' + beacon1.id,
                    (err, req, res, result) => {
                        assert.isNull(err);

                        //assert.isNull(result);

                        callback();
                    }
                );
            },
        // Try to get delete beacon
            (callback) => {
                rest.getAsUser(
                    TestUsers.AdminUserSessionId,
                    '/api/v2/sites/' + beacon1.site_id + '/xbeacons/' + beacon1.id,
                    (err, req, res, result) => {
                        assert.isNull(err);

                        //assert.isNull(result);

                        callback();
                    }
                );
            }
        ], done);
    });

});
```

