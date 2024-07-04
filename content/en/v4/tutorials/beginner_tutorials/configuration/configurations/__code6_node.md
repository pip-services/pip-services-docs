
```ts
let additionalConfig1 = ConfigParams.fromTuples(
    "my_store1.user", "jdoe",
    "my_store1.password", "pass123",
    "my_store1.pin", "321"
);

let additionalConfig2 = ConfigParams.fromTuples(
    "my_store2.user", "David",
    "my_store2.password", "another_pass",
    "my_store2.pin", "0000"
);

let additionalConfig3 = ConfigParams.fromTuples(
    "param1", "value1"
);
  
let config = ConfigParams.mergeConfigs(additionalConfig1, additionalConfig2, additionalConfig3);
console.log(config);


```
