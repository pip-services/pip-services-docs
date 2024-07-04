
```ts
let configWithSections = ConfigParams.fromTuples(
    "param1", 123,
    "options.param1", "ABC",
    "options.param2", "XYZ"
);
let options = configWithSections.getSection("options");
```
