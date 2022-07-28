
And add the [DefaultMongoDbFactory](../../../toolkit_api/net/mongodb/build/default_mongodb_factory/) to the microservice’s ProcessContainer:

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

