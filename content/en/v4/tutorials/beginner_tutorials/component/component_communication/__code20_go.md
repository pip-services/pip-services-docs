
```go
references := refer.NewReferencesFromTuples(context.Background(),
	refer.NewDescriptor("pip-services", "metrics-controller", "prometheus", "default", "1.0"), controller,
	refer.NewDescriptor("pip-services", "metrics-controller", "prometheus", "default", "2.0"), controller2,
	refer.NewDescriptor("pip-services", "counters", "prometheus", "default", "1.0"), counters,
	refer.NewDescriptor("pip-services", "context-info", "default", "*", "1.0"), cinfo.NewContextInfo(),
	refer.NewDescriptor("pip-services", "logger", "console", "default", "1.0"), clog.NewConsoleLogger(),
)
```
