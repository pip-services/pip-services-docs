
```cs
using PipServices3.Commons.Config;
using PipServices3.Components.Auth;


class MyPersistence : IConfigurable, IReferenceable
{
    ...
    private string _username;
    private string _password;

    public void Configure(ConfigParams config)
    {
        ...
        var credentials = CredentialParams.FromConfig(config.GetSection("credential"));
        _username = credentials.Username;
        _password = credentials.Password;
    }
}

```
