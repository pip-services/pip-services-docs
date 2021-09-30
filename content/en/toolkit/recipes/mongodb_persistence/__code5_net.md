
```cs
public class BeaconsProcess : ProcessContainer
{
    public BeaconsProcess()
        : base("beacons", "Beacons microservice")
    {
        _factories.Add(new DefaultMongoDbFactory());
        _factories.Add(new BeaconsFactory());
    }
}




```

