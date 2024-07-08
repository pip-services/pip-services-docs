
```ts
import { 
    IStringIdentifiable, ObjectSchema, FilterParams, 
    PagingParams, FilterParamsSchema, PagingParamsSchema 
} from "pip-services4-data-node";
import { TypeCode } from "pip-services4-commons-node";
import { IContext, Parameters } from "pip-services4-components-node";
import { CommandSet, ICommand, Command } from "pip-services4-rpc-node";

import { MyDataService, MyDataCommandableGrpcController } from "my-package";

export class MyDataCommandSet extends CommandSet {
    private _controller: MyDataService;

    public constructor(controller: MyDataService) {
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
            async (ctx: IContext, args: Parameters) => {
                let filter = FilterParams.fromValue(args.get("filter"));
                let paging = PagingParams.fromValue(args.get("paging"));
                return await this._controller.getPageByFilter(ctx, filter, paging);
            }
        );
    }

    private _makeGetOneByIdCommand(): ICommand {
        return new Command(
            'get_my_data_by_id',
            new ObjectSchema()
                .withOptionalProperty('my_data_id', TypeCode.String),
            async (ctx: IContext, args: Parameters) => {
                let id = args.getAsString("my_data_id")
                return await this._controller.getOneById(ctx, id);
            }
        );
    }

    private _makeCreateCommand(): ICommand {
        return new Command(
            'create_my_data',
            new ObjectSchema()
                .withOptionalProperty('my_data', new MyDataSchema()),
            async (ctx: IContext, args: Parameters) => {
                let entity: MyData = args.get("my_data");
                return await this._controller.create(ctx, entity);
            }
        );
    }

    private _makeUpdateCommand(): ICommand {
        return new Command(
            'update_my_data',
            new ObjectSchema()
                .withOptionalProperty('my_data', new MyDataSchema()),
            async (ctx: IContext, args: Parameters) => {
                let entity: MyData = args.get("my_data");
                return await this._controller.update(ctx, entity);
            }
        );
    }

    private _makeDeleteByIdCommand(): ICommand {
        return new Command(
            'delete_my_data',
            new ObjectSchema()
                .withOptionalProperty('my_data_id', TypeCode.String),
            async (ctx: IContext, args: Parameters) => {
                let id = args.getAsString("my_data_id")
                return await this._controller.deleteById(ctx, id);
            }
        );
    }
}
```
