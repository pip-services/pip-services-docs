
**/src/run/BeaconsProcess.ts**

```typescript
import { ProcessContainer } from 'pip-services3-container-nodex';
import { DefaultRpcFactory } from 'pip-services3-rpc-nodex';
import { DefaultSwaggerFactory } from 'pip-services3-swagger-nodex';

import {BeaconsServiceFactory} from '../build/BeaconsServiceFactory';

export class BeaconsProcess extends ProcessContainer{
    public constructor(){
        super('beacons', 'Beacons microservice');

        this.addFactory(new BeaconsServiceFactory());
        this.addFactory(new DefaultRpcFactory());
        this.addFactory(new DefaultSwaggerFactory());
    }
}

```
