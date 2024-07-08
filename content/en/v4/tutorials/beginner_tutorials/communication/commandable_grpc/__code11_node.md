
```ts
import { FilterParams, PagingParams, DataPage } from "pip-services4-data-node";
import { MyData } from "my-package";

export interface IMyDataClient {
    getMyDatas(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MyData>>;
    getMyDataById(correlationId: string, id: string): Promise<MyData>;
    createMyData(correlationId: string, entity: MyData): Promise<MyData>;
    updateMyData(correlationId: string, entity: MyData): Promise<MyData>;
    deleteMyData(correlationId: string, id: string): Promise<MyData>;
}
```
