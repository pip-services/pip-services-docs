---
type: docs
no_list: true
title: "Step 5. Implementing a controller"
linkTitle: "Step 5. Controller"
gitUrl: "https://github.com/pip-services-samples/service-beacons-node"
---

Now that we know a bit about how we are going to be storing data and how microservice configuration works, it’s time to add some logic to our service. Our microservice needs to be able to calculate a device’s position based on the beacons it “sees”, as well as initiate CRUD operations for the data it handles. Let’s create a **logic** folder under the **src** directory and start by defining an interface:

**/src/logic/IBeaconsController.ts**

```typescript
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';

import { BeaconV1 } from '../../src/data/version1/BeaconV1';

export interface IBeaconsController {
    getBeacons(correlationId: string, filter: FilterParams,
        paging: PagingParams): Promise<DataPage<BeaconV1>>;

    getBeaconById(correlationId: string, beaconId: string): Promise<BeaconV1>;

    getBeaconByUdi(correlationId: string, beaconId: string): Promise<BeaconV1>;

    calculatePosition(correlationId: string, siteId: string, udis: string[]): Promise<any>;

    createBeacon(correlationId: string, beacon: BeaconV1): Promise<BeaconV1>;

    updateBeacon(correlationId: string, beacon: BeaconV1): Promise<BeaconV1>;

    deleteBeaconById(correlationId: string, beaconId: string): Promise<BeaconV1>;
}
```

Once our interface is ready, we can move on to implementing the actual controller. Its code is also going to be quite simple, as all we need to write is one method for calculating a device’s position, and the other methods will just be wrappers for the methods we wrote in our persistence components.

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

Pay special attention to the following two methods in the code above: 
- `setReferences`
- `getCommandSet`

The first one sets a dependency upon a persistence using the descriptor **beacons:persistence:*:*:1.0.** This descriptor reads: we don’t necessarily care which persistence we are given, as long as it implements the IBeaconsPersistence interface via the Referenceable pattern. This way, our controller can be used with the memory persistence, the mongoDB one, or any other one that meets this requirement.

The second method is used to get a set of commands, with which we can control this controller using the Commandable pattern. In our case, it will be used by the commandable HTTP service. If you’re not yet familiar with the Commandable pattern, make sure to find some time and read about it [here](../../../commons/commands/icommandable). To complete this pattern, lets implement a class called `BeaconsCommandSet`:

**/src/logic/BeaconsCommandSet.ts**

```typescript
import { CommandSet } from 'pip-services3-commons-nodex';
import { ICommand } from 'pip-services3-commons-nodex';
import { Command } from 'pip-services3-commons-nodex';
import { ObjectSchema } from 'pip-services3-commons-nodex';
import { FilterParamsSchema } from 'pip-services3-commons-nodex';
import { PagingParamsSchema } from 'pip-services3-commons-nodex';
import { ArraySchema } from 'pip-services3-commons-nodex';
import { TypeCode } from 'pip-services3-commons-nodex';
import { Parameters } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';

import { BeaconV1Schema } from '../../src/data/version1/BeaconV1Schema';
import { IBeaconsController } from '../../src/logic/IBeaconsController';

export class BeaconsCommandSet extends CommandSet {
    private _controller: IBeaconsController;

    constructor(controller: IBeaconsController) {
        super();

        this._controller = controller;

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
            async (correlationId: string, args: Parameters) => {
                let filter = FilterParams.fromValue(args.get('filter'));
                let paging = PagingParams.fromValue(args.get('paging'));
                return await this._controller.getBeacons(correlationId, filter, paging);
            }
        );
    }

    private makeGetBeaconByIdCommand(): ICommand {
        return new Command(
            'get_beacon_by_id',
            new ObjectSchema(true)
                .withRequiredProperty('beacon_id', TypeCode.String),
            async (correlationId: string, args: Parameters) => {
                let beaconId = args.getAsString('beacon_id');
                return await this._controller.getBeaconById(correlationId, beaconId);
            }
        );
    }

    private makeGetBeaconByUdiCommand(): ICommand {
        return new Command(
            'get_beacon_by_udi',
            new ObjectSchema(true)
                .withRequiredProperty('udi', TypeCode.String),
            async (correlationId: string, args: Parameters) => {
                let udi = args.getAsString('udi');
                return await this._controller.getBeaconByUdi(correlationId, udi);
            }
        );
    }

    private makeCalculatePositionCommand(): ICommand {
        return new Command(
            'calculate_position',
            new ObjectSchema(true)
                .withRequiredProperty('site_id', TypeCode.String)
                .withRequiredProperty('udis', new ArraySchema(TypeCode.String)),
            async (correlationId: string, args: Parameters) => {
                let siteId = args.getAsString('site_id');
                let udis = args.getAsObject('udis');
                return await this._controller.calculatePosition(correlationId, siteId, udis);
            }
        );
    }

    private makeCreateBeaconCommand(): ICommand {
        return new Command(
            'create_beacon',
            new ObjectSchema(true)
                .withRequiredProperty('beacon', new BeaconV1Schema()),
            async (correlationId: string, args: Parameters) => {
                let beacon = args.getAsObject('beacon');
                return await this._controller.createBeacon(correlationId, beacon);
            }
        );
    }   

    private makeUpdateBeaconCommand(): ICommand {
        return new Command(
            'update_beacon',
            new ObjectSchema(true)
                .withRequiredProperty('beacon', new BeaconV1Schema()),
            async (correlationId: string, args: Parameters) => {
                let beacon = args.getAsObject('beacon');
                return await this._controller.updateBeacon(correlationId, beacon);
            }
        );
    }   
    
    private makeDeleteBeaconByIdCommand(): ICommand {
        return new Command(
            'delete_beacon_by_id',
            new ObjectSchema(true)
                .withRequiredProperty('beacon_id', TypeCode.String),
            async (correlationId: string, args: Parameters) => {
                let beaconId = args.getAsString('beacon_id');
                return await this._controller.deleteBeaconById(correlationId, beaconId);
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
const assert = require('chai').assert;

import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';

import { BeaconV1 } from '../../src/data/version1/BeaconV1';
import { BeaconTypeV1 } from '../../src/data/version1/BeaconTypeV1';
import { BeaconsMemoryPersistence } from '../../src/persistence/BeaconsMemoryPersistence';
import { BeaconsController } from '../../src/logic/BeaconsController';

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

suite('BeaconsController', () => {
    let persistence: BeaconsMemoryPersistence;
    let controller: BeaconsController;

    setup(async () => {
        persistence = new BeaconsMemoryPersistence();
        persistence.configure(new ConfigParams());

        controller = new BeaconsController();
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

These tests can be run using the same npm test command that we used to run the persistence tests.

Our service is now just one step away from being completed! All that we have left to write is [Step 6. Implementing an HTTP service.](../step5)

<span class="hide-title-link">

### [Step 6. Implementing an HTTP service.](../step5)

</span>
