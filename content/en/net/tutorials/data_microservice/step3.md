---
type: docs
no_list: true
title: "Step 4. Implementing persistence components"
linkTitle: "Step 4. Persistence"
gitUrl: "https://github.com/pip-services-samples/service-beacons-dotnet"
---

In this step, we’ll be creating the components for persisting the data model that we defined in the previous step. In our projects, it is advisale to create at least two persistences: one for storing data in-memory (used for testing), and another for storing data in an external database (used in production). With the Beacons example, we’ll be doing the same.

Let’s start by navigating to the **src/service** directory and creating a **persistence** directory inside it. This directory is going to contain all of the files that relate to this step of the tutorial.

The first thing we are going to do is define what functionality our persistent storage should have. We can define these in a form of an interface and name it `IBeaconsPersistence`

**src/interface/persistence/IBeaconsPersistence.cs**

```cs
namespace Beacons.Persistence
{
    public interface IBeaconsPersistence
    {
        Task<DataPage<BeaconV1>> GetPageByFilterAsync(string correlationId, FilterParams filter, PagingParams paging);
        Task<BeaconV1> GetOneByIdAsync(string correlationId, string id);
        Task<BeaconV1> GetOneByUdiAsync(string correlationId, string udi);
        Task<BeaconV1> CreateAsync(string correlationId, BeaconV1 item);
        Task<BeaconV1> UpdateAsync(string correlationId, BeaconV1 item);
        Task<BeaconV1> DeleteByIdAsync(string correlationId, string id);
    }
}

```

The first persistence to implement this interface will be the memory persistence, which we will name **BeaconsMemoryPersistence**. This class will need to extend the `IdentifiableMemoryPersistence` class from the **pip-services3-data** module, and have a few additional functions added to it. One of these functions will be used to create filters for the `GetPageByFilterAsync` method that we’re going to override from the parent class. This function will be called `compose_filter`, as it’s going to allow us to filter data in accordance with the received filtering parameters. The overriding `GetPageByFilterAsync` method then simply calls the parent’s method, passing the `compose_filter` function as a filter parameter. The second function that we will need to implement is the `GetOneByUdiAsync` method, whose purpose will be to retrieve a beacon by its `udi`.

The resulting code for this class is listed below:

**src/interface/persistence/BeaconsMemoryPersistence.cs**

```cs
namespace Beacons.Persistence
{
    public class BeaconsMemoryPersistence : IdentifiableMemoryPersistence<BeaconV1, string>, IBeaconsPersistence
    {
        public BeaconsMemoryPersistence()
        {
            _maxPageSize = 1000;
        }

        private List<Func<BeaconV1, bool>> ComposeFilter(FilterParams filter)
        {
            filter = filter ?? new FilterParams();

            var id = filter.GetAsNullableString("id");
            var siteId = filter.GetAsNullableString("site_id");
            var label = filter.GetAsNullableString("label");
            var udi = filter.GetAsNullableString("udi");

            var udis = filter.GetAsNullableString("udis");
            var udiList = udis != null ? udis.Split(',') : null;

            return new List<Func<BeaconV1, bool>>() {
                (item) =>
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
                }
            };
        }

        public Task<DataPage<BeaconV1>> GetPageByFilterAsync(string correlationId, FilterParams filter, PagingParams paging)
        {
            return base.GetPageByFilterAsync(correlationId, ComposeFilter(filter), paging);
        }

        public async Task<BeaconV1> GetOneByUdiAsync(string correlationId, string udi)
        {
            BeaconV1 item = null;

            lock (_lock)
            {
                item = _items.Find((beacon) => { return beacon.Udi == udi; });
            }

            if (item != null) _logger.Trace(correlationId, "Found beacon by {0}", udi);
            else _logger.Trace(correlationId, "Cannot find beacon by {0}", udi);

            return await Task.FromResult(item);
        }
    }
}

```

And that’s pretty much it for the memory persistence.

Now let’s move on to something a bit more sophisticated - a MongoDB persistence. Here we’re also going to use an already existing base class, `IdentifiableMongoDbPersistence`, from the **pip-services3-mongodb** module, and write a few functions, the most important of which will be `compose_filter`. This time around, its implementation is going to contain syntax for creating database requests. The resulting code for this class is listed below: 

**src/interface/persistence/BeaconsMongoDbPersistence.cs**

