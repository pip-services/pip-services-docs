
```ts
import { IIdentifiable, FilterParams, PagingParams, DataPage } from "pip-services4-data-node";
import { Context } from "pip-services4-components-node";
import { IdentifiablePostgresPersistence } from 'pip-services4-postgres-node';

class MyIdentifiableObject implements IIdentifiable <string> {
    public id: string;
    public name: string;
    public value: string;
}

interface MyIdentifiablePersistence {
    getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MyIdentifiableObject>>;
    create(correlationId: string, item: MyIdentifiableObject): Promise<MyIdentifiableObject>;
    getOneById(correlationId: string, id: string): Promise<MyIdentifiableObject>;
    deleteById(correlationId: string, id: string): Promise<MyIdentifiableObject>;
}

class MyIdentifiablePostgreSqlPersistence extends IdentifiablePostgresPersistence<MyIdentifiableObject, string> implements MyIdentifiablePersistence {

    public constructor() {
        super("mycollection");
    }

    public composeFilter(filter: FilterParams): string {
        filter = filter ?? new FilterParams();
        let criteria = [];

        let id = filter.getAsString("id");
        if (id != null) {
            criteria.push("id='" + id + "'");
        }

        let name = filter.getAsString("name");
        if (name != null) {
            criteria.push("name='" + name + "'");
        }

        return criteria.length > 0 ? criteria.join(" AND ") : null;
    }

    public async getPageByFilter(ctx: Context, filter: FilterParams, paging: PagingParams): Promise<DataPage<MyIdentifiableObject>> {
        let criteria = this.composeFilter(filter);
        return await super.getPageByFilter(ctx, criteria, paging, null, null);
    }
}

```
