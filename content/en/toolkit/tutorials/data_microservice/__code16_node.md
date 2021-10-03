
**/src/service/version1/BeaconsHttpServicesV1.ts**

```typescript
import { CommandableHttpService } from 'pip-services3-rpc-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';

export class BeaconsHttpServiceV1 extends CommandableHttpService {
    public constructor() {
        super('v1/beacons');
        this._dependencyResolver.put('controller', new Descriptor('beacons', 'controller', '*', '*', '1.0'));
    }
}

```
