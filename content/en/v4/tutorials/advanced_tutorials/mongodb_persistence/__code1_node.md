
```ts

import { FilterParams } from 'pip-services4-data-node';
import { PagingParams } from 'pip-services4-data-node';
import { DataPage } from 'pip-services4-data-node';
import { Context } from 'pip-services4-components-node';

import { IdentifiableMongoDbPersistence } from 'pip-services4-mongodb-node';

import { BeaconV1 } from '../data/version1/BeaconV1';
import { IBeaconsPersistence } from './IBeaconsPersistence';

export class BeaconsMongoDbPersistence
    extends IdentifiableMongoDbPersistence<BeaconV1, string>
    implements IBeaconsPersistence {

    constructor() {
        super('beacons');
        this._maxPageSize = 1000;
    }

    public async getOneByUdi(ctx: Context, udi: string): Promise<BeaconV1> {
        let criteria = {
            udi: udi
        };

        return new Promise((resolve, reject) => {
            this._collection.findOne(criteria, (err, item) => {
                if (err != null) {
                    reject(err);
                    return;
                }

                if (item != null) this._logger.trace(ctx, "Found beacon by %s", udi);
                else this._logger.trace(ctx, "Cannot find beacon by %s", udi);
                
                item = this.convertToPublic(item);
                resolve(item);
            });    
        });     
    }
}


```
