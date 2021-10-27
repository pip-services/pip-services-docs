
```cs
var config = ConfigParams.FromTuples(
    "param1", "XYZ",
    "param2", 345
);

component.Configure(config);

/// Also, often components can have hard-coded presets. The ConfigParams class has methods that allow to easily use them as defaults:

class MyComponent : IConfigurable
{
    private string _param1 = "ABC";
    private int _param2 = 123;

    public void Configure(ConfigParams config)
    {
        this._param1 = config.GetAsStringWithDefault("param1", _param1);
        this._param2 = config.GetAsIntegerWithDefault("param2", _param2);
    }
}

```
