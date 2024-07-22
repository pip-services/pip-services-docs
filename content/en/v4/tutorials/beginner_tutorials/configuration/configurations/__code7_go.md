
```go
// name
config := conf.NewConfigParamsFromTuples("name", "myservice:connector:aws:connector1:1.0",
	"param1", "ABC",
	"param2", 123)
name := conf.NameResolver.Resolve(config) // Returns myservice:connector:aws:connector1:1.0

// id
config = conf.NewConfigParamsFromTuples("id", "myservice:connector:aws:connector1:1.0",
	"param1", "ABC",
	"param2", 123)
id := conf.NameResolver.Resolve(config) // Returns myservice:connector:aws:connector1:1.0

// If name cannot be determined

config = conf.NewConfigParamsFromTuples("param1", "ABC", "param2", 123)
name = conf.NameResolver.Resolve(config)                            // Returns ""
name = conf.NameResolver.ResolveWithDefault(config, "default name") //Returns "default name"

// name and id
config = conf.NewConfigParamsFromTuples("name", "my_name", "id", "my id",
	"param1", "ABC",
	"param2", 123)
result := conf.NameResolver.Resolve(config) // Returns "my_name"

// descriptor
// Note: A descriptor class has the following parameters: "group", "type", "kind", "name", "version"
//       Name resolver will extract the value of the "name" parameter.

config = conf.NewConfigParamsFromTuples("descriptor", "myservice:connector:aws:connector1:1.0",
	"param1", "ABC",
	"param2", 123)
name = conf.NameResolver.Resolve(config) // Returns connector1
```
