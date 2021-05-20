---
type: docs
title: "FixedRateTimer"
linkTitle: "FixedRateTimer"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Timer that is triggered in equal time intervals.

---

**Implements:** [IClosable](../iclosable)

### Description

The FixerRateTimer class represents a timer that is triggered in equal time intervals.

Important points

- It has symmetric cross-language implementation and is often used by the Pip.Services toolkit to perform periodic processing and cleanup in microservices.

### Constructors
Creates new instance of the timer and sets its values.

> `public` FixedRateTimer(Action task, int interval, int delay)

- **taskOrCallback**: Action - (optional) a Notifiable object or callback function to call when timer is triggered.
- **interval**: int - (optional) an interval to trigger timer in milliseconds.
- **delay**: int - (optional) a delay before the first triggering in milliseconds.


Creates new instance of the timer with default parameters.

> `public` FixedRateTimer()


### Properties

#### Task
Gets the INotifiable object that receives notifications from this timer.
> `public` Action Task [ get, set ]


#### Delay
Gets initial delay before the timer is triggered for the first time.
> `public` int Delay [ get, set ]


#### Interval
Gets periodic timer triggering interval.
> `public` int Interval [ get, set ]


#### IsStarted
Checks if the timer is started. 
True if the timer is started and false if it is stopped.

> `public` bool IsStarted [ get, private set ]


### Methods

#### Restart
Restart the timer.

> void Restart()


#### Start
Starts the timer.

Initially the timer is triggered after delay.
After that it is triggered after interval until it is stopped.

> `public` void Start()


#### Stop
Stops the timer.

> `public` void Stop()


### Example
```cs
class MyComponent 
{
    var timer = new FixedRateTimer(() => { this.cleanup }, 60000, 0);
    ...
    public void )pen(string correlationId)
    {
        ...
        timer.Start();
        ...
    }
    public void Open(string correlationId)
    {
        ...
        timer.Stop();
        ...
    }
    private void Cleanup()
    {
    ...
    }
    ...
}

```

### See also
- #### [INotifiable](../inotifiable)
