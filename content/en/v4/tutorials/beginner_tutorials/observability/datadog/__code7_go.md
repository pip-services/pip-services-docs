
```go
type MyComponentA struct {
	consoleLog bool
	logger     *dlog.DataDogLogger
}

func NewMyComponentA(logger *dlog.DataDogLogger) *MyComponentA {
	c := &MyComponentA{
		consoleLog: true,
		logger:     logger,
	}

	if c.consoleLog {
		logger.Info(context.Background(), "MyComponentA has been created.")
	}
	return c
}

func (c *MyComponentA) MyMethod(ctx context.Context) {
	defer c.logger.Info(ctx, "123", "Finally reached.")

	if c.consoleLog {
		fmt.Println("Hola amigo")
		fmt.Println("Hola amigoBonjour mon ami")
		c.logger.Info(ctx, "123", "Greetings created.")
	}
}
```
