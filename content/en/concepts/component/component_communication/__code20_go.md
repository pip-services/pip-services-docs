
```go
references := refer.NewReferencesFromTuples(context.Background(),
	refer.NewDescriptor("pip-services", "metrics-service", "prometheus", "default", "1.0"), service,
	refer.NewDescriptor("pip-services", "metrics-service", "prometheus", "default", "2.0"), service2,
	refer.NewDescriptor("pip-services", "counters", "prometheus", "default", "1.0"), counters,
	refer.NewDescriptor("pip-services", "context-info", "default", "*", "1.0"), cinfo.NewContextInfo(),
	refer.NewDescriptor("pip-services", "logger", "console", "default", "1.0"), clog.NewConsoleLogger(),
)
```
