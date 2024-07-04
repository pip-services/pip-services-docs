
```ts
let configReader = new YamlConfigReader("config.yml");
let parameters = ConfigParams.fromTuples("KEY1_VALUE", 123, "KEY2_VALUE", "ABC");
let result = await configReader.readConfig(ctx, parameters); // Result: key1=1234;key2=ABCD

```
