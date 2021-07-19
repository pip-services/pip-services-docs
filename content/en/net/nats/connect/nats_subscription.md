---
type: docs
title: "NatsSubscription"
linkTitle: "NatsSubscription"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-nats-dotnet"
description: >
    Defines NATS subscription fields.

---

### Description

The NatsSubscription class defines NATS subscription fields.


### Properties

<span class="hide-title-link">

#### Subject
Subject
> `public` string Subject { get; set; }
#### Queue
Queue
> `public` string Queue { get; set; }
#### Handler
Handler
> `public` IAsyncSubscription Handler { get; set; }
#### Listener
Listener
> `public` [INatsMessageListener](../inats_message_listener) Listener { get; set; } 

</span>
