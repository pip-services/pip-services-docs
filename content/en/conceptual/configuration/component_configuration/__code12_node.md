
See: [MemoryConfigReader](../../../toolkit_api/node/components/config/memory_config_reader/), [ConfigReader](../../../toolkit_api/node/components/config/config_reader/)

```typescript
let config = ConfigParams.fromTuples(
	"connection.host", "localhost",
	"connection.port", "8080"
);

let configReader = new MemoryConfigReader();
configReader.configure(config);

let parameters = ConfigParams.fromValue(process.env);
let result = await configReader.readConfig("123", parameters); 
// Result: connection.host=localhost;connection.port=8080


```

