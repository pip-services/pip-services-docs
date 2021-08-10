---
type: docs
no_list: true
title: "Step 4. Implementing a Mock Client"
linkTitle: "Step 4. Mock Client" 
gitUrl: "https://github.com/pip-services-samples/client-beacons-dotnet"
---

Complex systems usually experience difficulties when it comes to writing unit tests for a logic that calls external services. These tests are supposed to run quickly and without any additional infrastructure. The standard approach to solving this problem is to replace the calls to external services with a local approximation (a.k.a. a mock). However, writing mocks takes time and doesn’t always guarantee functionality that matches the real service.

At PIP.Services, we’ve come to the conclusion that it pays off to develop mocks alongside the real clients and test them using common tests, to guarantee that their behavior is identical. This way, all users of the microservice will receive both the client and mock from the library and will be able to start coding logic and unit tests for it without delay.

In this step we will learn how Mock clients are developed and how they can be tested using the tests we created earlier.

The test client has to implement the same interface that the other clients did. However, the client’s methods are going to contain code that only imitates the microservice’s behavior.

The code for this client is showed below:

**/src/version1/BeaconsMockClientV1.cs**

```cs

    public class BeaconsMockClientV1 : IBeaconsClientV1
    {
        protected int maxPageSize = 100;
        protected List<BeaconV1> _items = new List<BeaconV1>();

        private Func<BeaconV1, bool> ComposeFilter(FilterParams filter)
        {
            filter = filter ?? new FilterParams();

            var id = filter.GetAsNullableString("id");
            var siteId = filter.GetAsNullableString("site_id");
            var label = filter.GetAsNullableString("label");
            var udi = filter.GetAsNullableString("udi");

            var udis = filter.GetAsNullableString("udis");
            var udiList = udis != null ? udis.Split(',') : null;

            return (item) =>
                {
                    if (id != null && item.Id != id)
                        return false;
                    if (siteId != null && item.SiteId != siteId)
                        return false;
                    if (label != null && item.Label != label)
                        return false;
                    if (udi != null && item.Udi != udi)
                        return false;
                    if (udiList != null && !udiList.Contains(item.Udi))
                        return false;
                    return true;
                };

        }

        public async Task<DataPage<BeaconV1>> GetBeaconsAsync(string correlationId, FilterParams filter, PagingParams paging)
        {
            var filterBeacons = ComposeFilter(filter);

            var beacons = _items.FindAll(beacon => filterBeacons(beacon));

            paging = paging ?? new PagingParams();

            var skip = Convert.ToInt32(paging.GetSkip(-1));
            var take = Convert.ToInt32(paging.GetTake(maxPageSize));
            long? total = null;

            if (paging.Total)
                total = beacons.Count();
            if (skip > 0)
                beacons = beacons.Skip(skip).Take(take).ToList();

            var page = await Task.FromResult(new DataPage<BeaconV1>(beacons, total));

            return page;
        }

        public async Task<BeaconV1> GetBeaconByIdAsync(string correlationId, string id)
        {
            var beacons = await Task.FromResult(_items.Find(beacon => beacon.Id == id));

            return beacons;
        }

        public async Task<BeaconV1> GetBeaconByUdiAsync(string correlationId, string udi)
        {
            var beacons = await Task.FromResult(_items.Find(beacon => beacon.Udi == udi));

            return beacons;
        }

        public async Task<CenterObjectV1> CalculatePositionAsync(string correlationId, string siteId, string[] udis)
        {
            List<BeaconV1> beacons;

            var page = await GetBeaconsAsync(correlationId, FilterParams.FromTuples(
                "site_id", siteId, "udis", udis), null);

            beacons = page.Data ?? new List<BeaconV1>();

            double lat = 0;
            double lng = 0;
            double count = 0;

            foreach (BeaconV1 beacon in beacons)
            {
                if (beacon.Center != null && beacon.Center.Type == "Point" && beacon.Center.Coordinates.Length > 1)
                {
                    lng = lng + beacon.Center.Coordinates[0];
                    lat = lat + beacon.Center.Coordinates[1];
                    count = count + 1;
                }
            }

            if (count > 0)
                return new CenterObjectV1()
                {
                    Coordinates = new double[] { lng / count, lat / count },
                    Type = "Point"

                };

            return null;
        }

        public async Task<BeaconV1> CreateBeaconAsync(string correlationId, BeaconV1 beacon)
        {
            if (beacon == null) return null;

            beacon.Id = beacon.Id ?? IdGenerator.NextLong();
            _items.Add(beacon);

            return await Task.FromResult(beacon);
        }

        public async Task<BeaconV1> UpdateBeaconAsync(string correlationId, BeaconV1 beacon)
        {
            var index = _items.FindIndex(el => el.Id == beacon.Id);

            if (index < 0) return null;

            _items[index] = beacon;

            return await Task.FromResult(beacon);

        }

        public async Task<BeaconV1> DeleteBeaconByIdAsync(string correlationId, string id)
        {
            var index = _items.FindIndex(el => el.Id == id);

            if (index < 0) return null;

            var deletedBeacon = _items[index];

            _items.RemoveAt(index);

            return await Task.FromResult(deletedBeacon);
        }
    }
    
```

Now let’s test the client we’ve created. We’ll be using the set of tests that we developed in one of the previous steps, and adding just one test file that will bring it all together. The source of this file is presented below:

**/test/version1/test_BeaconsMockClientV1.cs**

```cs
    [Collection("Sequential")]
    public class BeaconsMockClientV1Test
    {
        private BeaconsMockClientV1 _client;
        private BeaconsClientV1Fixture _fixture;

        public BeaconsMockClientV1Test()
        {
            _client = new BeaconsMockClientV1();
            _fixture = new BeaconsClientV1Fixture(_client);
        }

        [Fact]
        public async Task TestCrudOperationsAsync()
        {
            await _fixture.TestCrudOperationsAsync();
        }

        [Fact]
        public async Task TestCalculatePositionsAsync()
        {
            await _fixture.TestCalculatePositionsAsync();
        }
    }


```

Now, we create a file with the tests and run them. All the tests should pass, even though the server-side code wasn’t actually used anywhere.

This technique becomes very useful when developing microservices that bring together multiple microservices by means of their clients (e.g. a facade microservice). It allows us to perform functional testing without having to run the entire infrastructure.

To perform non-fuctional testing, we need to generate a large amount of realistic data. Users usually don’t know the entire data structure with all of its variations and exceptions. The next component we will be adding to our client library is a random data generator. This component can be used by the microservice’s users to create quality tests. The implementation is usually done in the form of static methods that either return an entire object, or just some part of its parameters. Let’s take a look at what an implementation of such a generator for the **BeaconsV1** data object would look like. The generator’s code is listed below:


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

In this implementation, the ranges of generated values are statically set, but can be passed as parameters to the methods and dynamically set as needed.
Using this instrument, we can easily generate large volumes of realistic data. This, in turn, can be used to test, for example, how fast the system can create elements in the persistence it’s using.

In [Step 5. Testing the Client with a Remote Microservice](../step5), we’ll be taking a look at how to test our client using a microservice that is remotely deployed in a Docker container.


<span class="hide-title-link">

### [Step 5. Testing the Client with a Remote Microservice](../step5)

</span>
