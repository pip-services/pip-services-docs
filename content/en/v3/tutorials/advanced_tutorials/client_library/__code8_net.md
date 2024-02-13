
**/test/version1/BeaconsHttpClientV1Test.py**

```cs
    [Collection("Sequential")]
    public class BeaconsHttpClientV1Test : IDisposable
    {
        private static readonly ConfigParams RestConfig = ConfigParams.FromTuples(
            "connection.protocol", "http",
            "connection.host", "localhost",
            "connection.port", 3000
        );

        private BeaconsMemoryPersistence _persistence;
        private BeaconsController _controller;
        private BeaconsRestServiceV1 _service;
        private BeaconsRestClientV1 _client;
        private BeaconsClientV1Fixture _fixture;

        public BeaconsHttpClientV1Test()
        {
            _persistence = new BeaconsMemoryPersistence();
            _controller = new BeaconsController();
            _service = new BeaconsRestServiceV1();
            _client = new BeaconsRestClientV1();

            IReferences references = References.FromTuples(
                new Descriptor("beacons", "persistence", "memory", "default", "1.0"), _persistence,
                new Descriptor("beacons", "controller", "default", "default", "1.0"), _controller,
                new Descriptor("beacons", "service", "http", "default", "1.0"), _service,
                new Descriptor("beacons", "client", "http", "default", "1.0"), _client
            );

            _controller.SetReferences(references);

            _service.Configure(RestConfig);
            _service.SetReferences(references);

            _client.Configure(RestConfig);
            _client.SetReferences(references);

            _fixture = new BeaconsClientV1Fixture(_client);

            _service.OpenAsync(null).Wait();
            _client.OpenAsync(null).Wait();
        }

        public void Dispose()
        {
            _client.CloseAsync(null).Wait();
            _service.CloseAsync(null).Wait();
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
