---
type: docs
no_list: true
title: "Step 4. Implementing a controller (with tests)"
linkTitle: "Step 4"
---

Now that we know a bit about how we are going to be storing data and how microservice configuration works, it’s time to add some logic to our service. Our microservice needs to be able to calculate a device’s position based on the beacons it “sees”, as well as initiate CRUD operations for the data it handles. Let’s create a **logic** folder under the **src** directory and start by defining an interface:

**/src/logic/IBeaconsController.ts**

```typescript
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { BeaconV1 } from '../../src/data/version1/BeaconV1';
export interface IBeaconsController {
    getBeacons(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage&lt;BeaconV1&gt;) =&gt; void): void;
    getBeaconById(correlationId: string, beaconId: string,
        callback: (err: any, page: BeaconV1) =&gt; void): void;
    getBeaconByUdi(correlationId: string, beaconId: string,
        callback: (err: any, page: BeaconV1) =&gt; void): void;
    calculatePosition(correlationId: string, siteId: string, udis: string[],
        callback: (err: any, position: any) =&gt; void): void;
    createBeacon(correlationId: string, beacon: BeaconV1,
        callback: (err: any, beacon: BeaconV1) =&gt; void): void;
    updateBeacon(correlationId: string, beacon: BeaconV1,
        callback: (err: any, beacon: BeaconV1) =&gt; void): void;
    deleteBeaconById(correlationId: string, beaconId: string,
        callback: (err: any, beacon: BeaconV1) =&gt; void): void;
}
```

Once our interface is ready, we can move on to implementing the actual controller. Its code is also going to be quite simple, as all we need to write is one method for calculating a device’s position, and the other methods will just be wrappers for the methods we wrote in our persistence components.

**/src/logic/BeaconsController.ts**

```typescript
let _ = require('lodash');let async = require('async');
‍
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { IConfigurable } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { IReferenceable } from 'pip-services3-commons-node';
import { IdGenerator } from 'pip-services3-commons-node';
import { CommandSet } from 'pip-services3-commons-node';
import { ICommandable } from 'pip-services3-commons-node';
import { BeaconV1 } from '../../src/data/version1/BeaconV1';
import { IBeaconsPersistence } from '../../src/persistence/IBeaconsPersistence';
import { IBeaconsController } from './IBeaconsController';
import { BeaconTypeV1 } from '../../src/data/version1/BeaconTypeV1';
import { BeaconsCommandSet } from './BeaconsCommandSet';
‍
export class BeaconsController implements IBeaconsController, IConfigurable, IReferenceable, ICommandable {
    private _persistence: IBeaconsPersistence;    private _commandSet: BeaconsCommandSet;
‍
    public constructor() { }
‍
    public configure(config: ConfigParams): void {
‍
    }
‍
    public setReferences(references: IReferences): void {
        this._persistence = references.getOneRequired&lt;IBeaconsPersistence&gt;(
            new Descriptor('beacons', 'persistence', '*', '*', '1.0')
        );
    }
    public getCommandSet(): CommandSet {
        if (this._commandSet == null) {
            this._commandSet = new BeaconsCommandSet(this);
        }
‍
        return this._commandSet;
    }
‍
    public getBeacons(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage&lt;BeaconV1&gt;) =&gt; void): void {
        this._persistence.getPageByFilter(correlationId, filter, paging, callback);
    }
‍
    public getBeaconById(correlationId: string, beaconId: string,
        callback: (err: any, page: BeaconV1) =&gt; void): void {
            this._persistence.getOneById(correlationId, beaconId, callback);
    }
‍
    public getBeaconByUdi(correlationId: string, beaconId: string,
        callback: (err: any, page: BeaconV1) =&gt; void): void {
            this._persistence.getOneByUdi(correlationId, beaconId, callback);
    }
‍
    public calculatePosition(correlationId: string, siteId: string, udis: string[],
        callback: (err: any, position: any) =&gt; void): void {
            let beacons: BeaconV1[];
            let position: any = null;
‍
            if (udis == null || udis.length == 0) {
                callback(null, null);
                return;
            }
‍
            async.series([
                (callback) =&gt; {
                    this._persistence.getPageByFilter(
                        correlationId,
                        FilterParams.fromTuples(
                            'site_id', siteId,
                            'udis', udis
                        ),
                        null,
                        (err, page) =&gt; {
                            beacons = page ? page.data : [];
                            callback(err);
                        }
                    );
                },
                (callback) =&gt; {
                    let lat = 0;
                    let lng = 0;
                    let count = 0;
‍
                    for (let beacon of beacons) {
                        if (beacon.center != null
                             &amp;&amp; beacon.center.type == 'Point'
                            &amp;&amp; _.isArray(beacon.center.coordinates)) {
                                lng += beacon.center.coordinates[0];
                                lat += beacon.center.coordinates[1];
                                count += 1;
                            }
                    }
‍
                    if (count &gt; 0) {
                        position = {
                            type: 'Point',
                            coordinates: [lng / count, lat / count]
                        }
                    }
‍
                    callback();
                }
            ], (err) =&gt; { callback(err, err == null ? position : null);  });
    }
‍
    public createBeacon(correlationId: string, beacon: BeaconV1,
        callback: (err: any, beacon: BeaconV1) =&gt; void): void {
            beacon.id = beacon.id || IdGenerator.nextLong();
            beacon.type = beacon.type || BeaconTypeV1.Unknown;
‍
            this._persistence.create(correlationId, beacon, callback);
    }
‍
    public updateBeacon(correlationId: string, beacon: BeaconV1,
        callback: (err: any, beacon: BeaconV1) =&gt; void): void {
            beacon.type = beacon.type || BeaconTypeV1.Unknown;
‍
            this._persistence.update(correlationId, beacon, callback);
    }
‍
    public deleteBeaconById(correlationId: string, beaconId: string,
        callback: (err: any, beacon: BeaconV1) =&gt; void): void {
           this._persistence.deleteById(correlationId, beaconId, callback);
    }
}

```

