
```go
connection.AddSection("sectionA", conf.NewConfigParamsFromTuples("key1", "ABCDE"))
// connection: 
// {'discovery_key': 'discovery key 1',
// 'host': 'localhost',
// 'port': '8080',
// 'protocol': 'http',
// 'uri': 'abc.com',
// 'parameter_name': 'paramter_value',
// 'sectionA.key1': 'ABCDE'}
```
