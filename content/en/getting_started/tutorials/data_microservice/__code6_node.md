
**/src/data/version1/BeaconV1Schema.ts**

```typescript
import { ObjectSchema } from 'pip-services3-commons-node';
import { TypeCode } from 'pip-services3-commons-node';
‍
export class BeaconV1Schema extends ObjectSchema { 
    public constructor()
    {
        super();
        this.withOptionalProperty('id', TypeCode.String);
        this.withRequiredProperty('site_id', TypeCode.String);
        this.withOptionalProperty('type', TypeCode.String);
        this.withRequiredProperty('udi', TypeCode.String);
        this.withOptionalProperty('label', TypeCode.String);
        this.withOptionalProperty('center', null);
        this.withOptionalProperty('radius', TypeCode.Float);    }
}

```
