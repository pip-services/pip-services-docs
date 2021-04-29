---
type: docs
title: "IEventListener"
linkTitle: "IEventListener" 
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
---

### Type

```go
type IEventListener interface {}
```

An interface for listener objects that receive notifications on fired events.

see [IEvent](../ievent), [Event](../event)

**Example:**

```go
type MyListener {
   msg string;
}
 
func (l* MyListener) onEvent(correlationId string, event IEvent, args Parameters) {
       fmt.Println("Fired event " + event.Name());
}
 
let event = NewEvent("myevent");
_listener := MyListener{};
event.addListener(_listener);
event.notify("123", Parameters.FromTuples("param1", "ABC"));
 
// Console output: Fired event myevent
```

### Funcs

#### OnEvent
> OnEvent(correlationId [string](https://pkg.go.dev/builtin#string), e [IEvent](../ievent), value *[run.Parameters](../../run/parameters))

A method called when events this listener is subscrubed to are fired.

- correlationId: [string](https://pkg.go.dev/builtin#string) (optional) transaction id to trace execution through call chain.
- e: [IEvent](../ievent) a fired evemt
- value: *[run.Parameters](../../run/parameters) event arguments.
