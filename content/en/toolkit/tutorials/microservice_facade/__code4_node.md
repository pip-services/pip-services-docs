
**/src/operations/version1/BeaconsOperationsV1.ts**
```typescript
let _ = require('lodash');
let async = require('async');

import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node'; 
import { RestOperations } from 'pip-services3-rpc-node';

import { IBeaconsClientV1 } from 'pip-clients-beacons-node';

export class BeaconsOperationsV1  extends RestOperations {
    private _beaconsClient: IBeaconsClientV1;

    public constructor() {
        super();

        this._dependencyResolver.put('beacons', new Descriptor('pip-services-beacons', 'client', '*', '*', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._beaconsClient = this._dependencyResolver.getOneRequired<IBeaconsClientV1>('beacons');
    }

    public getBeacons(req: any, res: any): void {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);

        this._beaconsClient.getBeacons(
            null, filter, paging, (err, page) => {
                if (err) {
                    this.sendError(req, res, err);
                } else {
                    res.json(page);
                    this.sendResult(req, res);
                }
            }
        );
    }

    public getBeaconById(req: any, res: any): void {
        let id = req.route.params.id;
        this._beaconsClient.getBeaconById(
            null, id, (err, item) => {
                if (err) {
                    this.sendError(req, res, err);
                } else {
                    res.json(item);
                    this.sendResult(req, res);
                }
            }
        );
    }

    public getBeaconByUdi(req: any, res: any): void {
        let udi = req.route.params.udi;
        this._beaconsClient.getBeaconByUdi(
            null, udi, (err, item) => {
                if (err) {
                    this.sendError(req, res, err);
                } else {
                    res.json(item);
                    this.sendResult(req, res);
                }
            }
        );
    }

    public createBeacon(req: any, res: any): void {
        let data = req.body;

        this._beaconsClient.createBeacon(
            null, data, (err, item) => {
                if (err) {
                    this.sendError(req, res, err);
                } else {
                    res.json(item);
                    this.sendResult(req, res);
                }
            }
        );
    }

    public updateBeacon(req: any, res: any): void {
        let data = req.body;

        this._beaconsClient.updateBeacon(
            null, data, (err, item) => {
                if (err) {
                    this.sendError(req, res, err);
                } else {
                    res.json(item);
                    this.sendResult(req, res);
                }
            }
        );
    }

    public deleteBeaconById(req: any, res: any): void {
        let id = req.route.params.id;

        this._beaconsClient.deleteBeaconById(
            null, id, (err, item) => {
                if (err) {
                    this.sendError(req, res, err);
                } else {
                    res.json(item);
                    this.sendResult(req, res);
                }
            }
        );
    }

    public calculatePosition(req: any, res: any): void {
        let orgId = req.route.params.org_id || req.body.org_id;
        let udis = req.route.params.udis || req.body.udis;
        if (_.isString(udis))
            udis = udis.split(',');
        if (!_.isArray(udis))
            udis = null;

        this._beaconsClient.calculatePosition(
            null, orgId, udis, (err, position) => {
                if (err) {
                    this.sendError(req, res, err);
                } else {
                    res.json(position);
                    this.sendResult(req, res);
                }
            }
        );
    }

}
```

