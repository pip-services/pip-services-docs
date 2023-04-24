
```ts
export class MySqlServerPersistence
    extends IdentifiableSqlServerPersistence<MyData, string> {
    public constructor() {
        super('mydata2');
    }

    protected defineSchema(): void {
        this.clearSchema();
        this.ensureSchema('CREATE TABLE [' + this._tableName + '] ([id] VARCHAR(32) PRIMARY KEY, [key] VARCHAR(50), [content] VARCHAR(MAX))');
        this.ensureIndex(this._tableName + '_key', { key: 1 }, { unique: true });
    }

    public getOneRandom(correlationId: string, filter: any): Promise<MyData> {
        return super.getOneRandom(correlationId, filter);
    }

    public getPageByFilter(correlationId: string, filter: any, paging: PagingParams, sort: any): Promise<DataPage<MyData>> {
        return super.getPageByFilter(correlationId, filter, paging, null, null);
    }

    public getListByFilter(correlationId: string, filter: any, sort: any, select: any): Promise<MyData[]> {
        return super.getListByFilter(correlationId, filter, sort, select);
    }

    public getCountByFilter(correlationId: string, filter: any): Promise<number> {
        return super.getCountByFilter(correlationId, filter);
    }
}
```
