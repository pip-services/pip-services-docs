
```ts
import { FilterParams, PagingParams, DataPage, IdGenerator } from "pip-services4-data-node";
import { CommandSet, ICommandable } from "pip-services4-rpc-node";
import { MyData, IMyDataService, MyDataCommandSet } from "my-package";

export class MyDataService implements IMyDataService, ICommandable {
    private _entities: MyData[] = [];
    private _commandSet: CommandSet; 

    public getCommandSet(): CommandSet {
        if (this._commandSet == null)
            this._commandSet = new MyDataCommandSet(this);
        return this._commandSet;
    }

    public async getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MyData>> {
        filter = filter != null ? filter : new FilterParams();
        let key: string = filter.getAsNullableString("key");

        paging = paging != null ? paging : new PagingParams();
        let skip: number = paging.getSkip(0);
        let take: number = paging.getTake(100);

        let result: MyData[] = [];
        for (let i = 0; i < this._entities.length; i++) {
            let entity: MyData = this._entities[i];
            if (key != null && key != entity.key)
                continue;

            skip--;
            if (skip >= 0) continue;

            take--;
            if (take < 0) break;

            result.push(entity);
        }

        return new DataPage<MyData>(result);
    }
    
    public async getOneById(correlationId: string, id: string): Promise<MyData> {
        for (let i = 0; i < this._entities.length; i++) {
            let entity: MyData = this._entities[i];
            if (id == entity.id) {
                return entity;
            }
        }
        return null;
    }

    public async create(correlationId: string, entity: MyData): Promise<MyData> {
        if (entity.id == null || entity.id == "")
            entity.id = IdGenerator.nextLong();
            
        this._entities.push(entity);
        return entity;
    }

    public async update(correlationId: string, newEntity: MyData): Promise<MyData> {
        for (let index = 0; index < this._entities.length; index++) {
            let entity: MyData = this._entities[index];
            if (entity.id == newEntity.id) {
                this._entities[index] = newEntity;
                return newEntity;
            }
        }
        return null;
    }

    public async deleteById(correlationId: string, id: string): Promise<MyData> {
        for (let index = 0; index < this._entities.length; index++) {
            let entity: MyData = this._entities[index];
            if (entity.id == id) {
                this._entities.splice(index, 1);
                return entity;
            }
        }
        return null;
    }
}
```
