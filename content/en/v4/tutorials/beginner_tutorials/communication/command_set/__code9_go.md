
```go
type MyEventSet struct {
	*ccmd.CommandSet
}

func NewMyEventSet() *MyEventSet {
	c := &MyEventSet{
		CommandSet: ccmd.NewCommandSet(),
	}

	c.AddEvent(c.event1())
	return c
}

func (c *MyEventSet) event1() ccmd.IEvent {
	return ccmd.NewEvent("event1")
}
```
