
**/src/controller/version1/BeaconsHttpcontrollerV1.ts**
```ts
import { CommandableHttpController } from 'pip-services4-http-node';
import { Descriptor } from 'pip-services4-components-node';

export class BeaconsHttpControllerV1 extends CommandableHttpController {
    public constructor() {
        super('v1/beacons');
        this._dependencyResolver.put('service', new Descriptor('beacons', 'service', '*', '*', '1.0'));
    }
}
```
