
**/src/containers/BeaconsProcess.ts**
```ts
import { ProcessContainer } from 'pip-services4-container-node';
import { DefaultHttpFactory } from 'pip-services4-http-node';
import { DefaultSwaggerFactory } from 'pip-services4-swagger-node';

import {BeaconsServiceFactory} from '../build/BeaconsServiceFactory';

export class BeaconsProcess extends ProcessContainer{
    public constructor(){
        super('beacons', 'Beacons microservice');

        this.addFactory(new BeaconsServiceFactory());
        this.addFactory(new DefaultHttpFactory());
        this.addFactory(new DefaultSwaggerFactory());
    }
}

```
