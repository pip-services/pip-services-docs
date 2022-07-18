
```cs
using PipServices3.Commons.Refer;
using PipServices3.Components.Info;

var context_info = new ContextInfo();
context_info.Name = "Test";
context_info.Description = "This is a test container";

var references = References.FromTuples(
    new Descriptor("pip-services", "context-info", "default", "default", "1.0"), context_info,
    new Descriptor("pip-services", "counters", "prometheus", "default", "1.0"), counters,
    new Descriptor("pip-services", "metrics-service", "prometheus", "default", "1.0"), service
);

service.SetReferences(references);
counters.SetReferences(references);
```
