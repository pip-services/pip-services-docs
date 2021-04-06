---
type: docs
no_list: true
title: "Step 3. Implementing persistence components (with tests)"
linkTitle: "Step 3"
---

In this step, we’ll be creating components for persisting the data model we defined in the previous step. In our projects, we always create at least two persistences: one for storing data in-memory (used for testing), and another for storing data in an external database (used in production). With the Beacons example, we’ll be doing the same.

Let’s start by navigating to the **src** directory and creating a **persistence** directory inside it. This directory is going to contain all of the files that relate to this step of the tutorial.

The first thing we are going to do is define what functionality our persistent storage should have. We can define these in a form of an interface and name it `IBeaconsPersistence`

**/src/persistence/IBeaconsPersistence.ts**

```typescript
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
‍
import { BeaconV1 } from '../data/version1/BeaconV1';
‍
export interface IBeaconsPersistence {
    getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams,
         callback: (err: any, page: DataPage&lt;BeaconV1&gt;) =&gt; void): void;
‍
   getOneById(correlationId: string, id: string,
         callback: (err: any, item: BeaconV1) =&gt; void): void;
‍
   getOneByUdi(correlationId: string, udi: string,
         callback: (err: any, item: BeaconV1) =&gt; void): void;
‍
    create(correlationId: string, item: BeaconV1,
         callback: (err: any, item: BeaconV1) =&gt; void): void;

    update(correlationId: string, item: BeaconV1,
         callback: (err: any, item: BeaconV1) =&gt; void): void;
‍
    deleteById(correlationId: string, id: string,
         callback: (err: any, item: BeaconV1) =&gt; void): void;
}

```

The first persistence to implement this interface will be the memory persistence, which we will name **BeaconsMemoryPersistence**. This class will need to extend the `IdentifiableMemoryPersistence` class from the **pip-services3-data** module, and have a few additional functions added to it. One of these functions will be used to create filters for the `getPageByFilter` method that we’re going to override from the parent class. This function will be called `composeFilter`, as it’s going to allow us to filter data in accordance with the received filtering parameters. The overriding `getPageByFilter` method then simply calls the parent’s method, passing the `composeFilter` function as a filter parameter. The second function that we will need to implement is the `getOneByUdi` method, whose purpose will be to retrieve a beacon by its `udi`.

The resulting code for this class is listed below:

**/src/persistence/BeaconsMemoryPersistence.ts**

```typescript
let _ = require('lodash');
‍
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
‍
import { IdentifiableMemoryPersistence } from 'pip-services3-data-node';
‍
import { BeaconV1 } from '../data/version1/BeaconV1';
import { IBeaconsPersistence } from './IBeaconsPersistence';
‍
export class BeaconsMemoryPersistence
    extends IdentifiableMemoryPersistence&lt;BeaconV1, string&gt;
    implements IBeaconsPersistence {
‍
    constructor() {
        super();
‍
        this._maxPageSize = 1000;    }
‍
    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();
‍
        let id = filter.getAsNullableString('id');
        let siteId = filter.getAsNullableString('site_id');
        let label = filter.getAsNullableString('label');
        let udi = filter.getAsNullableString('udi');
        let udis = filter.getAsObject('udis');
        if (_.isString(udis))
            udis = udis.split(',');
        if (!_.isArray(udis))
            udis = null;
‍
        return (item) =&gt; {
            if (id != null &amp;&amp; item.id != id)
                return false;
            if (siteId != null &amp;&amp; item.site_id != siteId)
                return false;
            if (label != null &amp;&amp; item.label != label)
                return false;
            if (udi != null &amp;&amp; item.udi != udi)
                return false;
            if (udis != null &amp;&amp; _.indexOf(udis, item.udi) &lt; 0)
                return false;
            return true;
        };
    }
    public getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage&lt;BeaconV1&gt;) =&gt; void): void {
        super.getPageByFilter(correlationId, this.composeFilter(filter), paging, null, null, callback);
    }
    public getOneByUdi(correlationId: string, udi: string,
        callback: (err: any, item: BeaconV1) =&gt; void): void {
‍
        let item = _.find(this._items, (item) =&gt; item.udi == udi);
‍
        if (item != null) this._logger.trace(correlationId, "Found beacon by %s", udi);
        else this._logger.trace(correlationId, "Cannot find beacon by %s", udi);
‍
        callback(null, item);
    }
}

```

And that’s pretty much it for the memory persistence.

