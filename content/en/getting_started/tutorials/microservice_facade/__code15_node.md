
**/src/build/FacadeFactory.ts**

```typescript
import { Factory } from 'pip-services3-components-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';

import { FacadeServiceV1 } from '../services/version1/FacadeServiceV1';
import { FacadeServiceV2 } from '../services/version2/FacadeServiceV2';

export class FacadeFactory extends Factory {
	public static FacadeServiceV1Descriptor = new Descriptor("pip-facades-example", "service", "http", "*", "1.0");

    public constructor() {
        super();

        this.registerAsType(FacadeFactory.FacadeServiceV1Descriptor, FacadeServiceV1);
    }

}

```
