---
type: docs
no_list: true
title: "Step 3. Business operations"
linkTitle: "Step 3. Business operations" 
gitUrl: "https://github.com/pip-services-samples/facade-sample-node"
---

Since facades are usually the point of entry into a system, they can contain dozens or even hundreds of REST operations. The classic microservices structure, when all the logic is contained in a single controller, becomes quite impractical in this case. Furthermore, it’s critical for a facade to support versioning. When the interface is changed, the facade must continue to provide stability for existing clients using interface versioning. Usually around 80% of the logic remains the same when an interface is changed, so duplicating the logic would just increase the amount of code and make it more difficult to support.


To solve these problems, the Pip.Services Toolkit offers a new pattern that breaks up logic into separate operations. The operations can be developed and tested individually, and then integrated into the RESTful service using unique routes. When implementing a new version, only the operations that require changes need to be rewritten. The remaining operations are simply imported from the old version by being reregistered in the new RESTful service.


The example facade in this tutorial will contain just 2 sets of operations:

- Operations that work with Beacons
- Operations for managing sessions and users

We’ll be creating a separate file for each set of operations and placing them in the folder **operations/version1**

Let’s start with the first set of operations - the ones responsible for working with Beacons.

Create a file named **BeaconsOperationsV1.ts** and place the following code inside:

**/src/operations/version1/BeaconsOperationsV1.ts**
```typescript
let _ = require('lodash');
let async = require('async');

import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node'; 
import { DependencyResolver } from 'pip-services3-commons-node';
import { RestOperations } from 'pip-services3-rpc-node';

import { IBeaconsClientV1 } from '../../clients/version1/IBeaconsClientV1';
import { BeaconV1 } from '../../clients/version1/BeaconV1';

export class BeaconsOperationsV2  extends RestOperations {
    private _beaconsClient: IBeaconsClientV1;

    public constructor() {
        super();

        this._dependencyResolver.put('beacons', new Descriptor('nov-services-beacons', 'client', '*', '*', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._beaconsClient = this._dependencyResolver.getOneRequired<IBeaconsClientV1>('beacons');
    }

    public getBeaconsX(req: any, res: any): void {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);

        let siteId = req.params.site_id;
        filter.setAsObject('site_id', siteId);

        this._beaconsClient.getBeacons(
            null, filter, paging, this.sendResult(req, res)
        );
    }

    public getBeaconX(req: any, res: any): void {
        let siteId = req.params.site_id;
        let beaconId = req.params.beacon_id;

        this._beaconsClient.getBeaconById(
            null, beaconId, this.sendResult(req, res)
        );
    }

    public calculatePositionX(req: any, res: any): void {
        let siteId = req.params.site_id;
        let udis = req.param('udis');
        if (_.isString(udis))
            udis = udis.split(',');

        this._beaconsClient.calculatePosition(
            null, siteId, udis, this.sendResult(req, res)
        );
    }
    
    public createBeaconX(req: any, res: any): void {
        let siteId = req.params.site_id;
        let beacon = req.body || {};

        this._beaconsClient.createBeacon(
            null, beacon, this.sendResult(req, res)
        );
    }

    public updateBeaconX(req: any, res: any): void {
        let beaconId = req.params.beacon_id;
        let siteId = req.params.site_id;
        let beacon = req.body || {};
        beacon.id = beaconId;

        this._beaconsClient.updateBeacon(
            null, beacon, this.sendResult(req, res)
        );
    }

    public deleteBeaconX(req: any, res: any): void {
        let beaconId = req.params.beacon_id;
        let siteId = req.params.site_id;

        this._beaconsClient.deleteBeaconById(
            null, beaconId, this.sendResult(req, res)
        );
    }

    public validateBeaconUdiX(req: any, res: any): void {
        let siteId = req.params.site_id;
        let udi = req.param('udi');

        this._beaconsClient.getBeaconByUdi(
            null, udi, (err, beacon) => {
                if (beacon) res.json(beacon.id);
                else res.json('');
            }
        );
    }
    
}
```

This component’s logic is based on calling the Beacons microservice via any client that implements the IBeaconsClientV1 interface. The component receives a link to the client through its SetReferences method (see the [Component References](../../../recipes/component_references)  recipe). The component’s business methods mainly just wrap the client’s methods to convert facade’s RESTful requests into calls to the client. Generally speaking, all of these methods perform the same set of steps: extract parameters from the request, call the corresponding method in the Beacons client, receive any results or errors, and send this information back as a response.


In the next (third) [Step 4 - Authentication and sessions](../step3) - we’ll be examining the second set of operations, which manage sessions and authenticate users.

<span class="hide-title-link">

### [Step 4. Authentication and sessions](../step3)

</span>
