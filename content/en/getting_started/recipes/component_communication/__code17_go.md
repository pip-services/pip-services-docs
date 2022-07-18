
```go
type MyComponentA struct {
	counters *pcount.PrometheusCounters

	ConsoleLog bool // console log flag
}

func NewMyComponentA() *MyComponentA {
	c := MyComponentA{
		ConsoleLog: true,
	}
	if c.ConsoleLog {
		fmt.Println("MyComponentA has been created.")
	}
	return &c
}

func (c *MyComponentA) SetReferences(references refer.IReferences) {
	p, err := references.GetOneRequired(
		refer.NewDescriptor("*", "counters", "prometheus", "*", "*"),
	)

	if p != nil && err == nil {
		c.counters = p.(*pcount.PrometheusCounters)
	}
}
```
