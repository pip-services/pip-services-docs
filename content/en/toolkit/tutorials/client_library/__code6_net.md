

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
