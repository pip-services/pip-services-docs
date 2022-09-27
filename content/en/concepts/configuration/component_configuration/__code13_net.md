
See: [JsonConfigReader](../../../toolkit_api/net/components/config/json_config_reader/)

```cs
var configReader = JsonConfigReader("config.json");
var parameters = ConfigParams.FromTuples("KEY1_VALUE", 123, "KEY2_VALUE", "ABC");
configReader.ReadConfig("123", parameters);    // Result: key1=123;key2=ABC

```

