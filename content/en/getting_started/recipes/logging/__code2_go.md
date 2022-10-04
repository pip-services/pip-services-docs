
```go
func MyTask(correlationId string) {
	// create an artificial problem
	err := errors.New("Logging demo. Error created")
	logger.Error(context.Background(), correlationId, err, "Error created.")
}

```
