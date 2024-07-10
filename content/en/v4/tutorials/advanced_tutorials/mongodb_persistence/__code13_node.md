
```ts
export class BeaconsMongoDbPersistence
    extends IdentifiableMongoDbPersistence<BeaconV1, string>
    implements IBeaconsPersistence {

    constructor() {
        super('beacons');
        this._maxPageSize = 1000;
    }

    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();

        let criteria = [];

        let id = filter.getAsNullableString('id');
        if (id != null) {
            criteria.push({ _id: id });
        }

        let siteId = filter.getAsNullableString('site_id');
        if (siteId != null) {
            criteria.push({ site_id: siteId });
        }

        let label = filter.getAsNullableString('label');
        if (label != null) {
            criteria.push({ label: label });
        }

        let udi = filter.getAsNullableString('udi');
        if (udi != null) {
            criteria.push({ udi: udi });
        }

        let udis = filter.getAsObject('udis');
        if (typeof udis === "string") {
            udis = udis.split(',');
        }
        if (Array.isArray(udis)) {
            criteria.push({ udi: { $in: udis } });
        }

        return criteria.length > 0 ? { $and: criteria } : null;
    }

    public async getPageByFilter(ctx: Context, filter: FilterParams,
        paging: PagingParams): Promise<DataPage<BeaconV1>> {
            DataPage.
        return super.getPageByFilter(ctx, this.composeFilter(filter), paging, null, null);
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
