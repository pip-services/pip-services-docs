
```typescript

import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';

import { IdentifiableMongoDbPersistence } from 'pip-services3-mongodb-nodex';

import { BeaconV1 } from '../data/version1/BeaconV1';
import { IBeaconsPersistence } from './IBeaconsPersistence';

export class BeaconsMongoDbPersistence
    extends IdentifiableMongoDbPersistence<BeaconV1, string>
    implements IBeaconsPersistence {

    constructor() {
        super('beacons');
        this._maxPageSize = 1000;
    }

    public async getOneByUdi(correlationId: string, udi: string): Promise<BeaconV1> {
        let criteria = {
            udi: udi
        };

        return new Promise((resolve, reject) => {
            this._collection.findOne(criteria, (err, item) => {
                if (err != null) {
                    reject(err);
                    return;
                }

                if (item != null) this._logger.trace(correlationId, "Found beacon by %s", udi);
                else this._logger.trace(correlationId, "Cannot find beacon by %s", udi);
                
                item = this.convertToPublic(item);
                resolve(item);
            });    
        });     
    }
}

```
