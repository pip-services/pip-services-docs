
```go
loggerLocator := cref.NewDescriptor("*", "logger", "console", "*", "1.0")
result1, err := compositeFactory.Create(loggerLocator)
```
