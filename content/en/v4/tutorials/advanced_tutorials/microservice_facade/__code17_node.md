
**/src/container/FacadeProcess.ts**
```ts
import { ProcessContainer } from 'pip-services4-container-node';
import { DefaultHttpFactory } from 'pip-services4-http-node';

import { ClientFacadeFactory } from '../build/ClientFacadeFactory';
import { FacadeFactory } from '../build/FacadeFactory';

export class FacadeProcess extends ProcessContainer {

    public constructor() {
        super("pip-facades-example", "Example Pip.Services facade");
        this._factories.add(new ClientFacadeFactory);
        this._factories.add(new FacadeFactory);
        this._factories.add(new DefaultHttpFactory);
    }

}

```
