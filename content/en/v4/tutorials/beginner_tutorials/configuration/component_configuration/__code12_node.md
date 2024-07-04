
```ts
let config = ConfigParams.fromTuples(
	"connection.host", "localhost",
	"connection.port", "8080"
);

let configReader = new MemoryConfigReader();
configReader.configure(config);

let parameters = ConfigParams.fromValue(process.env);
let result = await configReader.readConfig(ctx, parameters); 
// Result: connection.host=localhost;connection.port=8080
```
