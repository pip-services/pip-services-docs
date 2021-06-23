---
type: docs
no_list: true
title: "Step 4. Implementing Mock Client"
linkTitle: "Step 4. Mock Client" 
gitUrl: "https://github.com/pip-services-samples/client-beacons-node"
---

Complex systems usually experience difficulties when it comes to writing unit tests for a logic that calls external services. These tests are supposed to run quickly and without any additional infrastructure. The standard approach to solving this problem is to replace the calls to external services with a local approximation (a.k.a. a mock). However, writing mocks takes time and doesn’t always guarantee functionality that matches the real service.

In our projects, we’ve come to the conclusion that it pays off to develop mocks alongside the real clients and test them using common tests, to guarantee that their behavior is identical. This way, all users of the microservice will receive both the client and mock from the library and will be able to start coding logic and unit tests for it without delay.

In this step we will be demonstrating how Mock clients are developed and how they can be tested using the tests we created earlier.

The test client has to implement the same interface that the other clients did. However, the client’s methods are going to contain code that only imitates the microservice’s behavior.

The code for this client is showed below:

**/src/version1/BeaconsMockClientV1.ts**

```typescript

let _ = require('lodash');
let async = require('async');

import { FilterParams, IdGenerator } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';

import { BeaconV1 } from './BeaconV1';
import { IBeaconsClientV1 } from './IBeaconsClientV1';

export class BeaconsMockClientV1 implements IBeaconsClientV1 {
    private _maxPageSize: number = 100;
    private _items: BeaconV1[];

    public constructor(...items: BeaconV1[]) {
        this._items = items;
    }

    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();

        let id = filter.getAsNullableString('id');
        let siteId = filter.getAsNullableString('site_id');
        let label = filter.getAsNullableString('label');
        let udi = filter.getAsNullableString('udi');
        let udis = filter.getAsObject('udis');
        if (_.isString(udis))
            udis = udis.split(',');
        if (!_.isArray(udis))
            udis = null;

        return (item) => {
            if (id != null && item.id != id)
                return false;
            if (siteId != null && item.site_id != siteId)
                return false;
            if (label != null && item.label != label)
                return false;
            if (udi != null && item.udi != udi)
                return false;
            if (udis != null && _.indexOf(udis, item.udi) < 0)
                return false;
            return true;
        };
    }

    public getBeacons(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<BeaconV1>) => void): void {
        let filterBeacons = this.composeFilter(filter);
        let beacons = _.filter(this._items, filterBeacons);

        // Extract a page
        paging = paging != null ? paging : new PagingParams();
        let skip = paging.getSkip(-1);
        let take = paging.getTake(this._maxPageSize);

        let total = null;
        if (paging.total)
            total = beacons.length;

        if (skip > 0)
            beacons = _.slice(beacons, skip);
        beacons = _.take(beacons, take);

        let page = new DataPage<BeaconV1>(beacons, total);
        callback(null, page);
    }

    public getBeaconById(correlationId: string, beaconId: string,
        callback: (err: any, beacon: BeaconV1) => void): void {
        let beacons = this._items.filter((x) => { return x.id == beaconId; });
        let beacon = beacons.length > 0 ? beacons[0] : null;

        callback(null, beacon);
    }

    public getBeaconByUdi(correlationId: string, udi: string,
        callback: (err: any, beacon: BeaconV1) => void): void {
        let beacons = this._items.filter((x) => { return x.udi == udi; });
        let beacon = beacons.length > 0 ? beacons[0] : null;

        callback(null, beacon);
    }

    public calculatePosition(correlationId: string, siteId: string, udis: string[],
        callback: (err: any, position: any) => void): void {
        let beacons: BeaconV1[];
        let position: any = null;

        if (udis == null || udis.length == 0) {
            callback(null, null);
            return;
        }

        async.series([
            (callback) => {
                this.getBeacons(
                    correlationId,
                    FilterParams.fromTuples(
                        'site_id', siteId,
                        'udis', udis
                    ),
                    null,
                    (err, page) => {
                        beacons = page ? page.data : [];
                        callback(err);
                    }
                );
            },
            (callback) => {
                let lat = 0;
                let lng = 0;
                let count = 0;

                for (let beacon of beacons) {
                    if (beacon.center != null
                        && beacon.center.type == 'Point'
                        && _.isArray(beacon.center.coordinates)) {
                        lng += beacon.center.coordinates[0];
                        lat += beacon.center.coordinates[1];
                        count += 1;
                    }
                }

                if (count > 0) {
                    position = {
                        type: 'Point',
                        coordinates: [lng / count, lat / count]
                    }
                }

                callback();
            }
        ], (err) => { callback(err, err == null ? position : null); });
    }

    public createBeacon(correlationId: string, beacon: BeaconV1,
        callback: (err: any, beacon: BeaconV1) => void): void {
        if (beacon == null) {
            if (callback) callback(null, null);
            return;
        }

        beacon = _.clone(beacon);
        beacon.id = beacon.id || IdGenerator.nextLong();

        this._items.push(beacon);

        if (callback) callback(null, beacon)
    }

    public updateBeacon(correlationId: string, beacon: BeaconV1,
        callback: (err: any, beacon: BeaconV1) => void): void {
        let index = this._items.map((x) => { return x.id; }).indexOf(beacon.id);

        if (index < 0) {
            callback(null, null);
            return;
        }

        beacon = _.clone(beacon);
        this._items[index] = beacon;
        if (callback) callback(null, beacon)
    }

    public deleteBeaconById(correlationId: string, beaconId: string,
        callback: (err: any, beacon: BeaconV1) => void): void {
        var index = this._items.map((x) => { return x.id; }).indexOf(beaconId);
        var item = this._items[index];

        if (index < 0) {
            callback(null, null);
            return;
        }
        this._items.splice(index, 1);
        if (callback) callback(null, item)
    }
}
```