Pay special attention to the following two methods in the code above: 
- `setReferences`
- `getCommandSet`

The first one sets a dependency upon a persistence using the descriptor **beacons:persistence:*:*:1.0.** This descriptor reads: we don’t necessarily care which persistence we are given, as long as it implements the IBeaconsPersistence interface via the Referenceable pattern. This way, our controller can be used with the memory persistence, the mongoDB one, or any other one that meets this requirement.

The second method is used to get a set of commands, with which we can control this controller using the Commandable pattern. In our case, it will be used by the commandable HTTP service. If you’re not yet familiar with the Commandable pattern, make sure to find some time and read about it [here](). To complete this pattern, lets implement a class called `BeaconsCommandSet`:

**/src/logic/BeaconsCommandSet.ts**

```typescript
 import { CommandSet, FilterParams, PagingParams } from 'pip-services3-commons-node';
import { ICommand } from 'pip-services3-commons-node';
import { Command } from 'pip-services3-commons-node';
import { ObjectSchema } from 'pip-services3-commons-node';
import { FilterParamsSchema } from 'pip-services3-commons-node';
import { PagingParamsSchema } from 'pip-services3-commons-node';
import { ArraySchema } from 'pip-services3-commons-node';
import { TypeCode } from 'pip-services3-commons-node';
import { Parameters } from 'pip-services3-commons-node';
‍
import { BeaconV1Schema } from '../../src/data/version1/BeaconV1Schema';
import { IBeaconsController } from '../../src/logic/IBeaconsController';
‍
export class BeaconsCommandSet extends CommandSet {
    private _controller: IBeaconsController;
‍
    constructor(controller: IBeaconsController) {
        super();
‍
        this._controller = controller;
‍
        this.addCommand(this.makeGetBeaconsCommand());
        this.addCommand(this.makeGetBeaconByIdCommand());
        this.addCommand(this.makeGetBeaconByUdiCommand());
        this.addCommand(this.makeCalculatePositionCommand());
        this.addCommand(this.makeCreateBeaconCommand());
        this.addCommand(this.makeUpdateBeaconCommand());
        this.addCommand(this.makeDeleteBeaconByIdCommand());
    }
    private makeGetBeaconsCommand(): ICommand {
        return new Command(
            'get_beacons',
            new ObjectSchema(true)
                .withOptionalProperty('filter', new FilterParamsSchema())
                .withOptionalProperty('paging', new PagingParamsSchema()),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) =&gt; void) =&gt; {
                let filter = FilterParams.fromValue(args.get('filter'));
                let paging = PagingParams.fromValue(args.get('paging'));
                this._controller.getBeacons(correlationId, filter, paging, callback);
            }
        );
    }
‍
    private makeGetBeaconByIdCommand(): ICommand {
        return new Command(
            'get_beacon_by_id',
            new ObjectSchema(true)
                .withRequiredProperty('beacon_id', TypeCode.String),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) =&gt; void) =&gt; {
                let beaconId = args.getAsString('beacon_id');
                this._controller.getBeaconById(correlationId, beaconId, callback);
            }
        );
    }
‍
    private makeGetBeaconByUdiCommand(): ICommand {
        return new Command(
            'get_beacon_by_udi',
            new ObjectSchema(true)
                .withRequiredProperty('udi', TypeCode.String),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) =&gt; void) =&gt; {
                let udi = args.getAsString('udi');
                this._controller.getBeaconByUdi(correlationId, udi, callback);
            }
        );
    }
‍
    private makeCalculatePositionCommand(): ICommand {
        return new Command(
            'calculate_position',
            new ObjectSchema(true)
                .withRequiredProperty('site_id', TypeCode.String)
                .withRequiredProperty('udis', new ArraySchema(TypeCode.String)),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) =&gt; void) =&gt; {
                let siteId = args.getAsString('site_id');
                let udis = args.getAsObject('udis');
                this._controller.calculatePosition(correlationId, siteId, udis, callback);
            }
        );
    }
‍
    private makeCreateBeaconCommand(): ICommand {
        return new Command(
            'create_beacon',
            new ObjectSchema(true)
                .withRequiredProperty('beacon', new BeaconV1Schema()),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) =&gt; void) =&gt; {
                let beacon = args.getAsObject('beacon');
                this._controller.createBeacon(correlationId, beacon, callback);
            }
        );
    }
   
    private makeUpdateBeaconCommand(): ICommand {
        return new Command(
            'update_beacon',
            new ObjectSchema(true)
                .withRequiredProperty('beacon', new BeaconV1Schema()),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) =&gt; void) =&gt; {
                let beacon = args.getAsObject('beacon');
                this._controller.updateBeacon(correlationId, beacon, callback);
            }
        );
    } 
    private makeDeleteBeaconByIdCommand(): ICommand {
        return new Command(
            'delete_beacon_by_id',
            new ObjectSchema(true)
                .withRequiredProperty('beacon_id', TypeCode.String),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) =&gt; void) =&gt; {
                let beaconId = args.getAsString('beacon_id');
                this._controller.deleteBeaconById(correlationId, beaconId, callback);
            }
        );
    }
}

```

