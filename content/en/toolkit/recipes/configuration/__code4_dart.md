
```dart
var configWithSections = ConfigParams.fromTuples(
  	"param1", 123
  	"options.param1", "ABC",
  	"options.param2", "XYZ"
);
var options = configWithSections.getSection("options");

```

