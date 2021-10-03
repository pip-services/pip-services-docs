
**/src/service/containers/BeaconsProcess.cs**
```cs
namespace Beacons.Containers
{
    public class BeaconsProcess : ProcessContainer
    {
        public BeaconsProcess()
            : base("beacons", "Beacons microservice")
        {
            AddFactory(new DefaultRpcFactory());
            AddFactory(new DefaultSwaggerFactory());
            AddFactory(new BeaconsServiceFactory());
        }
    }
}

```