To sum up this class’s code: we’re creating commands for each of the controller’s methods, and then registering them in the constructor. To create a command, we give it a name, a validation schema (if needed), and a callback function with the following three parameters:

- `correlationId`: string – used to identify the operation,
- `args`: Parameters - the set of parameters received from the command being called,
- `callback` – callback function for returning the command’s result, or an error, if one occurs.

To be sure that our new methods are working correctly, let’s add some tests for the controller. The code for testing the controller is listed below:

**/test/logic/BeaconsController.test.ts**

```typescript
let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;
‍
import { ConfigParams } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
‍
import { BeaconV1 } from '../../src/data/version1/BeaconV1';
import { BeaconTypeV1 } from '../../src/data/version1/BeaconTypeV1';
import { BeaconsMemoryPersistence } from '../../src/persistence/BeaconsMemoryPersistence';
import { BeaconsController } from '../../src/logic/BeaconsController';
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
‍
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
suite('BeaconsController', () =&gt; {
    let persistence: BeaconsMemoryPersistence;
    let controller: BeaconsController;
‍
    setup((done) =&gt; {
        persistence = new BeaconsMemoryPersistence();
        persistence.configure(new ConfigParams());
‍
        controller = new BeaconsController();
        controller.configure(new ConfigParams());
‍
        let references = References.fromTuples(
            new Descriptor('beacons', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('beacons', 'controller', 'default', 'default', '1.0'), controller
        );
‍
        controller.setReferences(references);
‍
        persistence.open(null, done);
    });
‍
    teardown((done) =&gt; {
        persistence.close(null, done);
    });
‍
    test('CRUD Operations', (done) =&gt; {
        let beacon1: BeaconV1;
‍
        async.series([
            // Create the first beacon 
           (callback) =&gt; {
                controller.createBeacon(
                    null,
                    BEACON1,
                    (err, beacon) =&gt; {
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
                controller.createBeacon(
                    null,
                    BEACON2,
                    (err, beacon) =&gt; {
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
                controller.getBeacons(
                    null,
                    new FilterParams(),
                    new PagingParams(),
                    (err, page) =&gt; {
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
                controller.updateBeacon(
                    null,
                    beacon1,
                    (err, beacon) =&gt; {
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
                controller.getBeaconByUdi(
                     null,
                     beacon1.udi,
                    (err, beacon) =&gt; {
                        assert.isNull(err);
‍
                        assert.isObject(beacon);
                        assert.equal(beacon1.id, beacon.id);
‍
                        callback();
                    }
                )
            },
            // Delete the beacon
            (callback) =&gt; {
                controller.deleteBeaconById(
                    null,
                    beacon1.id,
                    (err, beacon) =&gt; {
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
                controller.getBeaconById(
                    null,
                    beacon1.id,
                    (err, beacon) =&gt; {
                        assert.isNull(err);
‍
                        assert.isNull(beacon || null);
‍
                        callback();
                    }
                ) 
           }
        ], done);
    });

    test('Calculate Positions', (done) =&gt; {
        async.series([
            // Create the first beacon
            (callback) =&gt; {
                controller.createBeacon(
                    null,
                    BEACON1,
                    (err, beacon) =&gt; {
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
                controller.createBeacon(
                    null,
                    BEACON2,
                    (err, beacon) =&gt; {
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
            // Calculate position for one beacon
            (callback) =&gt; {
                controller.calculatePosition(
                    null, '1', ['00001'],
                    (err, position) =&gt; {
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
            // Calculate position for two beacons
            (callback) =&gt; {
                controller.calculatePosition(
                    null, '1', ['00001', '00002'],
                    (err, position) =&gt; {
                        assert.isNull(err);
‍
                        assert.isObject(position);
                        assert.equal('Point', position.type);
                        assert.lengthOf(position.coordinates, 2);
                        assert.equal(1, position.coordinates[0]);
                        assert.equal(1, position.coordinates[1]);
‍
                        callback();
                    }
                )
            }
        ], done);
    });
});

```

These tests can be run using the same npm test command that we used to run the persistence tests.

Our service is now just one step away from being completed! All that we have left to write is [Step 5. Implementing an HTTP service.](../step5)