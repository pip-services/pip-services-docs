
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
