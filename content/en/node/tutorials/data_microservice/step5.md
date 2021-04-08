---
type: docs
no_list: true
title: "Step 5. Implementing an HTTP service (with tests)"
linkTitle: "Step 5" 
---

The Pip.Services Toolkit has a dedicated component in the RPC module for processing external requests. To make use of this service, create a new class `BeaconsHttpServiceV1`, extending the `CommandableHttpService` class:

**/src/service/version1/BeaconsHttpServicesV1.ts**

```typescript
import { CommandableHttpService } from 'pip-services3-rpc-node';
import { Descriptor } from 'pip-services3-commons-node';
‍
export class BeaconsHttpServiceV1 extends CommandableHttpService {
    public constructor() {
        super('v1/beacons');
        this._dependencyResolver.put('controller', new Descriptor('beacons', 'controller', '*', '*', '1.0'));
    }
}

```

The `CommandableHttpService` class from the pip-services3-rpc module implements all of the basic functionality needed by the service, right out of the box. All that we need to do on our side is configure it in the child class. This is done by defining a base route to the API (e.g. 'v1/beacons') and by setting references to the controller. The rest is taken care of by the parent class and the process container: a controller will be searched for and referenced, after which the service will receive a set of commands, register it, and make those commands available through the API interface. This allows us to run commands by simply posting requests to a URL of the following format:

```
http://{ip}:{port}/v1/beacons/{command_name}
```

Even though the `BeaconsHttpServiceV1` class barely has any lines of code, there’s a large amount of code being executed in the service itself. To make sure that everything is working as it should, we should add tests for the service itself, as well as for the commands we wrote in the CommandSet. Create a file for the service’s test and paste the following code:

**/test/services/version1/BeaconsHttpServiceV1.test.ts**

