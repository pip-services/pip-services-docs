
```ts
import { 
    Command, CommandSet, DataPage, FilterParams, FilterParamsSchema, 
    ICommand, ObjectSchema, PagingParams, PagingParamsSchema, TypeCode
} from "pip-services3-commons-nodex";

import { IMyDataController, MyDataSchema, MyData } from "my-package";

export class MyDataCommandSet extends CommandSet {
    private _controller: IMyDataController;

    public constructor(controller: IMyDataController) {
        super();
        this._controller = controller;

        this.addCommand(this._makePageByFilterCommand());
        this.addCommand(this._makeGetOneByIdCommand());
        this.addCommand(this._makeCreateCommand());
        this.addCommand(this._makeUpdateCommand());
        this.addCommand(this._makeDeleteByIdCommand());
    }

    private _makePageByFilterCommand(): ICommand {
        return new Command(
            'get_my_datas',
            new ObjectSchema()
                .withOptionalProperty('filter', new FilterParamsSchema())
                .withOptionalProperty('paging', new PagingParamsSchema()),
            async (correlationId: string, args: Parameters) => {
                let filter = FilterParams.fromValue(args.get("filter"));
                let paging = PagingParams.fromValue(args.get("paging"));
                return await this._controller.getPageByFilter(correlationId, filter, paging);
            }
        );
    }

    private _makeGetOneByIdCommand(): ICommand {
        return new Command(
            'get_my_data_by_id',
            new ObjectSchema()
                .withOptionalProperty('my_data_id', TypeCode.String),
            async (correlationId: string, args: Parameters) => {
                let id = args.getAsString("my_data_id")
                return await this._controller.getOneById(correlationId, id);
            }
        );
    }

    private _makeCreateCommand(): ICommand {
        return new Command(
            'create_my_data',
            new ObjectSchema()
                .withOptionalProperty('my_data', new MyDataSchema()),
            async (correlationId: string, args: Parameters) => {
                let entity: MyData = args.get("my_data");
                return await this._controller.create(correlationId, entity);
            }
        );
    }

    private _makeUpdateCommand(): ICommand {
        return new Command(
            'update_my_data',
            new ObjectSchema()
                .withOptionalProperty('my_data', new MyDataSchema()),
            async (correlationId: string, args: Parameters) => {
                let entity: MyData = args.get("my_data");
                return await this._controller.update(correlationId, entity);
            }
        );
    }

    private _makeDeleteByIdCommand(): ICommand {
        return new Command(
            'delete_my_data',
            new ObjectSchema()
                .withOptionalProperty('my_data_id', TypeCode.String),
            async (correlationId: string, args: Parameters) => {
                let id = args.getAsString("my_data_id")
                return await this._controller.deleteById(correlationId, id);
            }
        );
    }
}

```
