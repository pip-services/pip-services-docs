
```cs
var config = ConfigParams.FromTuples(
	"descriptor", "myservice:connector:aws:connector1:1.0",
	"param1", "ABC",
	"param2", 123
);
string name = NameResolver.Resolve(config); // Result: connector1

```


