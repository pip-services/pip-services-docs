
```ts
let config = ConfigParams.fromTuples(
    "host", "broker1,broker2",
    "port", ",8082",
    "username", "user",
    "password", "pass123",
    "param1", "ABC",
    "param2", "XYZ",
    "param3", null
);

let config2 = ConnectionUtils.include(config, "username", "password");
```
