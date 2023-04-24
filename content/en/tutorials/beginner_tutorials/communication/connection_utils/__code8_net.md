
```cs

using System.Threading.Tasks;
using MongoDB.Driver;
using PipServices3.Commons.Config;
using PipServices3.Commons.Run;
using PipServices3.Components.Connect;


namespace ExampleApp
{
    class Program
    {
        static void Main(string[] args)
        {

            var options = ConfigParams.FromTuples(
                "host", "localhost",
                "port", ",27017",
                "username", "user",
                "password", "pass123",
                "protocol", "mongodb",
                "collection", "my_db_name"
            );

            // Create connection
            var conn = new MongoDbConnector();
            conn.Configure(options);
            conn.OpenAsync(null).Wait();
        }
    }

    public class MongoDbConnector: IOpenable, IConfigurable
    {
        // The MongoDB connection object.
        protected MongoClient _connection;
        /// The MongoDB database.
        protected IMongoDatabase _database;
        /// </summary>
        protected string _databaseName;

        protected ConfigParams _config;
        private bool secureMongo = false;
        
        public MongoDbConnector(bool secureMongo = false)
        {
            this.secureMongo = secureMongo;
        }

        public IMongoCollection<T> GetCollection<T>()
        {
            return _connection.GetDatabase(_databaseName).GetCollection<T>("test");
        }

        public void Configure(ConfigParams config)
        {
            _config = config;

            // if connection passed as uri
            if (_config.GetAsNullableString("uri") != null)
                _config = ConnectionUtils.ParseUri(_config.GetAsString("uri"), "mongodb", 27017);

            // if mongo without auth
            if (!secureMongo)
                _config = ConnectionUtils.Exclude(_config, "username", "password");
        }

        public bool IsOpen()
        {
            return _connection != null && _database != null;
        }

        public async Task OpenAsync(string correlationId)
        {
            var collection = _config.GetAsNullableString("collection");

            _config = ConnectionUtils.Exclude(_config, "collection");

            var uri = ConnectionUtils.ComposeUri(_config, "mongodb", 27017);
            uri += "/" + collection;

            _connection = new MongoClient(uri);
            _databaseName = MongoUrl.Create(uri).DatabaseName;
            _database = _connection.GetDatabase(_databaseName);

            await Task.Delay(0);
        }

        public async Task CloseAsync(string correlationId)
        {
            _connection = null;
            _database = null;
            _databaseName = null;

            await Task.Delay(0);
        }
    }
}

```
