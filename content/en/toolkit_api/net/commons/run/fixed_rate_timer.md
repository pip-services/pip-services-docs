---
type: docs
title: "FixedRateTimer"
linkTitle: "FixedRateTimer"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Timer that is triggered in equal time intervals.

---

**Inherits**: [IClosable](../iclosable)

### Description

The FixerRateTimer class represents a timer that is triggered in equal time intervals.

**Important points**

- It has a symmetric cross-language implementation and is often used by the Pip.Services toolkit to perform periodic processing and cleanup in microservices.

### Constructors
Creates a new instance of the timer and sets its values.

> `public` FixedRateTimer(Action task, int interval, int delay)

- **taskOrCallback**: Action - (optional) Notifiable object or callback function to call when timer is triggered.
- **interval**: int - (optional) interval to trigger timer (in milliseconds).
- **delay**: int - (optional) delay before the first triggering (in milliseconds).


Creates new instance of the timer with default parameters.

> `public` FixedRateTimer()


### Properties

#### Task
Gets the INotifiable object that receives notifications from this timer.
> `public` Action Task { get; set; }


#### Delay
Gets the initial delay before the timer is triggered for the first time.
> `public` int Delay { get; set; }


#### Interval
Gets the periodic timer triggering interval.
> `public` int Interval { get; set; }


#### IsStarted
Checks if the timer has started. 
True if the timer has started and false if it has stopped.

> `public` bool IsStarted [ get, private set ]


### Instance methods

#### Restart
Restarts the timer.

> void Restart()


#### Start
Starts the timer.

Initially the timer is triggered after delay.
After that, it is triggered after an interval, until it is stopped.

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
