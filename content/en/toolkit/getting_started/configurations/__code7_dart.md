
```dart
// name
var config = ConfigParams.fromTuples([
  'name',
  'myservice:connector:aws:connector1:1.0',
  'param1',
  'ABC',
  'param2',
  123
]);
var name = NameResolver.resolve(config); // Returns myservice:connector:aws:connector1:1.0

// id
config = ConfigParams.fromTuples([
  'id',
  'myservice:connector:aws:connector1:1.0',
  'param1',
  'ABC',
  'param2',
  123
]);
var id = NameResolver.resolve(config); // Returns myservice:connector:aws:connector1:1.0

// If name cannot be determined

config = ConfigParams.fromTuples(['param1', 'ABC', 'param2', 123]);
name = NameResolver.resolve(config); // Returns null
name = NameResolver.resolve(config, 'default name'); //Returns "default name"

// name and id
  config = ConfigParams.fromTuples(['name', 'my_name', 'id', 'my id', 'param1', 'ABC', 'param2', 123]);
  var result = NameResolver.resolve(config); // Returns "my_name"

// descriptor
// Note: A descriptor class has the following parameters: "group", "type", "kind", "name", "version"
//       Name resolver will extract the value of the "name" parameter.

config = ConfigParams.fromTuples([
  'descriptor',
  'myservice:connector:aws:connector1:1.0',
  'param1',
  'ABC',
  'param2',
  123
]);
name = NameResolver.resolve(config); // Returns connector1

```
