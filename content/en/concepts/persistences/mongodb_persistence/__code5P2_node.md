
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

    public getOneRandom(correlationId: string, filter: FilterParams): Promise<MyData> {
        return super.getOneRandom(correlationId, this.composeFilter(filter));
    }

    public getListByFilter(correlationId: string, filter: FilterParams, sort: SortParams): Promise<MyData[]> {
        return super.getListByFilter(correlationId, this.composeFilter(filter), this.composeSort(sort), null);
    }

    public getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams, sort: SortParams): Promise<DataPage<MyData>> {
        return super.getPageByFilter(correlationId, this.composeFilter(filter), paging, this.composeSort(sort), null);
    }

    public getCountByFilter(correlationId: string, filter: FilterParams): Promise<number> {
        return super.getCountByFilter(correlationId, this.composeFilter(filter));
    }

    public deleteByFilter(correlationId: string, filter: FilterParams): Promise<void> {
        return super.deleteByFilter(correlationId, this.composeFilter(filter));
    }
}

```
