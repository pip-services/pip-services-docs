
**/test/service.test/persistence/BeaconsPersistenceFixture.cs**

```cs
namespace Beacons.Persistence
{
    public class BeaconsPersistenceFixture
    {
        private BeaconV1 BEACON1 = new BeaconV1
        {
            Id = "1",
            Udi = "00001",
            Type = BeaconTypeV1.AltBeacon,
            SiteId = "1",
            Label = "TestBeacon1",
            Center = new CenterObjectV1 { Type = "Point", Coordinates = new double[] { 0, 0 } },
            Radius = 50
        };
        private BeaconV1 BEACON2 = new BeaconV1
        {
            Id = "2",
            Udi = "00002",
            Type = BeaconTypeV1.iBeacon,
            SiteId = "1",
            Label = "TestBeacon2",
            Center = new CenterObjectV1 { Type = "Point", Coordinates = new double[] { 2, 2 } },
            Radius = 70
        };
        private BeaconV1 BEACON3 = new BeaconV1
        {
            Id = "3",
            Udi = "00003",
            Type = BeaconTypeV1.AltBeacon,
            SiteId = "2",
            Label = "TestBeacon3",
            Center = new CenterObjectV1 { Type = "Point", Coordinates = new double[] { 10, 10 } },
            Radius = 50
        };

        private IBeaconsPersistence _persistence;

        public BeaconsPersistenceFixture(IBeaconsPersistence persistence)
        {
            _persistence = persistence;
        }

        private async Task TestCreateBeaconsAsync()
        {
            // Create the first beacon
            var beacon = await _persistence.CreateAsync(null, BEACON1);

            Assert.NotNull(beacon);
            Assert.Equal(BEACON1.Udi, beacon.Udi);
            Assert.Equal(BEACON1.SiteId, beacon.SiteId);
            Assert.Equal(BEACON1.Type, beacon.Type);
            Assert.Equal(BEACON1.Label, beacon.Label);
            Assert.NotNull(beacon.Center);

            // Create the second beacon
            beacon = await _persistence.CreateAsync(null, BEACON2);
 
            Assert.NotNull(beacon);
            Assert.Equal(BEACON2.Udi, beacon.Udi);
            Assert.Equal(BEACON2.SiteId, beacon.SiteId);
            Assert.Equal(BEACON2.Type, beacon.Type);
            Assert.Equal(BEACON2.Label, beacon.Label);
            Assert.NotNull(beacon.Center);

            // Create the third beacon
            beacon = await _persistence.CreateAsync(null, BEACON3);

            Assert.NotNull(beacon);
            Assert.Equal(BEACON3.Udi, beacon.Udi);
            Assert.Equal(BEACON3.SiteId, beacon.SiteId);
            Assert.Equal(BEACON3.Type, beacon.Type);
            Assert.Equal(BEACON3.Label, beacon.Label);
            Assert.NotNull(beacon.Center);
        }

        public async Task TestCrudOperationsAsync()
        {
            // Create items
            await TestCreateBeaconsAsync();

            // Get all beacons
            var page = await _persistence.GetPageByFilterAsync(
                null,
                new FilterParams(),
                new PagingParams()
            );

            Assert.NotNull(page);
            Assert.Equal(3, page.Data.Count);

            var beacon1 = page.Data[0];

            // Update the beacon
            beacon1.Label = "ABC";

            var beacon = await _persistence.UpdateAsync(null, beacon1);

            Assert.NotNull(beacon);
            Assert.Equal(beacon1.Id, beacon.Id);
            Assert.Equal("ABC", beacon.Label);

            // Get beacon by udi
            beacon = await _persistence.GetOneByUdiAsync(null, beacon1.Udi);

            Assert.NotNull(beacon);
            Assert.Equal(beacon1.Id, beacon.Id);

            // Delete the beacon
            beacon = await _persistence.DeleteByIdAsync(null, beacon1.Id);

            Assert.NotNull(beacon);
            Assert.Equal(beacon1.Id, beacon.Id);

            // Try to get deleted beacon
            beacon = await _persistence.GetOneByIdAsync(null, beacon1.Id);

            Assert.Null(beacon);
        }

        public async Task TestGetWithFiltersAsync()
        {
            // Create items
            await TestCreateBeaconsAsync();

            // Filter by id
            var page = await _persistence.GetPageByFilterAsync(
                null,
                FilterParams.FromTuples(
                    "id", "1"
                ),
                new PagingParams()
            );

            Assert.Single(page.Data);

            // Filter by udi
            page = await _persistence.GetPageByFilterAsync(
                null,
                FilterParams.FromTuples(
                    "udi", "00002"
                ),
                new PagingParams()
            );

            Assert.Single(page.Data);

            // Filter by udis
            page = await _persistence.GetPageByFilterAsync(
                null,
                FilterParams.FromTuples(
                    "udis", "00001,00003"
                ),
                new PagingParams()
            );

            Assert.Equal(2, page.Data.Count);

            // Filter by site_id
            page = await _persistence.GetPageByFilterAsync(
                null,
                FilterParams.FromTuples(
                    "site_id", "1"
                ),
                new PagingParams()
            );

            Assert.Equal(2, page.Data.Count);
        }
    }
}
```

