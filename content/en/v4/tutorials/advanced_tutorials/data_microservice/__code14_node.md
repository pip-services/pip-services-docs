
**/src/service/BeaconsCommandSet.ts**
```ts
import { CommandSet } from 'pip-services4-rpc-node';IBeaconsService
import { ICommand } from 'pip-services4-rpc-node';
import { Command } from 'pip-services4-rpc-node';
import { ObjectSchema } from 'pip-services4-data-node';
import { FilterParamsSchema } from 'pip-services4-data-node';
import { PagingParamsSchema } from 'pip-services4-data-node';
import { ArraySchema } from 'pip-services4-data-node';
import { TypeCode } from 'pip-services4-commons-node';
import { Parameters } from 'pip-services4-components-node';
import { IContext } from 'pip-services4-components-node';
import { FilterParams } from 'pip-services4-data-node';
import { PagingParams } from 'pip-services4-data-node';

import { BeaconV1Schema } from '../../src/data/version1/BeaconV1Schema';
import { IBeaconsService } from '../../src/service/IBeaconsService';

export class BeaconsCommandSet extends CommandSet {
    private _service: IBeaconsService;

    constructor(service: IBeaconsService) {
        super();

        this._service = service;

        this.addCommand(this.makeGetBeaconsCommand());
        this.addCommand(this.makeGetBeaconByIdCommand());
        this.addCommand(this.makeGetBeaconByUdiCommand());
        this.addCommand(this.makeCalculatePositionCommand());
        this.addCommand(this.makeCreateBeaconCommand());
        this.addCommand(this.makeUpdateBeaconCommand());
        this.addCommand(this.makeDeleteBeaconByIdCommand());
    }

    private makeGetBeaconsCommand(): ICommand {
        return new Command(
            'get_beacons',
            new ObjectSchema(true)
                .withOptionalProperty('filter', new FilterParamsSchema())
                .withOptionalProperty('paging', new PagingParamsSchema()),
            async (ctx: IContext, args: Parameters) => {
                let filter = FilterParams.fromValue(args.get('filter'));
                let paging = PagingParams.fromValue(args.get('paging'));
                return await this._service.getBeacons(ctx, filter, paging);
            }
        );
    }

    private makeGetBeaconByIdCommand(): ICommand {
        return new Command(
            'get_beacon_by_id',
            new ObjectSchema(true)
                .withRequiredProperty('beacon_id', TypeCode.String),
            async (ctx: IContext, args: Parameters) => {
                let beaconId = args.getAsString('beacon_id');
                return await this._service.getBeaconById(ctx, beaconId);
            }
        );
    }

    private makeGetBeaconByUdiCommand(): ICommand {
        return new Command(
            'get_beacon_by_udi',
            new ObjectSchema(true)
                .withRequiredProperty('udi', TypeCode.String),
            async (ctx: IContext, args: Parameters) => {
                let udi = args.getAsString('udi');
                return await this._service.getBeaconByUdi(ctx, udi);
            }
        );
    }

    private makeCalculatePositionCommand(): ICommand {
        return new Command(
            'calculate_position',
            new ObjectSchema(true)
                .withRequiredProperty('site_id', TypeCode.String)
                .withRequiredProperty('udis', new ArraySchema(TypeCode.String)),
            async (ctx: IContext, args: Parameters) => {
                let siteId = args.getAsString('site_id');
                let udis = args.getAsObject('udis');
                return await this._service.calculatePosition(ctx, siteId, udis);
            }
        );
    }

    private makeCreateBeaconCommand(): ICommand {
        return new Command(
            'create_beacon',
            new ObjectSchema(true)
                .withRequiredProperty('beacon', new BeaconV1Schema()),
            async (ctx: IContext, args: Parameters) => {
                let beacon = args.getAsObject('beacon');
                return await this._service.createBeacon(ctx, beacon);
            }
        );
    }   

    private makeUpdateBeaconCommand(): ICommand {
        return new Command(
            'update_beacon',
            new ObjectSchema(true)
                .withRequiredProperty('beacon', new BeaconV1Schema()),
            async (ctx: IContext, args: Parameters) => {
                let beacon = args.getAsObject('beacon');
                return await this._service.updateBeacon(ctx, beacon);
            }
        );
    }   
    
    private makeDeleteBeaconByIdCommand(): ICommand {
        return new Command(
            'delete_beacon_by_id',
            new ObjectSchema(true)
                .withRequiredProperty('beacon_id', TypeCode.String),
            async (ctx: IContext, args: Parameters) => {
                let beaconId = args.getAsString('beacon_id');
                return await this._service.deleteBeaconById(ctx, beaconId);
            }
        );
    }

}

```
