
```ts
import { DataPage, Descriptor, FilterParams, PagingParams } from "pip-services3-commons-nodex";
import { CommandableGrpcClient } from "pip-services3-grpc-nodex";
import { MyData, IMyDataClient } from "my-package";


export class MyCommandableGrpcClient extends CommandableGrpcClient implements IMyDataClient {
    public constructor() {
        super('mydata');
    }

    public async getMyDatas(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MyData>> {
        return await this.callCommand('get_my_datas', correlationId, { filter: filter, paging: paging });
    }

    public async getMyDataById(correlationId: string, id: string): Promise<MyData> {
        return await this.callCommand('get_my_data_by_id', correlationId, { my_data_id: id });
    }

    public async createMyData(correlationId: string, entity: MyData): Promise<MyData> {
        return await this.callCommand('create_my_data', correlationId, { my_data: entity });
    }

    public async updateMyData(correlationId: string, entity: MyData): Promise<MyData> {
        return this.callCommand('update_my_data', correlationId, { my_data: entity })
    }
    
    public async deleteMyData(correlationId: string, id: string): Promise<MyData> {
        return this.callCommand('delete_my_data', correlationId, { my_data_id: id })
    }

}
```
