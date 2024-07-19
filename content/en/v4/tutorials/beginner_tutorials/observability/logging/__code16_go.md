
```go
references := cref.NewReferencesFromTuples(context.Background(),
	cref.NewDescriptor("my-component", "logger", "console", "default", "1.0"), elasticSearchLogger,
	cref.NewDescriptor("my-component", "logger", "elasticsearch", "default", "1.0"), consoleLogger,
)

```
