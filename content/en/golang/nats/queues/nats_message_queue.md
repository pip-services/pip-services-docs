---
type: docs
title: "NatsMessageQueue"
linkTitle: "NatsMessageQueue"
gitUrl: "https://github.com/pip-services3-go/pip-services3-nats-go"
description: >
    Message queue that sends and receives messages via the NATS message broker.
    
---

**Implements:** [NatsAbstractMessageQueue](../nats_abstract_message_queue)

### Description

The NatsMessageQueue class allows you to create a message queue that sends and receives messages via the NATS message broker.

#### Configuration parameters

- **subject**: name of NATS topic (subject) to subscribe
- **queue_group**: name of NATS queue group
- **connection(s)**:
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store
    - **username**: username
    - **password**: user's password
- **options**:
    - **serialize_message**: (optional) true to serialize entire message as JSON, false to send only the message payload (default: true)
    - **autosubscribe**: (optional) true to automatically subscribe on option (default: false)
    - **retry_connect**: (optional) turns on/off automated reconnect when connection is lost (default: true)
    - **max_reconnect**: (optional) maximum number of reconnection attempts (default: 3)
    - **reconnect_timeout**: (optional) number of milliseconds to wait on each reconnection attempt (default: 3000)
    - **flush_timeout**: (optional) number of milliseconds to wait on flushing messages (default: 3000)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) to resolve credentials
- **\*:connection:nats:\*:1.0** - (optional) shared connection to NATS service


### Constructors

#### NewNatsMessageQueue
Creates a new instance of the message queue.

> NewNatsMessageQueue(name string) [*NatsMessageQueue]()

- **name**: string - (optional) queue name.


### Fields

<span class="hide-title-link">


#### autoSubscribe
Auto-subscribe option
> **autoSubscribe**: bool


#### messages
Messages
> **messages**: [[]MessageEnvelope](../../../messaging/queues/message_envelope)

#### receiver
Message receiver
> **receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver)

#### subscribed
Subscrie option
> **subscribed**: bool

</span>


### Methods

#### Clear
Clears a component's state.

> (c *NatsMessageQueue) Clear(correlationId string) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) - error or nil no errors occured.


#### Close
Closes a component and frees used resources.

> (c *NatsMessageQueue) Close(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil no errors occured.


#### Configure
Configures a component by passing its configuration parameters.

> (c *NatsMessageQueue) Configure(config [*ConfigParams](../../../commons/config/config_params))

- **config:**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### EndListen
Ends listening for incoming messages.
When this method is call, [Listen](#listen) unblocks the thread and execution continues.

> (c *NatsMessageQueue) EndListen(correlationId string)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Listen
Listens for incoming messages and blocks the current thread until the queue is closed.

See [IMessageReceiver](../../../messaging/queues/imessage_receiver)

> (c *NatsMessageQueue) Listen(correlationId string, receiver [IMessageReceiver](../../../messaging/queues/imessage_receiver)) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver) - receiver used to receive incoming messages.
- **returns**: error - error or nil no errors occured.


#### OnMessage
Checks if the message is not nil. If this is the case, deserializes and sends it to the receiver if it’s set. Otherwise, puts it into the queue.

> (c *NatsMessageQueue) OnMessage(msg *nats.Msg)

- **msg**: *nats.Msg - message


#### Open
Opens the component.

> (c *NatsMessageQueue) Open(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil no errors occured.


#### Peek
Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue, it returns nil.

> (c *NatsMessageQueue) Peek(correlationId string) ([*MessageEnvelope](../../../messaging/queues/message_envelope), error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: ([*MessageEnvelope](../../../messaging/queues/message_envelope), error) - peeked message.

#### PeekBatch
Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue, it returns an empty list.

- Important: This method is not supported by NATS.

> (c *NatsMessageQueue) PeekBatch(correlationId string, messageCount int64) ([[]*MessageEnvelope](../../../messaging/queues/message_envelope), error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **messageCount**: int64 - maximum number of messages to peek.
- **returns**: ([[]*MessageEnvelope](../../../messaging/queues/message_envelope), error) - list with peeked messages.

#### ReadMessageCount
Reads the current number of messages in the queue to be delivered.

> (c *NatsMessageQueue) ReadMessageCount() (count int64, err error)

- ***returns**: (count int64, err error) - number of messages in the queue.

#### Receive
Receives an incoming message and removes it from the queue.

> (c *NatsMessageQueue) Receive(correlationId string, waitTimeout time.Duration) ([*MessageEnvelope](../../../messaging/queues/message_envelope), error)

- **correlationId**: string - checks if the message comes from the right topic. If this is the case, deserializes and sends it to the receiver if it’s set. Otherwise, puts it into the queue.
- **waitTimeout**: time.Duration - timeout (milliseconds) to wait for a message to come.
- **returns**: ([*MessageEnvelope](../../../messaging/queues/message_envelope), error) - received message or nil if nothing was received.


#### Subscribe
Subscribes to a subject.
> (c *NatsMessageQueue) subscribe(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil no errors occured.


### Examples

```go
queue := NewNatsMessageQueue("myqueue")
queue.Configure(cconf.NewConfigParamsFromTuples(
  "subject", "mytopic",
  "queue_group", "mygroup",
  "connection.protocol", "nats"
  "connection.host", "localhost"
  "connection.port", 1883
))
queue.open("123")
queue.Send("123", NewMessageEnvelope("", "mymessage", "ABC"))
message, err := queue.Receive("123")
if (message != nil) {
	...
	queue.Complete("123", message);
}
```


### See also
- #### [MessageQueue](../../../messaging/queues/message_queue)
- #### [MessagingCapabilities](../../../messaging/queues/messaging_capabilities)
