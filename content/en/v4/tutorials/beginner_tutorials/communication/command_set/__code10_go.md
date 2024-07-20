
```go
type MyEventSet struct {
	*ccmd.CommandSet
}

func NewMyEventSet() *MyEventSet {
	c := &MyEventSet{
		CommandSet: ccmd.NewCommandSet(),
	}

	c.AddEvents([]ccmd.IEvent{c.event2(), c.event3()})
	return c
}

func (c *MyEventSet) event2() ccmd.IEvent {
	return ccmd.NewEvent("event2")
}

func (c *MyEventSet) event3() ccmd.IEvent {
	return ccmd.NewEvent("event3")
}
```
