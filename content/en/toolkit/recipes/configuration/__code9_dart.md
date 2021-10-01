
```dart
var config = ConfigParams.fromTuples(
	"descriptor", "myservice:connector:aws:connector1:1.0",
	"param1", "ABC",
	"param2", 123
);

var name = NameResolver.resolve(config); // Result: connector1

```

