
```ts
let overriden = connection.override(ConfigParams.fromTuples("host", "new host"));
// Returns
// {'discovery_key': 'discovery key 1',
// 'host': 'new host',
// 'port': '8080',
// 'protocol': 'http',
// 'uri': 'abc.com'}
```
