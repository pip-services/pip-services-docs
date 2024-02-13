
```cs
using PipServices3.Commons.Config;
using PipServices3.Commons.Refer;
using PipServices3.Components.Connect;


class MyPersistence : IConfigurable, IReferenceable
{
    private ConnectionResolver _connectionResolver = new ConnectionResolver();
    private string _host;
    private int _port;

    public void Configure(ConfigParams config)
    {
        this._connectionResolver.Configure(config);
    }

    public async void SetReferences(IReferences references)
    {
        this._connectionResolver.SetReferences(references);

        var connection = await _connectionResolver.ResolveAsync(null);
        this._host = connection.Host;
        this._port = connection.GetPortWithDefault(27017);
    }
}


```
