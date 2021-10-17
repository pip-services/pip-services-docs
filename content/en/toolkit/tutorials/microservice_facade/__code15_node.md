
**/src/build/FacadeFactory.ts**

```typescript
import { Factory } from 'pip-services3-components-node';
import { Descriptor } from 'pip-services3-commons-node';

import { FacadeServiceV1 } from '../services/version1/FacadeServiceV1';

export class FacadeFactory extends Factory {
	public static FacadeServiceV1Descriptor = new Descriptor("pip-facades-example", "service", "http", "*", "1.0");

    public constructor() {
        super();

        this.registerAsType(FacadeFactory.FacadeServiceV1Descriptor, FacadeServiceV1);
    }

}


```
