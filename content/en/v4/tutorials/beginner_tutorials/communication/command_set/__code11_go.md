
```go
type MyEventSet struct {
	*ccmd.CommandSet
}

func NewMyEventSet() *MyEventSet {
	c := &MyEventSet{
		CommandSet: ccmd.NewCommandSet(),
	}

	c.AddEvents([]ccmd.IEvent{c.event2(), c.event3()})
	c.AddListener(c.listener1())
	return c
}

func (c *MyEventSet) event2() ccmd.IEvent {
	return ccmd.NewEvent("event2")
}

func (c *MyEventSet) event3() ccmd.IEvent {
	return ccmd.NewEvent("event3")
}

func (c *MyEventSet) listener1() ccmd.IEventListener {
	return NewMyListener()
}

type MyListener struct{}

func (c *MyListener) OnEvent(correlationId string, event ccmd.IEvent, value *crun.Parameters) {
	fmt.Println("Fired event " + event.Name())
}

func NewMyListener() *MyListener {
	return &MyListener{}
}
```
