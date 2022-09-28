---
type: docs
title: "FixedRateTimer"
linkTitle: "FixedRateTimer"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    Timer that is triggered in equal time intervals.

---


### Description

The FixerRateTimer class represents a timer that is triggered in equal time intervals.

Important points

- It has a symmetric cross-language implementation and is often used by the Pip.Services toolkit to perform periodic processing and cleanup in microservices.

### Constructors

#### NewFixedRateTimerFromCallback
Creates new instance of the timer and sets its values.

> NewFixedRateTimerFromCallback(callback func(ctx context.Context), interval int, delay int, workerCount int) [*FixedRateTimer]()

- **callback**: func(ctx context.Context) - (optional) Notifiable object or callback function to call when timer is triggered.
- **interval**: int - (optional) interval to trigger the timer in milliseconds.
- **delay**: int - (optional) delay before the first triggering in milliseconds.
- **workerCount**: int - int a count of parallel running workers.

#### NewFixedRateTimerFromTask
Creates new instance of the timer and sets its values.

> NewFixedRateTimerFromTask(task [INotifiable](../inotifiable), interval int, delay int, workerCount int) [*FixedRateTimer]()

- **task**: [INotifiable](../inotifiable) - Notifiable object used to call when the timer is triggered.
- **interval**: int - (optional) interval used to trigger the timer in milliseconds.
- **delay**: int - (optional) delay before the first triggering in milliseconds.
- **workerCount**: int - int a count of parallel running workers.

#### NewFixedRateTimer
Creates new instance of the timer and sets its values.

> NewFixedRateTimer() [*FixedRateTimer]()

### Methods

#### Close
Closes the timer.

This is required by [IClosable](../iclosable) interface,
but besides that, it is identical to [Stop()](#stop).

> (c [*FixedRateTimer]()) Close(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### Callback
Gets the callback function that is called when this timer is triggered.

> (c [*FixedRateTimer]()) Callback() func(ctx context.Context)

- **returns**: func(ctx context.Context) - callback function or nil if it is not set. 


#### Delay
Gets the initial delay before the timer is triggered for the first time.

> (c [*FixedRateTimer]()) Delay() int

- **returns**: int - delay in milliseconds.

#### Interval
Gets the periodic timer's triggering interval.

> (c [*FixedRateTimer]()) Interval() int

- **returns**: int - interval in milliseconds


#### Task
Gets the INotifiable object that receives notifications from this timer.

> (c [*FixedRateTimer]()) Task() [INotifiable](../inotifiable)

- **returns**: [INotifiable](../inotifiable) - INotifiable object or nil if it is not set.


#### SetTask
Sets a new INotifiable object to receive notifications from this timer.

> (c [*FixedRateTimer]()) SetTask(value [INotifiable](../inotifiable))

- **value**: [INotifiable](../inotifiable) - INotifiable object to be triggered.

#### IsStarted
Checks if the timer is started.

> (c [*FixedRateTimer]()) IsStarted() bool

- **returns**: bool - true if the timer is started and false if it is stopped.

#### SetCallback
Sets the callback function that is called when this timer is triggered.

> (c [*FixedRateTimer]()) SetCallback(value func(ctx context.Context))

- **value**: func(ctx context.Context) - callback function to be called.

#### SetDelay
Sets initial delay before the timer is triggered for the first time.

> (c [*FixedRateTimer]()) SetDelay(value int)

- **value**: int - delay in milliseconds. 

#### SetInterval
Sets periodic timer triggering interval.

> (c [*FixedRateTimer]()) SetInterval(value int)

- **value**: int - interval in milliseconds.

#### Start
Starts the timer.

Initially the timer is triggered after a delay.
After that, it is triggered after the interval until it is stopped.

> (c [*FixedRateTimer]()) Start(ctx context.Context)

- **ctx**: context.Context - operation context


#### Stop
Stops the timer.

> (c [*FixedRateTimer]()) Stop(ctx context.Context)

- **ctx**: context.Context - operation context


### Examples
```go
type MyComponent {
    timer *FixedRateTimer
}

...

func (mc* MyComponent) Open(ctx, context.Context, correlationId string) {
	...
	mc.timer = NewFixedRateTimerFromCallback(func(ctx context.Context){ this.cleanup }, 60000, 0, 5);
	mc.timer.Start(ctx);
	...
}

func (mc* MyComponent) Close(ctx context.Context, correlationId: string){
	...
	mc.timer.Stop(ctx);
	...
}

```

### See also
- #### [INotifiable](../inotifiable)
