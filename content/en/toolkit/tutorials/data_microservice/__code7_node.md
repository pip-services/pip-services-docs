
**/src/persistence/IBeaconsPersistence.ts**

```typescript
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';

import { BeaconV1 } from '../data/version1/BeaconV1';

export interface IBeaconsPersistence {
    getPageByFilter(correlationId: string, filter: FilterParams,
        paging: PagingParams): Promise<DataPage<BeaconV1>>;
    
    getOneById(correlationId: string, id: string): Promise<BeaconV1>;
    
    getOneByUdi(correlationId: string, udi: string): Promise<BeaconV1>;

    create(correlationId: string, item: BeaconV1): Promise<BeaconV1>;
    
    update(correlationId: string, item: BeaconV1): Promise<BeaconV1>;

    deleteById(correlationId: string, id: string): Promise<BeaconV1>;
}

```
