
```ts
export class MyMongoDbPersistence extends MongoDbPersistence<MyData> {
    public constructor() {
        super('mydata');
    }

    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();
        let criteria = [];

        let key = filter.getAsNullableString('key');
        if (key != null)
            criteria.push({ key: key });

        return criteria.length > 0 ? { $and: criteria } : null;
    }

    private composeSort(sort: SortParams): any {
        sort = sort || new SortParams();
        let sortCondition = {};

        for (let field of sort) {
            sortCondition[field.name] = field.ascending ? 1 : 0;
        }

        return sortCondition;
    }

    public getOneRandom(ctx: Context, filter: FilterParams): Promise<MyData> {
        return super.getOneRandom(ctx, this.composeFilter(filter));
    }

    public getListByFilter(ctx: Context, filter: FilterParams, sort: SortParams): Promise<MyData[]> {
        return super.getListByFilter(ctx, this.composeFilter(filter), this.composeSort(sort), null);
    }

    public getPageByFilter(ctx: Context, filter: FilterParams, paging: PagingParams, sort: SortParams): Promise<DataPage<MyData>> {
        return super.getPageByFilter(ctx, this.composeFilter(filter), paging, this.composeSort(sort), null);
    }

    public getCountByFilter(ctx: Context, filter: FilterParams): Promise<number> {
        return super.getCountByFilter(ctx, this.composeFilter(filter));
    }

    public deleteByFilter(ctx: Context, filter: FilterParams): Promise<void> {
        return super.deleteByFilter(ctx, this.composeFilter(filter));
    }
}


```