Now let’s move on to something a bit more sophisticated - a MongoDB persistence. Here we’re also going to use an already existing base class, `IdentifiableMongoDbPersistence`, from the **pip-services3-mongodb** module, and write a few functions, the most important of which will be `composeFilter`. This time around, its implementation is going to contain syntax for creating database requests. The resulting code for this class is listed below: 

**/src/persistence/BeaconsMongoDbPersistence.ts**

```typescript
import { IdentifiableMongoDbPersistence } from 'pip-services3-mongodb-node';
‍
import { BeaconV1 } from '../data/version1/BeaconV1';
import { IBeaconsPersistence } from './IBeaconsPersistence';
import { BeaconsMongoDbSchema } from './BeaconsMongoDbSchema';
‍
export class BeaconsMongoDbPersistence
    extends IdentifiableMongoDbPersistence&lt;BeaconV1, string&gt;
    implements IBeaconsPersistence {
    constructor() {
        super('beacons', BeaconsMongoDbSchema());
        this._maxPageSize = 1000;
    }
‍
    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();
        let criteria = [];
        let id = filter.getAsNullableString('id');
        if (id != null)
             criteria.push({ _id: id });
‍
        let siteId = filter.getAsNullableString('site_id');
        if (siteId != null)
            criteria.push({ site_id: siteId });
‍
        let label = filter.getAsNullableString('label');
        if (label != null)
            criteria.push({ label: label });
‍
        let udi = filter.getAsNullableString('udi');
        if (udi != null) {
            criteria.push({ udi: udi });
        }
‍
        let udis = filter.getAsObject('udis');
        if (_.isString(udis))
            udis = udis.split(',');
        if (_.isArray(udis))
            criteria.push({ udi: { $in: udis } });
‍
        return criteria.length &gt; 0 ? { $and: criteria } : null;
    }
‍
    public getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage&lt;BeaconV1&gt;) =&gt; void): void {
        super.getPageByFilter(correlationId, this.composeFilter(filter), paging, null, null, callback);
    }
    public getOneByUdi(correlationId: string, udi: string,
        callback: (err: any, item: BeaconV1) =&gt; void): void {
‍
        let criteria = {
            udi: udi
        };
‍
        this._model.findOne(criteria, (err, item) =&gt; {
            item = this.convertFromPublic(item);
            if (item != null) this._logger.trace(correlationId, "Found beacon by %s", udi);
            else this._logger.trace(correlationId, "Cannot find beacon by %s", udi);
‍
            callback(err, item);
        });
    }
}
```

Let’s take a quick look at what’s in this code. A basic set of CRUD operations are already implemented in the data module. There’s minimal code that needs to be written by us as developers for this class: just a filter function, and non-standard methods for searching by a specific data field. The rest of the methods that we defined in our interface are already implemented in the parent class.

To make sure that the code does just what we expect it to do, let’s add some tests. We’ll be placing the files with our tests in the **test** directory and organizing them into subdirectories, whose names will reflect the components they are testing.

Thanks to the modular structure of microservices, each component is easily testable with the help of simple mock tests. We’ll start with creating a class that contains a set of testable commands and checks the results we receive with the help of standard testing libraries. This class will be accepting any persistence that implements our `IBeaconsPersistence` interface as a parameter. This way we can use the same set of commands to test both of our persistence implementations. This set of commands should contain standard CRUD operations, which are implemented in the parent class, as well as the methods we’ve added in the child classes.

**/test/persistence/BeaconsPersistenceFixture.ts**

