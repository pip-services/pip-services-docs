
```cs
using PipServices3.Commons.Config;
using PipServices3.Components.Connect;


class MyPersistence : IConfigurable
{
    private string _host;
    private int _port;

    public void Configure(ConfigParams config)
    {
        var connection = ConnectionParams.FromConfig(config.GetSection("connection"));
        _host = connection.Host;
        _port = connection.GetPortWithDefault(27017);
    }
}


```
