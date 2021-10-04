
**/src/build/FacadeFactory.ts**

```typescript
import { Factory } from 'pip-services3-components-node';
import { Descriptor } from 'pip-services3-commons-node';

import { FacadeServiceV1 } from '../services/version1/FacadeServiceV1';
import { FacadeServiceV2 } from '../services/version2/FacadeServiceV2';

export class FacadeFactory extends Factory {
	public static FacadeServiceV1Descriptor = new Descriptor("nov-facades-application", "service", "http", "*", "1.0");
	public static FacadeServiceV2Descriptor = new Descriptor("nov-facades-application", "service", "http", "*", "2.0");

    public constructor() {
        super();

        this.registerAsType(FacadeFactory.FacadeServiceV1Descriptor, FacadeServiceV1);
        this.registerAsType(FacadeFactory.FacadeServiceV2Descriptor, FacadeServiceV2);
    }

}


```
