
```go
func MyTask() {
	// create an artificial problem
	err := errors.New("Logging demo. Error created")
	logger.Error(context.Background(), err, "Error created.")
}
```
