
```go
// Reference setting
client := NewMyDirectClient()
client.SetReferences(context.Background(), cref.NewReferencesFromTuples(context.Background(),
	cref.NewDescriptor("pip-services", "service", "service", "default", "1.0"), myService,
))
```
