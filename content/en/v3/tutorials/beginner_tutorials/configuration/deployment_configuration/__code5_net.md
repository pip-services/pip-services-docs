
```cs
using System;
using System.Runtime.Serialization;
using System.Threading.Tasks;

using PipServices3.Commons.Config;
using PipServices3.Commons.Refer;
using PipServices3.Commons.Data;
using PipServices3.Rpc.Services;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using PipServices3.MySql.Persistence;
using PipServices3.Components.Build;
using PipServices3.Container;
using PipServices3.Rpc.Build;
using PipServices3.Postgres.Persistence;


[DataContract]
public class MyFriend : IStringIdentifiable
{
    [DataMember(Name = "id")]
    public string Id { get; set; }

    [DataMember(Name = "type")]
    public string Type { get; set; }

    [DataMember(Name = "name")]
    public string Name { get; set; }
}



public class HelloFriendRestService: RestService
{
    protected HelloFriendController controller;

    public HelloFriendRestService() : base()
    {
        _baseRoute = "/hello_friend";
    }
    
    public override void Configure(ConfigParams config)
    {
        base.Configure(config);
    }

    public override void SetReferences(IReferences references)
    {
        base.SetReferences(references);
        controller = references.GetOneRequired<HelloFriendController>(new Descriptor("hello-friend", "controller", "*", "*", "1.0"));
    }

    private async Task Greeting(HttpRequest req, HttpResponse res, RouteData routeData)
    {
        var result = await controller.Greeting();
        await SendResultAsync(res, result);
    }

    private async Task CreateAsync(HttpRequest req, HttpResponse res, RouteData routeData)
    {
        var correlationId = this.GetCorrelationId(req);
        var friend = new MyFriend() { Id = req.Query["id"], Type = req.Query["type"], Name = req.Query["Name"] };
        var result = await controller.CreateAsync(correlationId, friend);
        await SendResultAsync(res, result);
    }

    public override void Register()
    {
        RegisterRoute(method: "GET", route: "/greeting", action: Greeting);
        RegisterRoute(method: "GET", route: "/greeting_create", action: CreateAsync);
    }
}



public class HelloFriendController : IConfigurable, IReferenceable
{
    private string defaultName;

    private IMyDataPersistence persistence;

    public HelloFriendController()
    {
        defaultName = "Pip User";
    }

    public void Configure(ConfigParams config)
    {
        defaultName = config.GetAsStringWithDefault("default_name", defaultName);
    }

    public void SetReferences(IReferences references)
    {
        persistence = references.GetOneRequired<IMyDataPersistence>(new Descriptor("hello-friend", "persistence", "*", "*", "1.0"));
    }

    public async Task<string> Greeting()
    {
        var filter = FilterParams.FromTuples("type", "friend");
        var selectedFilter = await persistence.GetOneRandomAsync(null, filter);
        var name = selectedFilter!= null ? selectedFilter.Name : null;

        return $"Hello, {name} !";
    }

    public async Task<MyFriend> CreateAsync(string correlationId, MyFriend item)
    {
        var res = await persistence.CreateAsync(correlationId, item);

        return res;
    }
}

    
    
public interface IMyDataPersistence
{
    Task<MyFriend> GetOneRandomAsync(string correlationId, FilterParams filter);
    Task<MyFriend> CreateAsync(string correlationId, MyFriend item);
}
        


public class HelloFriendPersistence1 : IdentifiableMySqlPersistence<MyFriend, string>, IMyDataPersistence
{
    public HelloFriendPersistence1() : base("myfriends3") { }

    protected override void DefineSchema()
    {
        ClearSchema();
        EnsureSchema($"CREATE TABLE IF NOT EXISTS {_tableName} (id VARCHAR(32) PRIMARY KEY, `type` VARCHAR(50), `name` TEXT)");
    }

    private static string ComposeFilter(FilterParams filter)
    {
        filter ??= new FilterParams();
        var type = filter.GetAsNullableString("type");
        var name = filter.GetAsNullableString("name");

        var filterCondition = "";
        if (type != null)
            filterCondition += "`type`='" + type + "'";
        if (name != null)
            filterCondition += "`name`='" + name + "'";

        return filterCondition;
    }

    public Task<MyFriend> GetOneRandomAsync(string correlationId, FilterParams filter)
    {
        return base.GetOneRandomAsync(correlationId, ComposeFilter(filter));
    }
}


       
public class HelloFriendPersistence2 : IdentifiablePostgresPersistence<MyFriend, string>, IMyDataPersistence
{
    public HelloFriendPersistence2() : base("myfriends3") { }

    protected override void DefineSchema()
    {
        ClearSchema();
        EnsureSchema($"CREATE TABLE IF NOT EXISTS {_tableName} (id TEXT PRIMARY KEY, type TEXT, name TEXT)");
    }

    private static string ComposeFilter(FilterParams filter)
    {
        filter ??= new FilterParams();
        var type = filter.GetAsNullableString("type");
        var name = filter.GetAsNullableString("content");

        var filterCondition = "";
        if (type != null)
            filterCondition += "type='" + type + "'";
        if (name != null)
            filterCondition += "name='" + name + "'";

        return filterCondition;
    }

    public Task<MyFriend> GetOneRandomAsync(string correlationId, FilterParams filter)
    {
        return base.GetOneRandomAsync(correlationId, ComposeFilter(filter));
    }
}



public class HelloFriendServiceFactory: Factory
{
    public HelloFriendServiceFactory(): base()
    {
        var HttpServiceDescriptor = new Descriptor("hello-friend", "service", "http", "*", "1.0");          // View
        var ControllerDescriptor = new Descriptor("hello-friend", "controller", "default", "*", "1.0");     // Controller
        var PersistenceDescriptor1 = new Descriptor("hello-friend", "persistence", "mysql", "*", "1.0");    // Persistence
        var PersistenceDescriptor2 = new Descriptor("hello-friend", "persistence", "postgres", "*", "1.0"); // Persistence

        RegisterAsType(HttpServiceDescriptor, typeof(HelloFriendRestService));   // View
        RegisterAsType(ControllerDescriptor, typeof(HelloFriendController));     // Controller
        RegisterAsType(PersistenceDescriptor1, typeof(HelloFriendPersistence1)); // Persistence
        RegisterAsType(PersistenceDescriptor2, typeof(HelloFriendPersistence2)); // Persistence
    }
}



public class HelloFriendProcess: ProcessContainer
{
    public HelloFriendProcess(): base("hello-friend", "HelloFriend microservice")
    {
        _configPath = "../../../config.yaml";

        _factories.Add(new HelloFriendServiceFactory());
        _factories.Add(new DefaultRpcFactory());
    }
}



class Program
{

    static void Main(string[] args)
    {
        try
        {
            # Step 1 - Database selection
            Environment.SetEnvironmentVariable("MYSQL_ENABLED", "true");
            //Environment.SetEnvironmentVariable("POSTGRES_ENABLED", "true");

            # Step 2 - The run() command
            var task = (new HelloFriendProcess()).RunAsync(args);
            task.Wait();
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine(ex);
        }
    }
}

```

