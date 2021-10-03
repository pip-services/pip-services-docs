
**/src/data/version1/BeaconV1.ts**

```typescript
import { IStringIdentifiable } from 'pip-services3-commons-node';
‍
export class BeaconV1 implements IStringIdentifiable {
    public id: string;
    public site_id: string;
    public type?: string;
    public udi: string;
    public label?: string;
    public center?: any; // GeoJson
    public radius?: number;
}

```
