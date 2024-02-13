
```ts
export class MyIdentifiableMySqlPersistence extends IdentifiableMySqlPersistence<MyData, string> implements IMyDataPersistence {
    public constructor() {
        super('mydata');
    }

    protected defineSchema(): void {
        this.clearSchema();
        this.ensureSchema('CREATE TABLE `' + this._tableName + '` (id VARCHAR(32) PRIMARY KEY, `key` VARCHAR(50), `content` TEXT)');
        this.ensureIndex(this._tableName + '_key', { key: 1 }, { unique: true });
    }

    private composeFilter(filter: FilterParams): string {
        filter ??= new FilterParams();
        let key = filter.getAsNullableString("key");
        let content = filter.getAsNullableString("content");

        let filterCondition = "";
        if (key != null)
            filterCondition += "`key`='" + key + "'";
        if (content != null)
            filterCondition += "`content`='" + content + "'";

        return filterCondition;
    }

    private composeSort(sort: SortParams): string {
        sort ??= new SortParams();
        var composeSort = "";

        for (var i = 0; i < sort.length; i++)
            composeSort += sort[i].name + (sort[i].ascending ? " ASC" : " DESC");

        return composeSort != '' ? composeSort : null;
    }

    public getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams, sort: SortParams): Promise<DataPage<MyData>> {
        return super.getPageByFilter(correlationId, this.composeFilter(filter), paging, this.composeSort(sort), null);
    }

    public getCountByFilter(correlationId: string, filter: FilterParams): Promise<number> {
        return super.getCountByFilter(correlationId, this.composeFilter(filter));
    }

    public getListByFilter(correlationId: string, filter: FilterParams, sort: SortParams): Promise<MyData[]> {
        return super.getListByFilter(correlationId, this.composeFilter(filter), this.composeSort(sort), null);
    }

    public deleteByFilterParams(correlationId: string, filter: FilterParams): Promise<void> {
        return super.deleteByFilter(correlationId, this.composeFilter(filter));
    }
}
```
