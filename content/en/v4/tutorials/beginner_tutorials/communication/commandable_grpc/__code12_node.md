
```ts
import { CommandableGrpcClient } from "pip-services4-grpc-node";
import { Context } from "pip-services4-components-node";
import { FilterParams, PagingParams, DataPage } from "pip-services4-data-node";
import { MyData, IMyDataClient } from "my-package";


export class MyCommandableGrpcClient extends CommandableGrpcClient implements IMyDataClient {
    public constructor() {
        super('mydata');
    }

    public async getMyDatas(ctx: Context, filter: FilterParams, paging: PagingParams): Promise<DataPage<MyData>> {
        return await this.callCommand('get_my_datas', ctx, { filter: filter, paging: paging });
    }

    public async getMyDataById(ctx: Context, id: string): Promise<MyData> {
        return await this.callCommand('get_my_data_by_id', ctx, { my_data_id: id });
    }

    public async createMyData(ctx: Context, entity: MyData): Promise<MyData> {
        return await this.callCommand('create_my_data', ctx, { my_data: entity });
    }

    public async updateMyData(ctx: Context, entity: MyData): Promise<MyData> {
        return this.callCommand('update_my_data', ctx, { my_data: entity })
    }
    
    public async deleteMyData(ctx: Context, id: string): Promise<MyData> {
        return this.callCommand('delete_my_data', ctx, { my_data_id: id })
    }

}
```
