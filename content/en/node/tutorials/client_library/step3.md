---
type: docs
no_list: true
title: "Step 4. Designing an HTTP Client"
linkTitle: "Step 4. HTTP Client" 
gitUrl: "https://github.com/pip-services-samples/client-beacons-node"
---

The standard way of communicating with a microservice is via the HTTP protocol. It allows calling microservices that work on a separate server, or in their own container. Our example microservice uses a simplified version of the HTTP protocol that is automatically generated using the Commandable pattern.    
Then, creates a new class for the Commandable REST client and an implementation for each of the microservice’s methods. This is done by calling the REST API’s methods using the methods of the parent Commandable REST client, passing the necessary set of parameters, and then processing the response’s result. Since the answer from the client is returned as JSON, some programming languages will require that you first convert it to an instance with a specific type. Be sure to remember this when writing your HTTP clients.

The client’s resulting code is listed below:

**/src/version1/BeaconsHttpClientV1.ts**

```typescript
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';

import { BeaconV1 } from './BeaconV1';
import { IBeaconsClientV1 } from './IBeaconsClientV1';

export class BeaconsHttpClientV1 extends CommandableHttpClient implements IBeaconsClientV1 {
    public constructor() {
        super('v1/beacons');
    }

    public getBeacons(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<BeaconV1>) => void): void {
        this.callCommand(
            'get_beacons',
            correlationId,
            { filter: filter, paging: paging },
            callback
        );
    }

    public getBeaconById(correlationId: string, beaconId: string,
        callback: (err: any, beacon: BeaconV1) => void): void {
        this.callCommand(
            'get_beacon_by_id',
            correlationId,
            {
                beacon_id: beaconId
            },
            callback
        );
    }

    public getBeaconByUdi(correlationId: string, udi: string,
        callback: (err: any, beacon: BeaconV1) => void): void {
        this.callCommand(
            'get_beacon_by_udi',
            correlationId,
            {
                udi: udi
            },
            callback
        );
    }

    public calculatePosition(correlationId: string, siteId: string, udis: string[], 
        callback: (err: any, position: any) => void): void {
        this.callCommand(
            'calculate_position',
            correlationId,
            {
                site_id: siteId,
                udis: udis
            },
            callback
        );    
    }

    public createBeacon(correlationId: string, beacon: BeaconV1,
        callback: (err: any, beacon: BeaconV1) => void): void {
        this.callCommand(
            'create_beacon',
            correlationId,
            {
                beacon: beacon
            },
            callback
        );
    }

    public updateBeacon(correlationId: string, beacon: BeaconV1,
        callback: (err: any, beacon: BeaconV1) => void): void {
        this.callCommand(
            'update_beacon',
            correlationId,
            {
                beacon: beacon
            },
            callback
        );    
    }

    public deleteBeaconById(correlationId: string, beaconId: string,
        callback: (err: any, beacon: BeaconV1) => void): void {
        this.callCommand(
            'delete_beacon_by_id',
            correlationId,
            {
                beacon_id: beaconId
            },
            callback
        );
    }
}
```

To be sure that our code works as intended, we should perform some functional testing. Test the Commandable HTTP REST client using the class with tests that we developed in the previous step. To do this, create an instance of the HTTP REST client and pass it as a parameter to our set of tests.
An example implementation of the tests can be found in the example’s [repository](https://github.com/pip-services-samples/client-beacons-node/blob/master/test/version1/BeaconsDirectClientV1.test.ts)

All tests should pass successfully.This finishes the development of our clients. As a result, we ended up with 2 clients: one for working from within a monolithic application, and another for working with the microservice from a different application, when utilizing a distributed architecture.

To simulate the service, let's create a test client in [Step 5. Implementing a Mock Client.](../step4)


<span class="hide-title-link">

### [Step 5. Implementing a Mock Client.](../step4)

</span>
