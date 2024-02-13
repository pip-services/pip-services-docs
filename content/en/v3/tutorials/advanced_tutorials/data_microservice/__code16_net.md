
**/src/service/service/version1/BeaconsHttpServicesV1.py**

```cs
namespace Beacons.Services.Version1
{
    public class BeaconsHttpServiceV1: CommandableHttpService
    {
        public BeaconsHttpServiceV1()
            : base("v1/beacons")
        {
            _dependencyResolver.Put("controller", new Descriptor("beacons", "controller", "default", "*", "1.0"));
        }
    }
}
```
