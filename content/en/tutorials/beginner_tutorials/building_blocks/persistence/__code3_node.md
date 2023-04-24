
```ts
import { IIdentifiable } from 'pip-services3-commons-nodex';
import { DataPage, FilterParams, PagingParams } from 'pip-services3-commons-nodex';
import { IdentifiablePostgresPersistence } from 'pip-services3-postgres-nodex';

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

    public async getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MyIdentifiableObject>> {
        let criteria = this.composeFilter(filter);
        return await super.getPageByFilter(correlationId, criteria, paging, null, null);
    }
}

```