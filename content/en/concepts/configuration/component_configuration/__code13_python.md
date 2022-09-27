
See: [JsonConfigReader](../../../toolkit_api/python/components/config/json_config_reader/)

```python
configReader = JsonConfigReader("config.json")
parameters = ConfigParams.from_tuples("KEY1_VALUE", 123, "KEY2_VALUE", "ABC")
configReader.read_config_("123", parameters)    # Result: key1=123;key2=ABC

```

