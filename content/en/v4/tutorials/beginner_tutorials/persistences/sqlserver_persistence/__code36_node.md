
```ts
export class MySqlServerPersistence
    extends IdentifiableJsonSqlServerPersistence<MyData, string> {
    public constructor() {
        super('mydata_json');
    }

    protected defineSchema(): void {
        this.clearSchema();
        this.ensureTable();
        this.ensureSchema("ALTER TABLE [" + this._tableName + "] ADD [data_key] AS JSON_VALUE([data],'$.key')")
        this.ensureIndex(this._tableName + '_key', { data_key: 1 }, { unique: true });
    }

    public getOneRandom(ctx: Context, filter: any): Promise<MyData> {
        return super.getOneRandom(ctx, filter);
    }

    public getPageByFilter(ctx: Context, filter: any, paging: PagingParams, sort: any): Promise<DataPage<MyData>> {
        return super.getPageByFilter(ctx, filter, paging, null, null);
    }

    public getListByFilter(ctx: Context, filter: any, sort: any, select: any): Promise<MyData[]> {
        return super.getListByFilter(ctx, filter, sort, select);
    }

    public getCountByFilter(ctx: Context, filter: any): Promise<number> {
        return super.getCountByFilter(ctx, filter);
    }
}

```
