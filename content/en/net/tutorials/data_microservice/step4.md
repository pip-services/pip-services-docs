---
type: docs
no_list: true
title: "Step 5. Implementing a controller"
linkTitle: "Step 5. Controller"
gitUrl: "https://github.com/pip-services-samples/service-beacons-dotnet"
---

Now that we know a bit about how we are going to be storing data and how microservice configuration works, it’s time to add some logic to our service. Our microservice needs to be able to calculate a device’s position based on the beacons it “sees”, as well as initiate CRUD operations for the data it handles. Let’s create a **logic** folder under the **src/interface** directory and start by defining an interface:

**/src/interface/logic/IBeaconsController.cs**

```cs
namespace Beacons.Logic
{
    public interface IBeaconsController
    {
        Task<DataPage<BeaconV1>> GetBeaconsAsync(string correlationId, FilterParams filter, PagingParams paging);
        Task<BeaconV1> GetBeaconByIdAsync(string correlationId, string id);
        Task<BeaconV1> GetBeaconByUdiAsync(string correlationId, string udi);
        Task<CenterObjectV1> CalculatePositionAsync(string correlationId, string siteId, string[] udis);
        Task<BeaconV1> CreateBeaconAsync(string correlationId, BeaconV1 beacon);
        Task<BeaconV1> UpdateBeaconAsync(string correlationId, BeaconV1 beacon);
        Task<BeaconV1> DeleteBeaconByIdAsync(string correlationId, string id);
    }
}
```

Once our interface is ready, we can move on to implementing the actual controller. Its code is also going to be quite simple, as all we need to write is one method for calculating a device’s position, and the other methods will just be wrappers for the methods we wrote in our persistence components.

**/src/interface/logic/BeaconsController.cs**

```cs
namespace Beacons.Logic
{
    public class BeaconsController : IBeaconsController, IConfigurable, IReferenceable, ICommandable
    {
        private IBeaconsPersistence _persistence;
        private BeaconsCommandSet _commandSet;

        public BeaconsController()
        {}

        public void Configure(ConfigParams config)
        {}

        public void SetReferences(IReferences references)
        {
            _persistence = references.GetOneRequired<IBeaconsPersistence>(
                new Descriptor("beacons", "persistence", "*", "*", "1.0")
            );
        }

        public CommandSet GetCommandSet()
        {
            if (_commandSet == null)
                _commandSet = new BeaconsCommandSet(this);
            return _commandSet;
        }

        public async Task<DataPage<BeaconV1>> GetBeaconsAsync(string correlationId, FilterParams filter, PagingParams paging)
        {
            return await _persistence.GetPageByFilterAsync(correlationId, filter, paging);
        }

        public async Task<BeaconV1> GetBeaconByIdAsync(string correlationId, string id)
        {
            return await _persistence.GetOneByIdAsync(correlationId, id);
        }

        public async Task<BeaconV1> GetBeaconByUdiAsync(string correlationId, string udi)
        {
            return await _persistence.GetOneByUdiAsync(correlationId, udi);
        }

        public async Task<CenterObjectV1> CalculatePositionAsync(string correlationId, string siteId, string[] udis)
        {
            if (udis == null || udis.Length == 0) return null;

            var page = await this._persistence.GetPageByFilterAsync(
                correlationId,
                FilterParams.FromTuples("site_id", siteId, "udis", udis),
                null
            );
 
            var lat = 0.0;
            var lng = 0.0;
            var count = 0;

            foreach (var beacon in page.Data)
            {
                if (beacon.Center != null
                    && beacon.Center.Type == "Point"
                    && beacon.Center.Coordinates.Length > 1)
                {
                    lng += beacon.Center.Coordinates[0];
                    lat += beacon.Center.Coordinates[1];
                    count += 1;
                }
            }

            if (count == 0)
            {
                return null;
            }

            var point = new CenterObjectV1
            {
                Type = "Point",
                Coordinates = new double[] { lng / count, lat / count }
            };
            return point;
        }

        public async Task<BeaconV1> CreateBeaconAsync(string correlationId, BeaconV1 beacon)
        {
            beacon.Id = beacon.Id ?? IdGenerator.NextLong();
            beacon.Type = beacon.Type ?? BeaconTypeV1.Unknown;

            return await _persistence.CreateAsync(correlationId, beacon);
        }

        public async Task<BeaconV1> UpdateBeaconAsync(string correlationId, BeaconV1 beacon)
        {
            beacon.Type = beacon.Type ?? BeaconTypeV1.Unknown;

            return await _persistence.UpdateAsync(correlationId, beacon);
        }

        public async Task<BeaconV1> DeleteBeaconByIdAsync(string correlationId, string id)
        {
            return await _persistence.DeleteByIdAsync(correlationId, id);
        }
    }
}
```

Pay special attention to the following two methods in the code above: 
- `SetReferences`
- `GetCommandSet`

The first one sets a dependency upon a persistence using the descriptor **beacons:persistence:*:*:1.0.** This descriptor reads: we don’t necessarily care which persistence we are given, as long as it implements the IBeaconsPersistence interface via the Referenceable pattern. This way, our controller can be used with the memory persistence, the mongoDB one, or any other one that meets this requirement.

