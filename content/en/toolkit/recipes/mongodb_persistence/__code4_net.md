
```cs
public class BeaconsFactory : Factory
{
    public static Descriptor BeaconsMongoDbPersistneceDescriptor = new Descriptor("beacons", "persistence", "mongodb", "default", "1.0");
    public BeaconsFactory()
    {
        RegisterAsType(BeaconsMongoDbPersistneceDescriptor, typeof(BeaconMongoDbPersistence));
    }
}



```

