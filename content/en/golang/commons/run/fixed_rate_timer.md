---
type: docs
title: "FixedRateTimer"
linkTitle: "FixedRateTimer"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Timer that is triggered in equal time intervals.

---


### Description

The FixerRateTimer class represents a timer that is triggered in equal time intervals.

Important points

- It has symmetric cross-language implementation and is often used by the Pip.Services toolkit to perform periodic processing and cleanup in microservices.

### Constructors

#### NewFixedRateTimerFromCallback
Creates new instance of the timer and sets its values.

> NewFixedRateTimerFromCallback(callback func(), interval int, delay int) [*FixedRateTimer]()

- **callback**: func() - (optional) a Notifiable object or callback function to call when timer is triggered.
- **interval**: int - (optional) an interval to trigger timer in milliseconds.
- **delay**: int - (optional) a delay before the first triggering in milliseconds.

#### NewFixedRateTimerFromTask
Creates new instance of the timer and sets its values.

> NewFixedRateTimerFromTask(task [INotifiable](../inotifiable), interval int, delay int) [*FixedRateTimer]()

- **task**: [INotifiable](../inotifiable) - Notifiable object to call when timer is triggered.
- **interval**: int - (optional) an interval to trigger timer in milliseconds.
- **delay**: int - (optional) a delay before the first triggering in milliseconds.

#### NewFixedRateTimer
Creates new instance of the timer and sets its values.

> NewFixedRateTimer() [*FixedRateTimer]()

### Methods

#### Close
Closes the timer.

This is required by [ICloseable](../icloseable) interface,
but besides that it is identical to [Stop()](#stop).

> (c [*FixedRateTimer]()) Close(correlationId string) error

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

#### Callback
Gets the callback function that is called when this timer is triggered.

> (c [*FixedRateTimer]()) Callback() func()

- **returns**: func() - the callback function or nil if it is not set. 


#### Delay
Gets initial delay before the timer is triggered for the first time.

> (c [*FixedRateTimer]()) Delay() int

- **returns**: int - the delay in milliseconds.

#### Interval
Gets periodic timer triggering interval.

> (c [*FixedRateTimer]()) Interval() int

- **returns**: int - the interval in milliseconds


#### Task
Gets the INotifiable object that receives notifications from this timer.

> (c [*FixedRateTimer]()) Task() [INotifiable](../inotifiable)

- **returns**: [INotifiable](../inotifiable) - the INotifiable object or nil if it is not set.


#### SetTask
Sets a new INotifiable object to receive notifications from this timer.

> (c [*FixedRateTimer]()) SetTask(value [INotifiable](../inotifiable))

- **value**: [INotifiable](../inotifiable) - a INotifiable object to be triggered.

#### IsStarted
Checks if the timer is started.

> (c [*FixedRateTimer]()) IsStarted() bool

- **returns**: bool - true if the timer is started and false if it is stopped.

#### SetCallback
Sets the callback function that is called when this timer is triggered.

> (c [*FixedRateTimer]()) SetCallback(value func())

- **value**: func() - the callback function to be called.

#### SetDelay
Sets initial delay before the timer is triggered for the first time.

> (c [*FixedRateTimer]()) SetDelay(value int)

- **value**: int - a delay in milliseconds. 

#### SetInterval
Sets periodic timer triggering interval.

> (c [*FixedRateTimer]()) SetInterval(value int)

- **value**: int - an interval in milliseconds.

#### Start
Starts the timer.

Initially the timer is triggered after delay.
After that it is triggered after interval until it is stopped.

> (c [*FixedRateTimer]()) Start()


#### Stop
Stops the timer.

> (c [*FixedRateTimer]()) Stop()

### Examples
```go
type MyComponent {
	timer FixedRateTimer
}
...
func (mc* MyComponent) open(correlationId string) {
	...
	mc.timer = NewFixedRateTimerFromCallback(() => { this.cleanup }, 60000, 0);
    mc.timer.start();
    ...
}
 
func (mc* MyComponent) open(correlationId: string){
    ...
    mc.timer.stop();
    ...
}

```

### See also
- #### [INotifiable](../inotifiable)
