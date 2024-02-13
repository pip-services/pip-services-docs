
See: [NameResolver](../../../toolkit_api/net/commons/config/name_resolver/), [OptionsResolver](../../../toolkit_api/net/commons/config/options_resolver/)

```cs
var config = ConfigParams.FromTuples(
	"descriptor", "myservice:connector:aws:connector1:1.0",
	"param1", "ABC",
	"param2", 123
);
string name = NameResolver.Resolve(config); // Result: connector1

```


