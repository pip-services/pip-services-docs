
```go
type MyComponentA struct {
	consoleLog bool
	counters   *dcount.DataDogCounters
}

func NewMyComponentA(counters *dcount.DataDogCounters) *MyComponentA {
	c := &MyComponentA{
		consoleLog: true,
		counters:   counters,
	}

	if c.consoleLog {
		fmt.Println("MyComponentA has been created.")
	}
	return c
}

func (c *MyComponentA) Configure(config *conf.ConfigParams) {
	c.counters.Configure(config)
}

func (c *MyComponentA) GetCounters() *dcount.DataDogCounters {
	return c.counters
}

func (c *MyComponentA) IsOpen() bool {
	return c.counters.IsOpen()
}

func (c *MyComponentA) Open(correlationId string) error {
	return c.counters.Open(correlationId)
}

func (c *MyComponentA) Close(correlationId string) error {
	return c.counters.Close(correlationId)
}

func (c *MyComponentA) MyMethod() {
	c.counters.Increment("mycomponent.mymethod.calls", 1)
	timing := c.counters.BeginTiming("mycomponent.mymethod.exec_time")

	defer timing.EndTiming()

	if c.consoleLog {
		fmt.Println("Hola amigo")
		fmt.Println("Hola amigoBonjour mon ami")
	}

	c.counters.Dump()
}

```
