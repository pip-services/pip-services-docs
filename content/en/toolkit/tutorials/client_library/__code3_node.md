
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
