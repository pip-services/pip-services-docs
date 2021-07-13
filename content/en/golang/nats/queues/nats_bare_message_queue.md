---
type: docs
title: "NatsBareMessageQueue"
linkTitle: "NatsBareMessageQueue"
gitUrl: "https://github.com/pip-services3-go/pip-services3-nats-go"
description: >
    Message queue that sends and receives messages via a NATS message broker.
    
---

**Extends:** [NatsAbstractMessageQueue](../nats_abstract_message_queue)


### Description

The NatsBareMessageQueue class allows you to create message queues that send and receive messages via NATS message broker.

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
    - **serialize_message**: (optional) true to serialize the entire message as JSON, false to only send the message payload (default: true)
    - **retry_connect**: (optional) turns on/off automated reconnect when connection is lost (default: true)
    - **max_reconnect**: (optional) maximum number of reconnection attempts (default: 3)
    - **reconnect_timeout**: (optional) number of milliseconds to wait on each reconnection attempt (default: 3000)
    - **flush_timeout**: (optional) number of milliseconds to wait on flushing messages (default: 3000)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) to resolve credentials
- **\*:connection:nats:\*:1.0** - (optional) Shared connection to NATS service


### Constructors

#### NewNatsBareMessageQueue
Creates a new instance of the message queue.

> NewNatsBareMessageQueue(name string) [*NatsBareMessageQueue]()

- **name**: string - (optional) a queue name.


### Instance methods

#### EndListen
Ends listening for incoming messages.
When this method is call, [Listen](#listen) unblocks the thread and execution continues.

> (c *NatsBareMessageQueue) EndListen(correlationId string)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### listen
Listens for incoming messages and blocks the current thread until the queue is closed.

See [IMessageReceiver](../../../messaging/queues/imessage_receiver)

> (c *NatsBareMessageQueue) Listen(correlationId string, receiver [IMessageReceiver](../../../messaging/queues/imessage_receiver)) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver) - receiver used to receive incoming messages.
- **returns**: error - error or nil no errors occured.


#### Peek
Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue, it returns nil.

> (c *NatsBareMessageQueue) Peek(correlationId string) ([*MessageEnvelope](../../../messaging/queues/message_envelope), error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: ([*MessageEnvelope](../../../messaging/queues/message_envelope), error) - peeked message.

#### PeekBatch
Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue, it returns an empty list.

- Important: This method is not supported by NATS.

> (c *NatsBareMessageQueue) PeekBatch(correlationId string, messageCount int64) ([[]*MessageEnvelope](../../../messaging/queues/message_envelope), error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **messageCount**: int64 - maximum number of messages to peek.
- **returns**: ([[]*MessageEnvelope](../../../messaging/queues/message_envelope), error) - list with peeked messages.

#### Receive
Receives an incoming message and removes it from the queue.

> (c *NatsBareMessageQueue) Receive(correlationId string, waitTimeout time.Duration) ([*MessageEnvelope](../../../messaging/queues/message_envelope), error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **waitTimeout**: time.Duration - timeout in milliseconds to wait for a message to come.
- **returns**: ([*MessageEnvelope](../../../messaging/queues/message_envelope), error) - received message or nil if nothing was received.


### Examples

```go
queue := NewNatsBareMessageQueue("myqueue")
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