```typescript
let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;
‍
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';

import { BeaconV1 } from '../../src/data/version1/BeaconV1';
import { BeaconTypeV1 } from '../../src/data/version1/BeaconTypeV1';
import { IBeaconsPersistence } from '../../src/persistence/IBeaconsPersistence';
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
const BEACON3: BeaconV1 = {
    id: '3',
    udi: '00003',
    type: BeaconTypeV1.AltBeacon,
    site_id: '2',
    label: 'TestBeacon3',
    center: { type: 'Point', coordinates: [ 10, 10 ] },
    radius: 50
};
export
 class BeaconsPersistenceFixture {
    private _persistence: IBeaconsPersistence;
‍
    public constructor(persistence: IBeaconsPersistence) {
        assert.isNotNull(persistence);
        this._persistence = persistence;
    }
‍
    private testCreateBeacons(done) {
        async.series([
            // Create the first beacon
            (callback) =&gt; {
                this._persistence.create(
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
                this._persistence.create(
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
            // Create the third beacon
            (callback) =&gt; {
                this._persistence.create(
                    null,
                    BEACON3,
                    (err, beacon) =&gt; {
                        assert.isNull(err);
‍
                        assert.isObject(beacon);
                        assert.equal(BEACON3.udi, beacon.udi);
                        assert.equal(BEACON3.site_id, beacon.site_id);
                        assert.equal(BEACON3.type, beacon.type);
                        assert.equal(BEACON3.label, beacon.label);
                        assert.isNotNull(beacon.center);
‍
                        callback();
                    }
                );
            }
        ], done);
    }
‍
    public testCrudOperations(done) {
        let beacon1: BeaconV1;
‍
        async.series([
            // Create items
            (callback) =&gt; {
                this.testCreateBeacons(callback);
            },
            // Get all beacons
            (callback) =&gt; {
                this._persistence.getPageByFilter(
                    null,
                    new FilterParams(),
                    new PagingParams(),
                    (err, page) =&gt; {
                        assert.isNull(err);
‍
                        assert.isObject(page);
                        assert.lengthOf(page.data, 3);
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
                this._persistence.update(
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
                this._persistence.getOneByUdi(
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
            }
,            // Delete the beacon
            (callback) =&gt; {
                this._persistence.deleteById(
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
                this._persistence.getOneById(
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
    }
‍
    public testGetWithFilters(done) {
        async.series([
            // Create items
            (callback) =&gt; {
                this.testCreateBeacons(callback);
            },
            // Filter by id
            (callback) =&gt; {
                this._persistence.getPageByFilter(
                    null,
                    FilterParams.fromTuples(
                        'id', '1'
                    ),
                    new PagingParams(),
                    (err, page) =&gt; {
                        assert.isNull(err);
‍
                        assert.lengthOf(page.data, 1);
‍
                        callback();
                    }
                )
            },
            // Filter by udi
            (callback) =&gt; {
                this._persistence.getPageByFilter(
                    null,
                    FilterParams.fromTuples(
                        'udi', '00002'
                    ),
                    new PagingParams(),
                    (err, page) =&gt; {
                        assert.isNull(err);
‍
                        assert.lengthOf(page.data, 1);
‍
                        callback();
                    }
                )
            },
            // Filter by udis
            (callback) =&gt; {
                this._persistence.getPageByFilter(
                    null,
                    FilterParams.fromTuples(
                        'udis', '00001,00003'
                    ),
                    new PagingParams(),
                    (err, page) =&gt; {
                        assert.isNull(err);
‍
                        assert.lengthOf(page.data, 2);
‍
                        callback();
                    }
                )
            },
            // Filter by site_id
            (callback) =&gt; {
                this._persistence.getPageByFilter(
                    null,
                    FilterParams.fromTuples(
                        'site_id', '1'
                    )
,                    new PagingParams(),
                    (err, page) =&gt; {
                        assert.isNull(err);
‍
                        assert.lengthOf(page.data, 2);
‍
                        callback();
                    }
                )
            },
        ], done);
    }
}
```

Now that we have a set of tests, we can dive into the testing itself. To do this, we’ll create files for testing each of our persistences and run them.

**/test/persistence/BeaconsMemoryPersistence.test.ts**

```typescript
import { ConfigParams } from 'pip-services3-commons-node';
import {BeaconsMemoryPersistence} from  '../../src/persistence/BeaconsMemoryPersistence';
import { BeaconsPersistenceFixture } from './BeaconsPersistenceFixture';
‍
suite('BeaconsMemoryPersistence', () =&gt; {
    let persistence: BeaconsMemoryPersistence;
    let fixture: BeaconsPersistenceFixture;
‍
    setup((done) =&gt; {
        persistence = new BeaconsMemoryPersistence();
        persistence.configure(new ConfigParams());
‍
        fixture = new BeaconsPersistenceFixture(persistence);
‍
        persistence.open(null, done);
    });
‍
    teardown((done) =&gt; {
        persistence.close(null, done);
    });
‍
    test('CRUD Operations', (done) =&gt; {
        fixture.testCrudOperations(done);
    });
    test('Get with Filters', (done) =&gt; {
        fixture.testGetWithFilters(done);
    });
});

```

To run these tests, run the command npm test from a terminal at the root of the project.

<em>“But where exactly is the data going to be stored when we get the service actually up and running?”</em> you may ask. Jumping ahead, we’ll tell you that the config.yml configuration file takes care of that. It contains configurations for all of the service’s components, such as: which logger to use, where performance counter output should be, what database to connect to and using what parameters, etc. We’ll discuss this in more detail later on in this tutorial.

Now that we can persist our data, let’s move on to [Step 4. Implementing a controller.](../step4)