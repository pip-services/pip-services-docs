
```go
logger.Info("123", "Composite logger is configured and ready for using")
logger.Warn("123", "Example warning")
logger.Error("123", errors.New("Example error"), "Error message")
logger.Debug("123", "Debug info")
logger.Fatal("123", errors.New("Fatal error"), "Error that crash the process")
```
