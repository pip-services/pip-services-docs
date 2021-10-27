
```cs
using PipServices3.Commons.Config;
using PipServices3.Commons.Refer;
using PipServices3.Components.Auth;


class MyPersistence : IConfigurable, IReferenceable
{
    ...
    private CredentialResolver _credentialResolver = new CredentialResolver();
    private string _username;
    private string _password;

    public void Configure(ConfigParams config)
    {
        ...
        this._connectionResolver.Configure(config);
    }

    public async void SetReferences(IReferences references)
    {
        ...
        this._credentialResolver.SetReferences(references);

        var credentials = await _credentialResolver.LookupAsync(null);
        this._username = credentials.Username;
        this._password = credentials.Password;
    }
}


```
