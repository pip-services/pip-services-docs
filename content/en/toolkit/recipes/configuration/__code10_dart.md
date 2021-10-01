
```dart
var config = ConfigParams.fromTuples(
	...
	"options.param1", "ABC",
	"options.param2", 123
);
var options = OptionsResolver.resolve(config); // Result: param1=ABC;param2=123

```