```typescript
let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;
let restify = require('restify');
‍
import { ConfigParams } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
‍
import { BeaconV1 } from '../../../src/data/version1/BeaconV1';
import { BeaconTypeV1 } from '../../../src/data/version1/BeaconTypeV1';
import { BeaconsMemoryPersistence } from '../../../src/persistence/BeaconsMemoryPersistence';
import { BeaconsController } from '../../../src/logic/BeaconsController';
import { BeaconsHttpServiceV1 } from '../../../src/services/version1/BeaconsHttpServiceV1';
‍
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
‍
suite('BeaconsHttpServiceV1', () =&gt; {
    let persistence: BeaconsMemoryPersistence;
    let controller: BeaconsController;
    let service: BeaconsHttpServiceV1;
    let rest: any;
‍
    setup((done) =&gt; {
        let url = "http://localhost:3000";
        rest = restify.createJsonClient({ url: url, version: '*'});
‍
        persistence = new BeaconsMemoryPersistence();
        persistence.configure(new ConfigParams());
‍
        controller = new BeaconsController();
        controller.configure(new ConfigParams());
‍
        service = new BeaconsHttpServiceV1();
        service.configure(ConfigParams.fromTuples(
            'connection.protocol', 'http',
            'connection.port', 3000,
            'connection.host', 'localhost'
        ));
‍
        let references = References.fromTuples(
            new Descriptor('beacons', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('beacons', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('beacons', 'service', 'http', 'default', '1.0'), service
        );
‍
        controller.setReferences(references);
        service.setReferences(references);
‍
        persistence.open(null, (err) =&gt; {
            if (err) {
                done(err);
                return;
            }
‍
            service.open(null, done);
        });
    });
‍
    teardown((done) =&gt; {
        service.close(null, (err) =&gt; {
            persistence.close(null, done);
        });
    });
‍
    test('CRUD Operations', (done) =&gt; {
        let beacon1: BeaconV1;
‍
        async.series([
            // Create the first beacon
            (callback) =&gt; {
                rest.post('/v1/beacons/create_beacon',
                    {
                        beacon: BEACON1
                    },
                    (err, req, res, beacon) =&gt; {
                        assert.isNull(err);
‍
                        assert.isObject(beacon);
                        assert.equal(BEACON1.udi, beacon.udi);
                        assert.equal(BEACON1.site_id, beacon.site_id);
                        assert.equal(BEACON1.type, beacon.type);
                        assert.equal(BEACON1.label, beacon.label);
                        assert.isNotNull(beacon.center);
‍
                        callback();
                    }
                );
            },
            // Create the second beacon
            (callback) =&gt; {
                rest.post('/v1/beacons/create_beacon',
                    {
                        beacon: BEACON2
                    },
                    (err, req, res, beacon) =&gt; {
                        assert.isNull(err);
‍
                        assert.isObject(beacon);
                        assert.equal(BEACON2.udi, beacon.udi);
                        assert.equal(BEACON2.site_id, beacon.site_id);
                        assert.equal(BEACON2.type, beacon.type);
                        assert.equal(BEACON2.label, beacon.label);
                        assert.isNotNull(beacon.center);
‍
                        callback();
                    }
                );
            },
            // Get all beacons
            (callback) =&gt; {
                rest.post('/v1/beacons/get_beacons',
                    {
                        filter: new FilterParams(),
                        paging: new PagingParams()
                    },
                    (err, req, res, page) =&gt; {
                        assert.isNull(err);
‍
                        assert.isObject(page);
                        assert.lengthOf(page.data, 2);
‍
                        beacon1 = page.data[0];
‍
                        callback();
                    }
                )
            },
            // Update the beacon
            (callback) =&gt; {
                beacon1.label = 'ABC';
‍
                rest.post('/v1/beacons/update_beacon',
                    {
                        beacon: beacon1
                    },
                    (err, req, res, beacon) =&gt; {
                        assert.isNull(err);
‍
                        assert.isObject(beacon);
                        assert.equal(beacon1.id, beacon.id);
                        assert.equal('ABC', beacon.label);
‍
                        callback();
                    }
                )
            },
            // Get beacon by udi
            (callback) =&gt; {
                rest.post('/v1/beacons/get_beacon_by_udi',
                    {
                        udi: beacon1.udi
                    },
                    (err, req, res, beacon) =&gt; {
                        assert.isNull(err);
‍
                        assert.isObject(beacon);
                        assert.equal(beacon1.id, beacon.id);
‍
                        callback();
                    }
                )
            },
            // Calculate position for one beacon
            (callback) =&gt; {
                rest.post('/v1/beacons/calculate_position',
                    {
                        site_id: '1',
                        udis: ['00001']
                    },
                    (err, req, res, position) =&gt; {
                        assert.isNull(err);
‍
                        assert.isObject(position);
                        assert.equal('Point', position.type);
                        assert.lengthOf(position.coordinates, 2);
                        assert.equal(0, position.coordinates[0]);
                        assert.equal(0, position.coordinates[1]);
‍
                        callback();
                    }
                )
            },
            // Delete the beacon
            (callback) =&gt; {
                rest.post('/v1/beacons/delete_beacon_by_id',
                    {
                        beacon_id: beacon1.id
                    },
                    (err, req, res, beacon) =&gt; {
                        assert.isNull(err);
‍
                        assert.isObject(beacon);
                        assert.equal(beacon1.id, beacon.id);
‍
                        callback();
                    }
                )
            },
            // Try to get deleted beacon
            (callback) =&gt; {
                rest.post('/v1/beacons/get_beacon_by_id',
                    {
                        beacon_id: beacon1.id
                    },
                    (err, req, res, beacon) =&gt; {
                        assert.isNull(err);
‍
                        //assert.isEmpty(beacon || null);
‍
                        callback();
                    } 
               )
            } 
       ], done);
    });
});

```

Run the npm test command and make sure that all of the tests pass successfully.

Congratulations! This step finishes off the development of our microservice! However, before we can start our service up as a fully fledged microservice, we’ll first need to compose all of its components using a process container. And that’s exactly what we’ll be doing in [Step 6. Wrapping microservice into container.](../step6)