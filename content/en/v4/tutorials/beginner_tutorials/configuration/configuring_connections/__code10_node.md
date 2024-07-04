
```ts
connections[0].getDiscoveryKey();                            // Returns 'discovery key 1'
connections[0].getHost();                                    // Returns 'localhost'
connections[0].getPort();                                    // Returns 8080
connections[0].getPortWithDefault(5050);                     // Returns 8080 or 0000 if port not defined
connections[0].getProtocol();                                // Returns 'http'
connections[0].getProtocolWithDefault("default protocol");   // Returns 'http' or 'default protocol' if protocol field not defined
connections[0].getUri();                                     // Returns 'abc.com'

```
