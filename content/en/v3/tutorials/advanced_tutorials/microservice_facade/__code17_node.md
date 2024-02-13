
**/src/container/FacadeProcess.ts**

```typescript
import { ProcessContainer } from 'pip-services3-container-nodex';
import { DefaultRpcFactory } from 'pip-services3-rpc-nodex';

import { ClientFacadeFactory } from '../build/ClientFacadeFactory';
import { FacadeFactory } from '../build/FacadeFactory';

export class FacadeProcess extends ProcessContainer {

    public constructor() {
        super("pip-facades-example", "Example Pip.Services facade");
        this._factories.add(new ClientFacadeFactory);
        this._factories.add(new FacadeFactory);
        this._factories.add(new DefaultRpcFactory);
    }

}


```
