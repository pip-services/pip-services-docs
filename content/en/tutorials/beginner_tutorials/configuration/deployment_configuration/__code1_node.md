
```ts
import { FilterParams } from "pip-services3-commons-nodex";

export interface IMyDataPersistence {
    getOneRandom(correlationId: string, filter: FilterParams): Promise<MyFriend>;
    create(correlationId: string, item: MyFriend): Promise<MyFriend>;
}


```

