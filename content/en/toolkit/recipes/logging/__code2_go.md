
```go
func MyTask(correlationId string) {
	// create an artificial problem
	err := errors.New("Logging demo. Error created")
	logger.Error(correlationId, err, "Error created.")
}

```
