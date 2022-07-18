
```typescript
import { RandomArray, RandomInteger } from 'pip-services3-commons-node';
import { BeaconV1 } from './BeaconV1'
import { BeaconTypeV1 } from './BeaconTypeV1'

export class RandomBeaconV1 {
    public static nextBeaconType(): string {
        return RandomArray.pick([BeaconTypeV1.AltBeacon, BeaconTypeV1.EddyStoneUdi, BeaconTypeV1.Unknown, BeaconTypeV1.iBeacon]);
    }

    public static nextBeaconCenter(): any {
        return {
            type: 'Point',
            center: {
                coordinates: [RandomInteger.nextInteger(1, 1000), RandomInteger.nextInteger(1, 1000)]
            }
        }
    }

    public static nextBeacon(): BeaconV1 {
        var beacon = new BeaconV1();
        beacon.type = RandomBeaconV1.nextBeaconType();
        beacon.radius = RandomInteger.nextInteger(1, 1000);
        beacon.udi = RandomArray.pick(['00001', '00002', '00003', '00004']);
        beacon.center = RandomBeaconV1.nextBeaconCenter();
        return beacon;
    }

}
```

