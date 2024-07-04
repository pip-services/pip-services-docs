
```ts
let context_info = new ContextInfo();
context_info.name = "Test";
context_info.description = "This is a test container";

let references = References.fromTuples(
    new Descriptor("pip-services", "context-info", "default", "default", "1.0"), context_info,
    new Descriptor("pip-services", "counters", "prometheus", "default", "1.0"), counters,
    new Descriptor("pip-services", "metrics-controller", "prometheus", "default", "1.0"), controller
);

controller.setReferences(references);
counters.setReferences(references);
```
