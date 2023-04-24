
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
