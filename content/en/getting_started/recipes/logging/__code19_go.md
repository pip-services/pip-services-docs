
```go
logger.Info(context.Background(), "123", "Composite logger is configured and ready for using")
logger.Warn(context.Background(), "123", "Example warning")
logger.Error(context.Background(), "123", errors.New("Example error"), "Error message")
logger.Debug(context.Background(), "123", "Debug info")
logger.Fatal(context.Background(), "123", errors.New("Fatal error"), "Error that crash the process")
```
