
**/src/logic/BeaconsCommandSet.ts**

```typescript
import { CommandSet } from 'pip-services3-commons-nodex';
import { ICommand } from 'pip-services3-commons-nodex';
import { Command } from 'pip-services3-commons-nodex';
import { ObjectSchema } from 'pip-services3-commons-nodex';
import { FilterParamsSchema } from 'pip-services3-commons-nodex';
import { PagingParamsSchema } from 'pip-services3-commons-nodex';
import { ArraySchema } from 'pip-services3-commons-nodex';
import { TypeCode } from 'pip-services3-commons-nodex';
import { Parameters } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';

import { BeaconV1Schema } from '../../src/data/version1/BeaconV1Schema';
import { IBeaconsController } from '../../src/logic/IBeaconsController';

export class BeaconsCommandSet extends CommandSet {
    private _controller: IBeaconsController;

    constructor(controller: IBeaconsController) {
        super();

        this._controller = controller;

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
            async (correlationId: string, args: Parameters) => {
                let filter = FilterParams.fromValue(args.get('filter'));
                let paging = PagingParams.fromValue(args.get('paging'));
                return await this._controller.getBeacons(correlationId, filter, paging);
            }
        );
    }

    private makeGetBeaconByIdCommand(): ICommand {
        return new Command(
            'get_beacon_by_id',
            new ObjectSchema(true)
                .withRequiredProperty('beacon_id', TypeCode.String),
            async (correlationId: string, args: Parameters) => {
                let beaconId = args.getAsString('beacon_id');
                return await this._controller.getBeaconById(correlationId, beaconId);
            }
        );
    }

    private makeGetBeaconByUdiCommand(): ICommand {
        return new Command(
            'get_beacon_by_udi',
            new ObjectSchema(true)
                .withRequiredProperty('udi', TypeCode.String),
            async (correlationId: string, args: Parameters) => {
                let udi = args.getAsString('udi');
                return await this._controller.getBeaconByUdi(correlationId, udi);
            }
        );
    }

    private makeCalculatePositionCommand(): ICommand {
        return new Command(
            'calculate_position',
            new ObjectSchema(true)
                .withRequiredProperty('site_id', TypeCode.String)
                .withRequiredProperty('udis', new ArraySchema(TypeCode.String)),
            async (correlationId: string, args: Parameters) => {
                let siteId = args.getAsString('site_id');
                let udis = args.getAsObject('udis');
                return await this._controller.calculatePosition(correlationId, siteId, udis);
            }
        );
    }

    private makeCreateBeaconCommand(): ICommand {
        return new Command(
            'create_beacon',
            new ObjectSchema(true)
                .withRequiredProperty('beacon', new BeaconV1Schema()),
            async (correlationId: string, args: Parameters) => {
                let beacon = args.getAsObject('beacon');
                return await this._controller.createBeacon(correlationId, beacon);
            }
        );
    }   

    private makeUpdateBeaconCommand(): ICommand {
        return new Command(
            'update_beacon',
            new ObjectSchema(true)
                .withRequiredProperty('beacon', new BeaconV1Schema()),
            async (correlationId: string, args: Parameters) => {
                let beacon = args.getAsObject('beacon');
                return await this._controller.updateBeacon(correlationId, beacon);
            }
        );
    }   
    
    private makeDeleteBeaconByIdCommand(): ICommand {
        return new Command(
            'delete_beacon_by_id',
            new ObjectSchema(true)
                .withRequiredProperty('beacon_id', TypeCode.String),
            async (correlationId: string, args: Parameters) => {
                let beaconId = args.getAsString('beacon_id');
                return await this._controller.deleteBeaconById(correlationId, beaconId);
            }
        );
    }

}
```
