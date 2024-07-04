
```ts
let references = References.fromTuples(
    new Descriptor("pip-services", "metrics-controller", "prometheus", "default", "1.0"), controller,
    new Descriptor("pip-services", "metrics-controller", "prometheus", "default", "2.0"), controller2,
    new Descriptor("pip-services", "counters", "prometheus", "default", "1.0"), counters,
    new Descriptor("pip-services", "context-info", "default", "*", "1.0"), new ContextInfo("tutorial", "Example context conmponent"),
    new Descriptor("pip-services", "logger", "console", "default", "1.0"), new ConsoleLogger()
);
```