```cs
namespace Beacons.Persistence
{
    public class BeaconsMongoDbPersistence : IdentifiableMongoDbPersistence<BeaconV1, string>, IBeaconsPersistence
    {
        public BeaconsMongoDbPersistence()
            : base("beacons")
        { }

        private new FilterDefinition<BeaconV1> ComposeFilter(FilterParams filterParams)
        {
            filterParams = filterParams ?? new FilterParams();

            var builder = Builders<BeaconV1>.Filter;
            var filter = builder.Empty;

            var id = filterParams.GetAsNullableString("id");
            if (!string.IsNullOrEmpty(id))
                filter &= builder.Eq(b => b.Id, id);
            
            var siteId = filterParams.GetAsNullableString("site_id");
            if (!string.IsNullOrEmpty(siteId))
                filter &= builder.Eq(b => b.SiteId, siteId);
            
            var label = filterParams.GetAsNullableString("label");
            if (!string.IsNullOrEmpty(label))
                filter &= builder.Eq(b => b.Label, label);
            
            var udi = filterParams.GetAsNullableString("udi");
            if (!string.IsNullOrEmpty(udi))
                filter &= builder.Eq(b => b.Udi, udi);

            var udis = filterParams.GetAsNullableString("udis");
            var udiList = !string.IsNullOrEmpty(udis) ? udis.Split(',') : null;
            if (udiList != null)
                filter &= builder.In(b => b.Udi, udiList);

            return filter;
        }

        public async Task<DataPage<BeaconV1>> GetPageByFilterAsync(
            string correlationId, FilterParams filter, PagingParams paging)
        {
            return await GetPageByFilterAsync(correlationId, ComposeFilter(filter), paging);
        }

        public async Task<BeaconV1> GetOneByUdiAsync(string correlationId, string udi)
        {
            var builder = Builders<BeaconV1>.Filter;
            var filter = builder.Eq(x => x.Udi, udi);
            var result = await _collection.Find(filter).FirstOrDefaultAsync();

            if (result != null)
                _logger.Trace(correlationId, "Retrieved from {0} with udi = {1}", _collectionName, udi);
            else
                _logger.Trace(correlationId, "Nothing found from {0} with udi = {1}", _collectionName, udi);

            return result;

        }
    }
}
```

Let’s take a quick look at what’s in this code. A basic set of CRUD operations are already implemented in the data module. There’s minimal code that needs to be written by us as developers for this class: just a filter function, and non-standard methods for searching by a specific data field. The rest of the methods that we defined in our interface are already implemented in the parent class.

To make sure that the code does just what we expect it to do, let’s add some tests. We’ll be placing the files with our tests in the **test** directory and organizing them into subdirectories, whose names will reflect the components they are testing.

Thanks to the modular structure of microservices, each component is easily testable with the help of simple mock tests. We’ll start with creating a class that contains a set of testable commands and checks the results we receive with the help of standard testing libraries. This class will be accepting any persistence that implements our `IBeaconsPersistence` interface as a parameter. This way we can use the same set of commands to test both of our persistence implementations. This set of commands should contain standard CRUD operations, which are implemented in the parent class, as well as the methods we’ve added in the child classes.

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

Now that we have a set of tests, we can dive into the testing itself. To do this, we’ll create files for testing each of our persistences and run them.

**/test/service.test/persistence/BeaconMemoryPersistenceTest.cs**

```cs
namespace Beacons.Persistence
{
    public class MemoryBeaconsPersistenceTest: IDisposable
    {
        public BeaconsMemoryPersistence _persistence;
        public BeaconsPersistenceFixture _fixture;

        public MemoryBeaconsPersistenceTest()
        {
            _persistence = new BeaconsMemoryPersistence();
            _persistence.Configure(new ConfigParams());

            _fixture = new BeaconsPersistenceFixture(_persistence);

            _persistence.OpenAsync(null).Wait();
        }

        public void Dispose()
        {
            _persistence.CloseAsync(null).Wait();    
        }

        [Fact]
        public async Task TestCrudOperationsAsync()
        {
            await _fixture.TestCrudOperationsAsync();
        }

        [Fact]
        public async Task TestGetWithFiltersAsync()
        {
            await _fixture.TestGetWithFiltersAsync();
        }
    }
}

```

To run these tests, we run the command npm test from a terminal at the root of the project.

*“But where exactly is the data going to be stored when we get the service actually up and running?”* you may ask. Jumping ahead, we’ll tell you that the config.yml configuration file takes care of that. It contains configurations for all of the service’s components, such as: which logger to use, where performance counter output should be, what database to connect to and using what parameters, etc. We’ll discuss this in more detail later on in this tutorial.

Now that we can persist our data, let’s move on to [Step 4. Implementing a controller.](../step4)

<span class="hide-title-link">

### [Step 5. Implementing a controller.](../step4)

</span>
