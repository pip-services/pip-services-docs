
```dart
connection.getDiscoveryKey();                           // Returns 'discovery key 1'
connection.getHost();                                   // Returns 'localhost'
connection.getPort();                                   // Returns 8080
connection.getPortWithDefault(5050);                    // Returns 8080 or 0000 if port not defined
connection.getProtocol();                               // Returns 'http'
connection.getProtocolWithDefault('default protocol');  // Returns 'http' or 'default protocol' if protocol field not defined
connection.getUri();                                    // Returns 'abc.com'
```
