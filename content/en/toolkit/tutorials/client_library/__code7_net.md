
```cs
public class RandomBeaconV1
{
	public static BeaconV1 NextBeacon(int siteCount = 100)
	{
        return new BeaconV1()
        {
            Id = IdGenerator.NextLong(),
            SiteId = NextSiteId(siteCount),
            Udi = IdGenerator.NextShort(),
            Label = RandomString.NextString(10, 25),
            Type = NextBeaconType(),
            Radius = RandomFloat.NextFloat(3, 150),
            Center = NextPosition()
        };
    }

    public static string NextSiteId(int siteCount = 100)
    {
        return RandomInteger.NextInteger(1, siteCount).ToString();
    }

    public static string NextBeaconType()
    {
        var choice = RandomInteger.NextInteger(0, 3);
        switch (choice)
        {
            case 0:
                return BeaconTypeV1.iBeacon;
            case 1:
                return BeaconTypeV1.AltBeacon;
            case 2:
                return BeaconTypeV1.EddyStoneUdi;
            case 3:
                return BeaconTypeV1.Unknown;
            default:
                return BeaconTypeV1.Unknown;
        }
    }

    public static CenterObjectV1 NextPosition()
    {
        return new CenterObjectV1
        {
            Type = "Point",
            Coordinates = new double[]
            {
                RandomFloat.NextFloat(-180, 168), // Longitude
                RandomFloat.NextFloat(-90, 90), // Latitude
            }
        };
    }
}

```

