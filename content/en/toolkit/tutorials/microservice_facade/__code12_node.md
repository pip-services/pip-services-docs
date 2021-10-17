
**/test/operations/version1/BeaconsRoutesV1.test.ts**

```typescript
let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { TestReferences } from '../../fixtures/TestReferences';
import { TestUsers } from '../../fixtures/TestUsers';
import { TestRestClient } from '../../fixtures/TestRestClient';
import { BeaconV1, BeaconTypeV1 } from 'pip-clients-beacons-node';

const BEACON1: BeaconV1 = {
    id: '1',
    udi: '00001',
    type: BeaconTypeV1.AltBeacon,
    org_id: '1',
    label: 'TestBeacon1',
    center: { type: 'Point', coordinates: [ 0, 0 ] },
    radius: 50
};
const BEACON2: BeaconV1 = {
    id: '2',
    udi: '00002',
    type: BeaconTypeV1.iBeacon,
    org_id: '1',
    label: 'TestBeacon2',
    center: { type: 'Point', coordinates: [ 2, 2 ] },
    radius: 70
};

suite('BeaconsRoutesV1', () => {

    let references: TestReferences;
    let rest: TestRestClient;

    setup((done) => {
        rest = new TestRestClient();
        references = new TestReferences();
        references.open(null, done);
    });

    teardown((done) => {
        references.close(null, done);
    });

    test('CRUD Operations', (done) => {
        let beacon1: BeaconV1;

        async.series([
            // Create the first beacon
            (callback) => {
                rest.postAsUser(TestUsers.AdminUserSessionId, '/api/v1/beacons',
                    BEACON1,
                    (err, req, res, beacon) => {
                        assert.isNull(err);

                        assert.isObject(beacon);
                        assert.equal(BEACON1.udi, beacon.udi);
                        assert.equal(BEACON1.org_id, beacon.org_id);
                        assert.equal(BEACON1.type, beacon.type);
                        assert.equal(BEACON1.label, beacon.label);
                        assert.isNotNull(beacon.center);

                        callback();
                    }
                );
            },
            // Create the second beacon
            (callback) => {
                rest.postAsUser(TestUsers.AdminUserSessionId, '/api/v1/beacons',
                    BEACON2,
                    (err, req, res, beacon) => {
                        assert.isNull(err);

                        assert.isObject(beacon);
                        assert.equal(BEACON2.udi, beacon.udi);
                        assert.equal(BEACON2.org_id, beacon.org_id);
                        assert.equal(BEACON2.type, beacon.type);
                        assert.equal(BEACON2.label, beacon.label);
                        assert.isNotNull(beacon.center);

                        callback();
                    }
                );
            },
            // Get all beacons
            (callback) => {
                rest.getAsUser(TestUsers.AdminUserSessionId, '/api/v1/beacons',
                    (err, req, res, page) => {
                        assert.isNull(err);

                        assert.isObject(page);
                        assert.lengthOf(page.data, 2);

                        beacon1 = page.data[0];

                        callback();
                    }
                )
            },
            // Update the beacon
            (callback) => {
                beacon1.label = 'ABC';

                rest.putAsUser(TestUsers.AdminUserSessionId, '/api/v1/beacons',
                    beacon1,
                    (err, req, res, beacon) => {
                        assert.isNull(err);

                        assert.isObject(beacon);
                        assert.equal(beacon1.id, beacon.id);
                        assert.equal('ABC', beacon.label);

                        callback();
                    }
                )
            },
            // Get beacon by udi
            (callback) => {
                rest.getAsUser(TestUsers.User1SessionId, '/api/v1/beacons/udi/' + beacon1.udi + '?user_id=' + TestUsers.User1Id,
                    (err, req, res, beacon) => {
                        
                        assert.isNull(err);

                        assert.isObject(beacon);
                        assert.equal(beacon1.id, beacon.id);

                        callback();
                    }
                )
            },
            // Calculate position for one beacon
            (callback) => {
                rest.postAsUser(TestUsers.User1SessionId, '/api/v1/beacons/position',
                    {
                        org_id: '1',
                        udis: ['00001']
                    },
                    (err, req, res, position) => {
                        assert.isNull(err);

                        assert.isObject(position);
                        assert.equal('Point', position.type);
                        assert.lengthOf(position.coordinates, 2);
                        assert.equal(0, position.coordinates[0]);
                        assert.equal(0, position.coordinates[1]);

                        callback();
                    }
                )
            },
            // Delete the beacon
            (callback) => {
                rest.delAsUser(TestUsers.AdminUserSessionId, '/api/v1/beacons/' + beacon1.id,
                    (err, req, res, beacon) => {
                        assert.isNull(err);

                        assert.isObject(beacon);
                        assert.equal(beacon1.id, beacon.id);

                        callback();
                    }
                )
            },
            // Try to get deleted beacon
            (callback) => {
                rest.getAsUser(TestUsers.User1SessionId, '/api/v1/beacons/' + beacon1.id + '?user_id=' + TestUsers.User1Id,
                    (err, req, res, beacon) => {
                        assert.isNull(err);

                        //assert.isEmpty(beacon || null);

                        callback();
                    }
                )
            }
        ], done);
    });
});
```

