
**/src/interface/data/version1/BeaconV1Schema.cs**

```cs
namespace Beacons.Data.Version1
{
    public class BeaconV1Schema : ObjectSchema
    {
        public BeaconV1Schema()
        {
            this.WithOptionalProperty("id", TypeCode.String);
            this.WithRequiredProperty("site_id", TypeCode.String);
            this.WithOptionalProperty("type", TypeCode.String);
            this.WithRequiredProperty("udi", TypeCode.String);
            this.WithOptionalProperty("label", TypeCode.String);
            this.WithOptionalProperty("center", null);
            this.WithOptionalProperty("radius", TypeCode.Double);
        }
    }
}
```
