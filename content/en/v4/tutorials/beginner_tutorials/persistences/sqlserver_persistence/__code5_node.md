
```ts
export class MySqlServerPersistence
    extends SqlServerPersistence<MyData> {
    public constructor() {
        super('mydata');
    }

    protected defineSchema(): void {
        this.clearSchema();
        this.ensureSchema('CREATE TABLE [' + this._tableName + '] ([id] VARCHAR(32) PRIMARY KEY, [key] VARCHAR(50), [content] VARCHAR(MAX))');
        this.ensureIndex(this._tableName + '_key', { key: 1 }, { unique: true });
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
