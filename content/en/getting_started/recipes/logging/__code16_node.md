
```ts
let references = References.fromTuples(
    new Descriptor("my-component", "logger", "console", "default", "1.0"), elasticSearchLogger,
    new Descriptor("my-component", "logger", "elasticsearch", "default", "1.0"), consoleLogger
);
```
