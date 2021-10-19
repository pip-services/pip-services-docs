
```cs
var config = ConfigParams.FromTuples(
    ...
	"options.param1", "ABC",
	"options.param2", 123
);
var options = OptionResolver.Resolve(config)   // Result: param1=ABC;param2=123

```


