
```ts
let configA = ConfigParams.fromTuples(
    "host", "broker1,broker2",
    "port", "8082",
    "username", "user2",
    "password", "pass123",
    "param1", "ABC",
    "param2", "XYZ",
    "param3", "p3A"
);
let configB = ConfigParams.fromTuples(
    "host", "broker3,broke42",
    "port", "8083",
    "username", "user2",
    "password", "pass1234",
    "param1", "ABCD",
    "param2", "WXYZ",
    "param3", "p3B"
);

let config = ConnectionUtils.concat(configA, configB, "username", "password");
```
