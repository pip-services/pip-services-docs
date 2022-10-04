
```go
contextInfo := cinfo.NewContextInfo()
contextInfo.Name = "Test"
contextInfo.Description = "This is a test container"

references := refer.NewReferencesFromTuples(context.Background(),
	refer.NewDescriptor("pip-services", "context-info", "default", "default", "1.0"), contextInfo,
	refer.NewDescriptor("pip-services", "counters", "prometheus", "default", "1.0"), counters,
	refer.NewDescriptor("pip-services", "metrics-service", "prometheus", "default", "1.0"), service,
)

service.SetReferences(context.Background(), references)
counters.SetReferences(context.Background(), references)

```
