---
type: docs
no_list: true
title: "Step 3. Designing a Direct Client"
linkTitle: "Step 3. Direct Client" 
gitUrl: "https://github.com/pip-services-samples/client-beacons-node"
---

Oftentimes systems that are created using a microservices architecture end up being assembled and installed as monoliths. Sometimes this is required as a transitional step, when the operations department isn’t quite yet ready to install and support such a fragmented system. It’s also common for startups, who usually have to deal with limited financial resources, to use this approach. Packing a large amount of microservices into a monolith allows teams to significantly reduce the amount of containers needed to get the system up and running. Such a system can easily be broken up into microservices in the future, when the startup is ready to support an increasing number of clients.

Direct clients are key to creating microservice-based monoliths. A direct client uses direct calls to the microservice’s controller from the shared address space, bypassing external interfaces in the process. On this step, we are going to create such a client. We’ll be placing our code in the **src/version1** folder.

First off, let's define an interface for our clients to implement. This interface should contain a list of all the methods that are provided by our microservice’s API. As a result, we get the following code:

**/src/version1/IBeaconClientV1.ts**

```typescript
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { BeaconV1 } from '../../../src/data/version1/BeaconV1';
export interface IBeaconsClientV1 {    
  getBeacons(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<BeaconV1>>;  

  getBeaconById(correlationId: string, beaconId: string): Promise<BeaconV1>;

  getBeaconByUdi(correlationId: string, udi: string): Promise<BeaconV1>;  

  calculatePosition(correlationId: string, siteId: string, udis: string[]): Promise<any>;    

  createBeacon(correlationId: string, beacon: BeaconV1): Promise<BeaconV1>;

  updateBeacon(correlationId: string, beacon: BeaconV1): Promise<BeaconV1>;

  deleteBeaconById(correlationId: string, beaconId: string): Promise<BeaconV1>;     
}

```

Let’s start writing our direct client. This will be a class that implements the interface we defined above, that has our controller set as a dependency in the controller, and that will call the controller’s methods when asked to. To learn more about the referencing and linking mechanisms, be sure to read [The Referenceable Recipes](../../../recipes/component_references/). Ultimately, this will just be a wrapper class for the container. 
The direct client’s code is listed below:

**src/version1/BeaconsDirectClientV1.ts**

```typescript
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';
import { Descriptor } from 'pip-services3-commons-node';

import { BeaconV1 } from './BeaconV1';
import { IBeaconsClientV1 } from './IBeaconsClientV1';
import { IBeaconsController } from 'pip-data-microservice-node';

export class BeaconsDirectClientV1 extends DirectClient<IBeaconsController> implements IBeaconsClientV1 {
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor('beacons', 'controller', '*', '*', '1.0'));
    }

    public async getBeacons(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<BeaconV1>> {
        let timing = this.instrument(correlationId, 'beacons.get_beacons');

        try {
            return await this._controller.getBeacons(correlationId, filter, paging);
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        }
    }

    public async getBeaconById(correlationId: string, beaconId: string): Promise<BeaconV1> {
        let timing = this.instrument(correlationId, 'beacons.get_beacon_by_id');

        try {
            return await this._controller.getBeaconById(correlationId, beaconId);
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        } 
    }

    public async getBeaconByUdi(correlationId: string, udi: string): Promise<BeaconV1> {
        let timing = this.instrument(correlationId, 'beacons.get_beacon_by_udi');

        try {
            return await this._controller.getBeaconByUdi(correlationId, udi);
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        } 
    }

    public async calculatePosition(correlationId: string, siteId: string, udis: string[]): Promise<any> {
        let timing = this.instrument(correlationId, 'beacons.calculate_position');

        try {
            return await this._controller.calculatePosition(correlationId, siteId, udis);
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        } 
    }

    public async createBeacon(correlationId: string, beacon: BeaconV1): Promise<BeaconV1> {
        let timing = this.instrument(correlationId, 'beacons.create_beacon');

        try {
            return await this._controller.createBeacon(correlationId, beacon);
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        } 
    }

    public async updateBeacon(correlationId: string, beacon: BeaconV1): Promise<BeaconV1> {
        let timing = this.instrument(correlationId, 'beacons.update_beacon');

        try {
            return await this._controller.updateBeacon(correlationId, beacon);
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        } 
    }

    public async deleteBeaconById(correlationId: string, beaconId: string): Promise<BeaconV1> {
        let timing = this.instrument(correlationId, 'beacons.delete_beacon_by_id');

        try {
            return await this._controller.deleteBeaconById(correlationId, beaconId);
        } catch (err) {
            timing.endFailure(err);
        } finally {
            timing.endSuccess();
        } 
    }
}
```

Now that we’re done writing the client, we should test it. 
To be sure that our code works as intended, we need to perform some functional testing. Let’s start with creating, in a separate class, a set of tests that will be common to all our clients. This will help us simplify the process of testing multiple clients, as well as make sure that they all work the same. We’ll place the code for our tests in the **test/version1** folder. The code for this class can be found in the [repository](https://github.com/pip-services-samples/client-beacons-node/blob/master/test/version1/BeaconsClientV1Fixture.ts).


Now, let’s test the direct client. To do this, create an instance of the direct client and pass it as a parameter to our set of tests. 
An example implementation of the tests can be found in the example’s [repository](https://github.com/pip-services-samples/client-beacons-node/blob/master/test/version1/BeaconsDirectClientV1.test.ts)


Run the tests using the testing methods that are standard for the programming language you are using. All tests should pass successfully.This finishes the development of the Direct client.
Move on to [Step 4. Designing an HTTP Client](../step3).


<span class="hide-title-link">

### [Step 4. Designing an HTTP Client](../step3)

</span>
