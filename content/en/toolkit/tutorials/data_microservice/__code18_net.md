
**/src/service/build/BeaconsServiceFactory.cs**

```cs
namespace Beacons.Build
{
    public class BeaconsServiceFactory : Factory
    {
        public static Descriptor Descriptor = new Descriptor("beacons", "factory", "service", "default", "1.0");
        public static Descriptor MemoryPersistenceDescriptor = new Descriptor("beacons", "persistence", "memory", "*", "1.0");
        public static Descriptor MongoDbPersistenceDescriptor = new Descriptor("beacons", "persistence", "mongodb", "*", "1.0");
        public static Descriptor ControllerDescriptor = new Descriptor("beacons", "controller", "default", "*", "1.0");
        public static Descriptor HttpServiceDescriptor = new Descriptor("beacons", "service", "http", "*", "1.0");


        public BeaconsServiceFactory()
        {
            RegisterAsType(MemoryPersistenceDescriptor, typeof(BeaconsMemoryPersistence));
            RegisterAsType(MongoDbPersistenceDescriptor, typeof(BeaconsMongoDbPersistence));
            RegisterAsType(ControllerDescriptor, typeof(BeaconsController));
            RegisterAsType(HttpServiceDescriptor, typeof(BeaconsHttpServiceV1));
        }
    }
}
```
