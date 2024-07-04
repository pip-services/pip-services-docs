
```ts
let overriden = connections[0].override(ConnectionParams.fromTuples("host", "new host"));
// Returns
// {'discovery_key': 'discovery key 1',
// 'host': 'new host',
// 'port': '8080',
// 'protocol': 'http',
// 'uri': 'abc.com'}
```
