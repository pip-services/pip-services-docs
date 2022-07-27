
```go
contextInfo := cinfo.NewContextInfo()
contextInfo.Name = "Test"
contextInfo.Description = "This is a test container"

references := refer.NewReferencesFromTuples(
	refer.NewDescriptor("pip-services", "context-info", "default", "default", "1.0"), contextInfo,
	refer.NewDescriptor("pip-services", "counters", "prometheus", "default", "1.0"), counters,
	refer.NewDescriptor("pip-services", "metrics-service", "prometheus", "default", "1.0"), service,
)

service.SetReferences(references)
counters.SetReferences(references)
```
