
See: [JsonConfigReader](../../../toolkit_api/golang/components/config/json_config_reader/)

```go
configReader := creader.NewJsonConfigReader("config.json")
parameters := cconfig.NewConfigParamsFromTuples("KEY1_VALUE", 123, "KEY2_VALUE", "ABC")
configReader.ReadConfig("123", parameters) // Result: key1=123;key2=ABC

```
