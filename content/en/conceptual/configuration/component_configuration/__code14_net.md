
```cs
configReader = YamlConfigReader("config.yml");
parameters = ConfigParams.FromTuples("KEY1_VALUE", 123, "KEY2_VALUE", "ABC");;
configReader.ReadConfig("123", parameters);    // Result: key1=1234;key2=ABCD

```


