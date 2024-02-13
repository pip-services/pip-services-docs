
**/test/service.test/logic/BeaconsControllerTest.cs**

```cs
namespace Beacons.Logic
{
    public class BeaconsControllerTest: IDisposable
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

        private BeaconsController _controller;
        private BeaconsMemoryPersistence _persistence;

        public BeaconsControllerTest()
        {
            _persistence = new BeaconsMemoryPersistence();
            _persistence.Configure(new ConfigParams());

            _controller = new BeaconsController();

            var references = References.FromTuples(
                new Descriptor("beacons", "persistence", "memory", "*", "1.0"), _persistence,
                new Descriptor("beacons", "controller", "default", "*", "1.0"), _controller
            );

            _controller.SetReferences(references);

            _persistence.OpenAsync(null).Wait();
        }

        public void Dispose()
        {
            _persistence.CloseAsync(null).Wait();
        }

        [Fact]
        public async Task TestCrudOperationsAsync()
        {
            // Create the first beacon
            var beacon = await _controller.CreateBeaconAsync(null, BEACON1);

            Assert.NotNull(beacon);
            Assert.Equal(BEACON1.Udi, beacon.Udi);
            Assert.Equal(BEACON1.SiteId, beacon.SiteId);
            Assert.Equal(BEACON1.Type, beacon.Type);
            Assert.Equal(BEACON1.Label, beacon.Label);
            Assert.NotNull(beacon.Center);

            // Create the second beacon
            beacon = await _controller.CreateBeaconAsync(null, BEACON2);

            Assert.NotNull(beacon);
            Assert.Equal(BEACON2.Udi, beacon.Udi);
            Assert.Equal(BEACON2.SiteId, beacon.SiteId);
            Assert.Equal(BEACON2.Type, beacon.Type);
            Assert.Equal(BEACON2.Label, beacon.Label);
            Assert.NotNull(beacon.Center);

            // Get all beacons
            var page = await _controller.GetBeaconsAsync(
                null,
                new FilterParams(),
                new PagingParams()
            );

            Assert.NotNull(page);
            Assert.Equal(2, page.Data.Count);

            var beacon1 = page.Data[0];

            // Update the beacon
            beacon1.Label = "ABC";

            beacon = await _controller.UpdateBeaconAsync(null, beacon1);

            Assert.NotNull(beacon);
            Assert.Equal(beacon1.Id, beacon.Id);
            Assert.Equal("ABC", beacon.Label);

            // Get beacon by udi
            beacon = await _controller.GetBeaconByUdiAsync(null, beacon1.Udi);

            Assert.NotNull(beacon);
            Assert.Equal(beacon1.Id, beacon.Id);

            // Delete the beacon
            beacon = await _controller.DeleteBeaconByIdAsync(null, beacon1.Id);

            Assert.NotNull(beacon);
            Assert.Equal(beacon1.Id, beacon.Id);

            // Try to get deleted beacon
            beacon = await _controller.GetBeaconByIdAsync(null, beacon1.Id);

            Assert.Null(beacon);
        }

        [Fact]
        public async Task TestCalculatePositionsAsync()
        {
            // Create the first beacon
            var beacon = await _controller.CreateBeaconAsync(null, BEACON1);

            Assert.NotNull(beacon);
            Assert.Equal(BEACON1.Udi, beacon.Udi);
            Assert.Equal(BEACON1.SiteId, beacon.SiteId);
            Assert.Equal(BEACON1.Type, beacon.Type);
            Assert.Equal(BEACON1.Label, beacon.Label);
            Assert.NotNull(beacon.Center);

            // Create the second beacon
            beacon = await _controller.CreateBeaconAsync(null, BEACON2);

            Assert.NotNull(beacon);
            Assert.Equal(BEACON2.Udi, beacon.Udi);
            Assert.Equal(BEACON2.SiteId, beacon.SiteId);
            Assert.Equal(BEACON2.Type, beacon.Type);
            Assert.Equal(BEACON2.Label, beacon.Label);
            Assert.NotNull(beacon.Center);

            // Calculate position for one beacon
            var position = await _controller.CalculatePositionAsync(
                null, "1", new string[] { "00001" }
            );

            Assert.NotNull(position);
            Assert.Equal("Point", position.Type);
            Assert.Equal(2, position.Coordinates.Length);
            Assert.Equal(0, position.Coordinates[0]);
            Assert.Equal(0, position.Coordinates[1]);

            // Calculate position for two beacons
            position = await _controller.CalculatePositionAsync(
                null, "1", new string[] { "00001", "00002" }
            );

            Assert.NotNull(position);
            Assert.Equal("Point", position.Type);
            Assert.Equal(2, position.Coordinates.Length);
            Assert.Equal(1, position.Coordinates[0]);
            Assert.Equal(1, position.Coordinates[1]);
        }

    }
}
        
```
