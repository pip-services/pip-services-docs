
```go
logger.Info(context.Background(), "Composite logger is configured and ready for using")
logger.Warn(context.Background(), "Example warning")
logger.Error(context.Background(), errors.New("Example error"), "Error message")
logger.Debug(context.Background(), "Debug info")
logger.Fatal(context.Background(), errors.New("Fatal error"), "Error that crash the process")
```
