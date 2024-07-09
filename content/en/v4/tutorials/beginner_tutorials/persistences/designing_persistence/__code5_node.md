
```ts
export class MyIdentifiablePostgresPersistence extends IdentifiablePostgresPersistence<MyData, string> implements IMyDataPersistence {
    public constructor() {
        super('mydata');
    }

    protected defineSchema(): void {
        this.clearSchema();
        this.ensureSchema('CREATE TABLE ' + this._tableName + ' (id TEXT PRIMARY KEY, key TEXT, content TEXT)');
        this.ensureIndex(this._tableName + '_key', { key: 1 }, { unique: true });
    }

    private composeFilter(filter: FilterParams): string {
        filter ??= new FilterParams();
        let key = filter.getAsNullableString("key");
        let content = filter.getAsNullableString("content");

        let filterCondition = "";
        if (key != null)
            filterCondition += "key='" + key + "'";
        if (content != null)
            filterCondition += "content='" + content + "'";

        return filterCondition;
    }

    private composeSort(sort: SortParams): string {
        sort ??= new SortParams();
        var composeSort = "";

        for (var i = 0; i < sort.length; i++)
            composeSort += sort[i].name + (sort[i].ascending ? " ASC" : " DESC");

        return composeSort != '' ? composeSort : null;
    }

    public getPageByFilter(ctx: Context, filter: FilterParams, paging: PagingParams, sort: SortParams): Promise<DataPage<MyData>> {
        return super.getPageByFilter(ctx, this.composeFilter(filter), paging, this.composeSort(sort), null);
    }

    public getCountByFilter(ctx: Context, filter: FilterParams): Promise<number> {
        return super.getCountByFilter(ctx, this.composeFilter(filter));
    }

    public getListByFilter(ctx: Context, filter: FilterParams, sort: SortParams): Promise<MyData[]> {
        return super.getListByFilter(ctx, this.composeFilter(filter), this.composeSort(sort), null);
    }

    public deleteByFilterParams(ctx: Context, filter: FilterParams): Promise<void> {
        return super.deleteByFilter(ctx, this.composeFilter(filter));
    }
}
```
