
**/src/container/FacadeProcess.ts**

```typescript
import { ProcessContainer } from 'pip-services3-container-node';
import { DefaultRpcFactory } from 'pip-services3-rpc-node';
import { DefaultMongoDbFactory } from 'pip-services3-mongodb-node';

import { ClientFacadeFactory } from '../build/ClientFacadeFactory';
import { ServiceFacadeFactory } from '../build/ServiceFacadeFactory';
import { FacadeFactory } from '../build/FacadeFactory';

export class FacadeProcess extends ProcessContainer {

    public constructor() {
        super("pip-facades-example", "Public facade for pip-vault 2.0");
        this._factories.add(new ClientFacadeFactory);
        this._factories.add(new ServiceFacadeFactory);
        this._factories.add(new FacadeFactory);
        this._factories.add(new DefaultRpcFactory);
        this._factories.add(new DefaultMongoDbFactory);
    }

}

```
