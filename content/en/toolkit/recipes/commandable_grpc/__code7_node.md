
```ts
import { DataPage, FilterParams, PagingParams } from "pip-services3-commons-nodex";

import { MyData } from "my-package";


export interface IMyDataController {
    getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MyData>>;
    getOneById(correlationId: string, id: string): Promise<MyData>;
    create(correlationId: string, entity: MyData): Promise<MyData>;
    update(correlationId: string, entity: MyData): Promise<MyData>;
    deleteById(correlationId: string, id: string): Promise<MyData>;
}
```
