
```cs
// name
var config = ConfigParams.FromTuples("name", "myservice:connector:aws:connector1:1.0",
                                         "param1", "ABC",
                                         "param2", 123);
var name = NameResolver.Resolve(config); // Returns myservice:connector:aws:connector1:1.0

// id
config = ConfigParams.FromTuples("id", "myservice:connector:aws:connector1:1.0",
                             "param1", "ABC",
                             "param2", 123);
var id = NameResolver.Resolve(config);  // Returns myservice:connector:aws:connector1:1.0

// If name cannot be determined

config = ConfigParams.FromTuples("param1", "ABC",
                                         "param2", 123);
name = NameResolver.Resolve(config); // Returns null
name = NameResolver.Resolve(config, "default name"); //Returns "default name"

// name and id
config = ConfigParams.FromTuples("name", "my_name", "id", "my id",
                                         "param1", "ABC",
                                         "param2", 123);
var result = NameResolver.Resolve(config); // Returns "my_name"

// descriptor
// Note: A descriptor class has the following parameters: "group", "type", "kind", "name", "version"
//       Name resolver will extract the value of the "name" parameter.

config = ConfigParams.FromTuples("descriptor", "myservice:connector:aws:connector1:1.0",
                                 "param1", "ABC",
                                 "param2", 123);
name = NameResolver.Resolve(config); // Returns connector1

```