The second method is used to get a set of commands, with which we can control this controller using the Commandable pattern. In our case, it will be used by the commandable HTTP service. If you’re not yet familiar with the Commandable pattern, make sure to find some time and read about it [here](../../../commons/commands/icommandable). To complete this pattern, lets implement a class called `BeaconsCommandSet`:

**/src/interfaces/logic/BeaconsCommandSet.cs**

```cs
namespace Beacons.Logic
{
    public class BeaconsCommandSet : CommandSet
    {
        private IBeaconsController _controller;

        public BeaconsCommandSet(IBeaconsController controller)
        {
            _controller = controller;

            AddCommand(MakeGetBeaconsCommand());
            AddCommand(MakeGetBeaconByIdBeaconsCommand());
            AddCommand(MakeGetBeaconByUdiCommand());
            AddCommand(MakeCalculatePositionCommand());
            AddCommand(MakeCreateBeaconCommand());
            AddCommand(MakeUpdateBeaconCommand());
            AddCommand(MakeDeleteBeaconByIdCommand());
        }

        private ICommand MakeGetBeaconsCommand()
        {
            return new Command(
                "get_beacons",
                new ObjectSchema()
                    .WithOptionalProperty("filter", new FilterParamsSchema())
                    .WithOptionalProperty("paging", new PagingParamsSchema()),
                async (correlationId, parameters) =>
                {
                    var filter = FilterParams.FromValue(parameters.Get("filter"));
                    var paging = PagingParams.FromValue(parameters.Get("paging"));
                    return await _controller.GetBeaconsAsync(correlationId, filter, paging);
                });
        }

        private ICommand MakeGetBeaconByIdBeaconsCommand()
        {
            return new Command(
                "get_beacon_by_id",
                new ObjectSchema()
                    .WithRequiredProperty("beacon_id", TypeCode.String),
                async (correlationId, parameters) =>
                {
                    var id = parameters.GetAsString("beacon_id");
                    return await _controller.GetBeaconByIdAsync(correlationId, id);
                });
        }

        private ICommand MakeGetBeaconByUdiCommand()
        {
            return new Command(
                "get_beacon_by_udi",
                new ObjectSchema()
                    .WithRequiredProperty("udi", TypeCode.String),
                async (correlationId, parameters) =>
                {
                    var udi = parameters.GetAsString("udi");
                    return await _controller.GetBeaconByUdiAsync(correlationId, udi);
                });
        }

        private ICommand MakeCalculatePositionCommand()
        {
            return new Command(
                "calculate_position",
                new ObjectSchema()
                    .WithRequiredProperty("site_id", TypeCode.String)
                    .WithRequiredProperty("udis", TypeCode.Array),
                async (correlationId, parameters) =>
                {
                    var siteId = parameters.GetAsString("site_id");
                    string[] udis = ConvertToStringList(parameters.Get("udis"));

                    return await _controller.CalculatePositionAsync(correlationId, siteId, udis);
                });
        }

        private ICommand MakeCreateBeaconCommand()
        {
            return new Command(
                "create_beacon",
                new ObjectSchema()
                    .WithRequiredProperty("beacon", new BeaconV1Schema()),
                async (correlationId, parameters) =>
                {
                    var beacon = ConvertToBeacon(parameters.GetAsObject("beacon"));
                    return await _controller.CreateBeaconAsync(correlationId, beacon);
                });
        }

        private ICommand MakeUpdateBeaconCommand()
        {
            return new Command(
               "update_beacon",
               new ObjectSchema()
                    .WithRequiredProperty("beacon", new BeaconV1Schema()),
               async (correlationId, parameters) =>
               {
                   var beacon = ConvertToBeacon(parameters.GetAsObject("beacon"));
                   return await _controller.UpdateBeaconAsync(correlationId, beacon);
               });
        }

        private ICommand MakeDeleteBeaconByIdCommand()
        {
            return new Command(
               "delete_beacon_by_id",
               new ObjectSchema()
                   .WithRequiredProperty("beacon_id", TypeCode.String),
               async (correlationId, parameters) =>
               {
                   var id = parameters.GetAsString("beacon_id");
                   return await _controller.DeleteBeaconByIdAsync(correlationId, id);
               });
        }

        private BeaconV1 ConvertToBeacon(object value)
        {
            return JsonConverter.FromJson<BeaconV1>(JsonConverter.ToJson(value));
        }

        private string[] ConvertToStringList(object value)
        {
            return JsonConverter.FromJson<string[]>(JsonConverter.ToJson(value));
        }

    }
}
```

To sum up this class’s code: we’re creating commands for each of the controller’s methods, and then registering them in the constructor. To create a command, we give it a name, a validation schema (if needed), and a callback function with the following three parameters:

- `correlationId`: string – used to identify the operation,
- `args`: Parameters - set of parameters received from the command being called,
- `callback` – callback function for returning the command’s result, or an error, if one occurs.

To be sure that our new methods are working correctly, let’s add some tests for the controller. The code for testing the controller is listed below:

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

These tests can be run using the same dotnet test command that we used to run the persistence tests.

Our service is now just one step away from being completed! All that we have left to write is [Step 5. Implementing an HTTP service.](../step5)

<span class="hide-title-link">

### [Step 6. Implementing an HTTP service.](../step5)

</span>
