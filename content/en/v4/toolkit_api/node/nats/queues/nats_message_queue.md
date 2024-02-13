---
type: docs
title: "NatsMessageQueue"
linkTitle: "NatsMessageQueue"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-nats-node"
description: >
    Message queue that sends and receives messages via the NATS message broker.
    
---

**Extends:** [NatsAbstractMessageQueue](../nats_abstract_message_queue)

### Description

The NatsMessageQueue class allows you to create a message queue that sends and receives messages via the NATS message broker.

#### Configuration parameters

- **subject**: name of NATS topic (subject) to subscribe
- **queue_group**: name of NATS queue group
- **connection(s)**:
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store)
    - **username**: username
    - **password**: user's password
- **options**:
    - **serialize_message**: (optional) true to serialize entire message as JSON, false to send only the message payload (default: true)
    - **retry_connect**: (optional) turns on/off automated reconnect when connection is lost (default: true)
    - **max_reconnect**: (optional) maximum number of reconnection attempts (default: 3)
    - **reconnect_timeout**: (optional) number of milliseconds to wait on each reconnection attempt (default: 3000)
    - **flush_timeout**: (optional) number of milliseconds to wait on flushing messages (default: 3000)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../config/auth/icredential_store) to resolve credentials
- **\*:connection:nats:\*:1.0** - (optional) shared connection to NATS service


### Constructors
Creates a new instance of the message queue.

> `public` constructor(name?: string)

- **name**: string - (optional) queue name.


### Fields

<span class="hide-title-link">


#### _autoSubscribe
Auto-subscribe option
> `protected` **_autoSubscribe**: boolean


#### _messages
Messages
> `protected` **_messages**: [MessageEnvelope[]](../../../messaging/queues/message_envelope)

#### _receiver
Message receiver
> `protected` **_receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver)

#### _subscribed
Subscrie option
> `protected` **_subscribed**: boolean

</span>


### Instance methods

#### clear
Clears a component's state.

> `public` clear(context: string): Promise\<void\>

- **context**: string - (optional) a context to trace execution through a call chain.


#### close
Closes a component and frees used resources.

> `public` close(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures a component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config:**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### endListen
Ends listening for incoming messages.
When this method is call, [listen](#listen) unblocks the thread and execution continues.

> `public` endListen(context: [IContext](../../../components/context/icontext)): void

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### listen
Listens for incoming messages and blocks the current thread until the queue is closed.

See [IMessageReceiver](../../../messaging/queues/imessage_receiver)

> `public` listen(context: [IContext](../../../components/context/icontext), receiver: [IMessageReceiver](../../../messaging/queues/imessage_receiver)): void

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver) - receiver used to receive incoming messages.


#### onMessage
Checks if the message is not null. If this is the case, deserializes and sends it to the receiver if it's set. Otherwise, puts it into the queue.

> `public` onMessage(err: any, msg: any)

- **err**: any - error
- **msg**: any - message


#### open
Opens the component.

> `public` open(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### peek
Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue, it returns null.

> `public` peek(context: [IContext](../../../components/context/icontext)): Promise<[MessageEnvelope](../../../messaging/queues/message_envelope)>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Promise<[MessageEnvelope](../../../messaging/queues/message_envelope)> - peeked message.

#### peekBatch
Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue, it returns an empty list.

- Important: This method is not supported by NATS.

> `public` peekBatch(context: [IContext](../../../components/context/icontext), messageCount: number): Promise<[MessageEnvelope[]](../../../messaging/queues/message_envelope)>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **messageCount**: number - maximum number of messages to peek.
- **returns**: Promise<[MessageEnvelope[]](../../../messaging/queues/message_envelope)> - list with peeked messages.

#### readMessageCount
Reads the current number of messages in the queue to be delivered.

> `public` readMessageCount(): Promise\<number\>

- ***returns**: Promise\<number\> - number of messages in the queue.

#### receive
Receives an incoming message and removes it from the queue.

> `public` receive(context: [IContext](../../../components/context/icontext), waitTimeout: number): Promise<[MessageEnvelope](../../../messaging/queues/message_envelope)>

- **context**: [IContext](../../../components/context/icontext) - checks if the message comes from the right topic. If this is the case, deserializes and sends it to the receiver if it's set. Otherwise, puts it into the queue.
- **waitTimeout**: number - timeout (milliseconds) to wait for a message to come.
- **returns**: Promise<[MessageEnvelope](../../../messaging/queues/message_envelope)> - received message or null if nothing was received.


#### subscribe
Subscribes to a subject.
> `protected` subscribe(context: [IContext](../../../components/context/icontext)): Promise\<void\> 

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


### Examples

```typescript
let queue = new NatsMessageQueue("myqueue");
queue.configure(ConfigParams.fromTuples(
  "topic", "mytopic",
  "connection.protocol", "nats"
  "connection.host", "localhost"
  "connection.port", 1883
));

await queue.open("123");

await queue.send("123", new MessageEnvelope(null, "mymessage", "ABC"));

let message = await queue.receive("123");

if (message != null) {
   ...
   await queue.complete("123", message);
}
```


### See also
- #### [MessageQueue](../../../messaging/queues/message_queue)
- #### [MessagingCapabilities](../../../messaging/queues/messaging_capabilities)