Now let’s test the client we’ve created. We’ll be using the set of tests that we developed in one of the previous steps, and adding just one test file that will bring it all together. The source of this file is presented below:

**/test/version1/BeaconsMockClient.test.ts**

```typescript

import { BeaconsMockClientV1 } from '../../src/version1/BeaconsMockClientV1';
import { BeaconsClientV1Fixture } from './BeaconsClientV1Fixture';

suite('BeaconsMockClientV1', () => {
   
    let client: BeaconsMockClientV1;
    let fixture: BeaconsClientV1Fixture;

    setup((done) => {
    
        client = new BeaconsMockClientV1();
        fixture = new BeaconsClientV1Fixture(client);
        done();
    });

    teardown((done) => {
        done();
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

    test('Calculate Positions', (done) => {
        fixture.testCalculatePosition(done);
    });
});


```

Create a file with the tests and run them. All the tests should pass, even though the server-side code wasn’t actually used anywhere.

This technique becomes very useful when developing microservices that bring together multiple microservices by means of their clients (e.g. a facade microservice). It allows us to perform functional testing without having to run the entire infrastructure.

To performing non-fuctional testing, we need to generate a large amount of realistic data. Users usually don’t know the entire data structure with all of its variations and exceptions. The next component we will be adding to our client library is a random data generator. This component can be used by the microservice’s users to create quality tests. The implementation is usually done in the form of static methods that either return an entire object, or just some part of its parameters. Let’s take a look at what an implementation of such a generator for the BeaconsV1 data object would look like. The generator’s code is listed below:


```typescript
import { RandomArray, RandomInteger } from 'pip-services3-commons-node';
import { BeaconV1 } from './BeaconV1'
import { BeaconTypeV1 } from './BeaconTypeV1'

export class RandomBeaconV1 {
    public static nextBeaconType(): string {
        return RandomArray.pick([BeaconTypeV1.AltBeacon, BeaconTypeV1.EddyStoneUdi, BeaconTypeV1.Unknown, BeaconTypeV1.iBeacon]);
    }

    public static nextBeaconCenter(): any {
        return {
            type: 'Point',
            center: {
                coordinates: [RandomInteger.nextInteger(1, 1000), RandomInteger.nextInteger(1, 1000)]
            }
        }
    }

    public static nextBeacon(): BeaconV1 {
        var beacon = new BeaconV1();
        beacon.type = RandomBeaconV1.nextBeaconType();
        beacon.radius = RandomInteger.nextInteger(1, 1000);
        beacon.udi = RandomArray.pick(['00001', '00002', '00003', '00004']);
        beacon.center = RandomBeaconV1.nextBeaconCenter();
        return beacon;
    }

}
```

In this implementation, the ranges of generated values are statically set, but they can be passed as parameters to the methods and dynamically set as needed.
Using this instrument, we can easily generate large volumes of realistic data. This, in turn, can be used to test, for example, how fast the system can create elements in the persistence it’s using.

In the [Step 5. Testing the Client with a Remote Microservice](../step5), we’ll be taking a look at how to test our client using a microservice that is remotely deployed in a Docker container.


<span class="hide-title-link">

### [Step 5. Testing the Client with a Remote Microservice](../step5)

</span>
